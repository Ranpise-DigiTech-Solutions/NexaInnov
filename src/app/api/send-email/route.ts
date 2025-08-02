// src/app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';

// 1. Schema and Type Definitions
// Corrected Zod Schema to be more strict and match client-side requirements
const EmailRequestSchema = z.union([
  z.object({
    type: z.literal('quote'),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phoneNo: z.string().optional(),
    companyName: z.string().optional(),
    projectType: z.string().optional(), // These are optional based on your form, so this is fine
    projectBudget: z.string().optional(), // Same here
    projectTimeline: z.string().optional(), // Same here
    projectDetails: z.string().min(1, 'Project details are required').max(2000, 'Project details too long'),
    filesUrl: z.array(z.string()).optional(),
  }),
  z.object({
    type: z.literal('enrollment'),
    // These fields are all required in the enrollment flow, so they are fine as is.
    courseTitle: z.string().min(1, 'Course title is required'),
    courseSlug: z.string(),
    durationInHours: z.number(),
    selectedRegion: z.string(),
    hourlyRate: z.number(),
    currency: z.string(),
    totalFee: z.number(),
    userName: z.string().optional(),
    userEmail: z.string().email('Invalid email address').optional(),
  }),
]);

type EmailRequest = z.infer<typeof EmailRequestSchema>;


// IMPORTANT: Get environment variables from .env.local
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const QUOTE_RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL;
const COURSE_RECIPIENT_EMAIL = process.env.COURSE_RECIPIENT_EMAIL;

// Brevo API Endpoint for sending transactional emails
const BREVO_SEND_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';


export async function POST(request: Request) {
  // Basic check for required environment variables
  if (!BREVO_API_KEY || !SENDER_EMAIL || !QUOTE_RECIPIENT_EMAIL || !COURSE_RECIPIENT_EMAIL) {
    console.error("Missing environment variables for email sending. Please check your .env.local file.");
    return NextResponse.json(
      { message: 'Server configuration error: Email settings missing.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Validate the incoming data with the corrected schema
    const validatedData = EmailRequestSchema.parse(body);

    let subject: string;
    let htmlContent: string;
    let senderEmailForReplyTo: string | undefined;
    let currentRecipientEmail: string;

    if (validatedData.type === 'quote') {
      subject = `New Project Quote Request from ${validatedData.name}`;
      htmlContent = `
        <p><strong>--- New Project Quote Request ---</strong></p>
        <p><strong>Customer Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Mobile No:</strong> ${validatedData.phoneNo || 'N/A'}</p>
        <p><strong>Company Name:</strong> ${validatedData.companyName || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType || 'N/A'}</p>
        <p><strong>Project Budget:</strong> ${validatedData.projectBudget || 'N/A'}</p>
        <p><strong>Project Timeline:</strong> ${validatedData.projectTimeline || 'N/A'}</p>
        <br>
        <p><strong>Project Details:</strong></p>
        <p>${validatedData.projectDetails.replace(/\n/g, '<br>')}</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's quote form.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = QUOTE_RECIPIENT_EMAIL;

    } else { // validatedData.type === 'enrollment'
      subject = `Enrollment Inquiry for: ${validatedData.courseTitle}`;
      htmlContent = `
        <p><strong>--- New Course Enrollment Inquiry ---</strong></p>
        <p><strong>Course Title:</strong> ${validatedData.courseTitle}</p>
        <p><strong>Course Slug:</strong> ${validatedData.courseSlug}</p>
        <p><strong>Duration:</strong> ${validatedData.durationInHours} hours</p>
        <p><strong>Selected Region:</strong> ${validatedData.selectedRegion}</p>
        <p><strong>Calculated Hourly Rate for Region:</strong> ${validatedData.currency} $${validatedData.hourlyRate}/hr</p>
        <p><strong>Total Estimated Fee:</strong> ${validatedData.totalFee.toLocaleString()}</p>
        <br>
        ${validatedData.userName ? `<p><strong>Customer Name:</strong> ${validatedData.userName}</p>` : ''}
        ${validatedData.userEmail ? `<p><strong>Customer Email:</strong> ${validatedData.userEmail}</p>` : ''}
        <br>
        <p>Please provide further details on how to proceed with the enrollment.</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's course enrollment page.</p>
      `;
      senderEmailForReplyTo = validatedData.userEmail;
      currentRecipientEmail = COURSE_RECIPIENT_EMAIL;
    }

    // --- DIRECT AXIOS CALL TO BREVO API ---
    const brevoPayload = {
      sender: { email: SENDER_EMAIL },
      to: [{ email: currentRecipientEmail }],
      subject: subject,
      htmlContent: htmlContent,
      ...(senderEmailForReplyTo && { replyTo: { email: senderEmailForReplyTo } }),
    };

    const requestHeaders = {
      'accept': 'application/json',
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json',
    };

    await axios.post(BREVO_SEND_EMAIL_URL, brevoPayload, { headers: requestHeaders });

    console.log(`Email of type '${validatedData.type}' sent successfully via Brevo to ${currentRecipientEmail}!`);
    return NextResponse.json({ message: 'Your request has been successfully sent!' }, { status: 200 });

  } catch (error) {
    console.error(`Error sending email:`, error);

    if (error instanceof z.ZodError) {
      // The ZodError object contains a detailed array of all validation issues.
      // This is very helpful for debugging.
      console.error("Zod Validation Errors:", error.errors);
      return NextResponse.json({ message: 'Validation Error', errors: error.errors }, { status: 400 });
    }

    // Improved error handling for Axios errors
    if (axios.isAxiosError(error) && error.response) {
      console.error("Brevo API Error Details:", error.response.data);
      const errorMessage = typeof error.response.data === 'string'
          ? error.response.data
          : (error.response.data as any)?.message || JSON.stringify(error.response.data);
      return NextResponse.json({ message: 'Brevo API Error: ' + errorMessage }, { status: error.response.status || 500 });
    }

    // Generic fallback error
    return NextResponse.json({ message: 'Failed to send your request. Please try again later.' }, { status: 500 });
  }
}