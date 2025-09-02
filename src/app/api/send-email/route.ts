// src/app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import axios from 'axios';

// 1. Schema and Type Definitions
const EmailRequestSchema = z.union([
  z.object({
    type: z.literal('quote'),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phoneNo: z.string().optional(),
    companyName: z.string().optional(),
    projectType: z.string().optional(),
    projectBudget: z.string().optional(),
    projectTimeline: z.string().optional(),
    projectDetails: z.string().min(1, 'Project details are required').max(2000, 'Project details too long'),
    filesUrl: z.array(z.string()).optional(),
  }),
  z.object({
    type: z.literal('enrollment'),
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
  z.object({
    type: z.literal('media-inquiry'),
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNo: z.string().optional(),
    organization: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  }),
  // ✅ 1. Add the new 'newsletter' schema to the Zod union
  z.object({
    type: z.literal('newsletter'),
    email: z.string().email({ message: "Invalid email address." }),
  }),
  z.object({
    type: z.literal('faq-query'),
    query: z.string().min(1, "Question cannot be empty."),
  }),
  // 🆕 Add the new 'contact' schema to the Zod union
  z.object({
    type: z.literal('contact'),
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    phoneNo: z.string().optional(),
    subject: z.string().min(1, { message: "Subject is required." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  }),
  // 🆕 Add the new 'sales-enquiry' schema
  z.object({
    type: z.literal('sales-enquiry'),
    name: z.string().min(1, 'Name is required.'),
    email: z.string().email('Invalid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.'),
  }),
  // 🆕 Add the new 'support-query' schema
  z.object({
    type: z.literal('support-query'),
    name: z.string().min(1, 'Name is required.'),
    email: z.string().email('Invalid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.'),
  }),
]);

type EmailRequest = z.infer<typeof EmailRequestSchema>;


// IMPORTANT: Get environment variables from .env.local
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const QUOTE_RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL;
const COURSE_RECIPIENT_EMAIL = process.env.COURSE_RECIPIENT_EMAIL;
const MEDIA_RECIPIENT_EMAIL = process.env.MEDIA_RECIPIENT_EMAIL;
// ✅ 2. Add the new recipient email variable for newsletter
const NEWSLETTER_RECIPIENT_EMAIL = process.env.NEWSLETTER_RECIPIENT_EMAIL;
// 🆕 Add the new recipient email variable for FAQ
const FAQ_RECIPIENT_EMAIL = process.env.FAQ_RECIPIENT_EMAIL;
// 🆕 Add the new recipient email variable for Contact
const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL;
// 🆕 Add the new recipient email variables for Sales and Support
const SALES_RECIPIENT_EMAIL = process.env.SALES_RECIPIENT_EMAIL;
const SUPPORT_RECIPIENT_EMAIL = process.env.SUPPORT_RECIPIENT_EMAIL;


// Brevo API Endpoint for sending transactional emails
const BREVO_SEND_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';


export async function POST(request: Request) {
  // Basic check for required environment variables
  if (!BREVO_API_KEY || !SENDER_EMAIL || !QUOTE_RECIPIENT_EMAIL || !COURSE_RECIPIENT_EMAIL || !MEDIA_RECIPIENT_EMAIL || !NEWSLETTER_RECIPIENT_EMAIL || !FAQ_RECIPIENT_EMAIL || !CONTACT_RECIPIENT_EMAIL || !SALES_RECIPIENT_EMAIL || !SUPPORT_RECIPIENT_EMAIL) {
    console.error("Missing environment variables for email sending. Please check your .env.local file.");
    return NextResponse.json(
      { message: 'Server configuration error: Email settings missing.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    console.log("Received payload:", body);

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
        <p><strong>ProjectType:</strong> ${validatedData.projectType || 'N/A'}</p>
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

    } else if (validatedData.type === 'enrollment') {
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

    } else if (validatedData.type === 'media-inquiry') { // This block handles the media inquiry
      subject = `New Media Inquiry from ${validatedData.name}`;
      htmlContent = `
        <p><strong>--- New Media Inquiry ---</strong></p>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone No:</strong> ${validatedData.phoneNo || 'N/A'}</p>
        <p><strong>Organization:</strong> ${validatedData.organization || 'N/A'}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's newsroom contact form.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = MEDIA_RECIPIENT_EMAIL;
      
    } else if (validatedData.type === 'newsletter') {
      subject = `New Newsletter Subscriber: ${validatedData.email}`;
      htmlContent = `
        <p><strong>--- New Newsletter Subscriber ---</strong></p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <br>
        <p>This person has subscribed to your newsletter via the website.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = NEWSLETTER_RECIPIENT_EMAIL;

    } else if (validatedData.type === 'faq-query') {
      subject = `New FAQ Query from Website`;
      htmlContent = `
        <p><strong>--- New FAQ Query ---</strong></p>
        <p><strong>Query:</strong> ${validatedData.query.replace(/\n/g, '<br>')}</p>
        <br>
        <p>This email was generated from the website's FAQ section.</p>
      `;
      senderEmailForReplyTo = undefined;
      currentRecipientEmail = FAQ_RECIPIENT_EMAIL;
    } else if (validatedData.type === 'contact') {
      subject = validatedData.subject;
      htmlContent = `
        <p><strong>--- New Contact Message from Website ---</strong></p>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone No:</strong> ${validatedData.phoneNo || 'N/A'}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's main contact form.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = CONTACT_RECIPIENT_EMAIL;
    } 
    // ✅ Handle the new 'sales-enquiry' type
    else if (validatedData.type === 'sales-enquiry') {
      subject = `New Sales Enquiry from ${validatedData.name}`;
      htmlContent = `
        <p><strong>--- New Sales Enquiry ---</strong></p>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's sales form.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = SALES_RECIPIENT_EMAIL;
    }
    // ✅ Handle the new 'support-query' type
    else if (validatedData.type === 'support-query') {
      subject = `New Support Query from ${validatedData.name}`;
      htmlContent = `
        <p><strong>--- New Support Query ---</strong></p>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>---</p>
        <p>This email was generated from your website's support form.</p>
      `;
      senderEmailForReplyTo = validatedData.email;
      currentRecipientEmail = SUPPORT_RECIPIENT_EMAIL;
    }
    else {
      // 🚨 Fallback for any unhandled type to prevent "used before assigned" error
      subject = 'Unhandled Email Request Type';
      htmlContent = `<p>An email request of an unknown type was received.</p><p>Payload: ${JSON.stringify(validatedData)}</p>`;
      senderEmailForReplyTo = undefined;
      currentRecipientEmail = SENDER_EMAIL; // Fallback to a safe email
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
      console.error("Zod Validation Errors:", error.errors);
      return NextResponse.json({ message: 'Validation Error', errors: error.errors }, { status: 400 });
    }

    if (axios.isAxiosError(error) && error.response) {
      console.error("Brevo API Error Details:", error.response.data);
      const errorMessage = typeof error.response.data === 'string'
          ? error.response.data
          : (error.response.data as any)?.message || JSON.stringify(error.response.data);
      return NextResponse.json({ message: 'Brevo API Error: ' + errorMessage }, { status: error.response.status || 500 });
    }

    return NextResponse.json({ message: 'Failed to send your request. Please try again later.' }, { status: 500 });
  }
}