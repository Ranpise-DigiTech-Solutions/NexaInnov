import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";
import { validateEmail, isSuspiciousEmail } from "@/lib/validation";

/* ---------------- Schema Definitions ---------------- */

const BaseSchema = z.object({
  honeypot: z.string().optional(),
});

const EmailRequestSchema = z.union([
  BaseSchema.extend({
    type: z.literal("quote"),
    name: z.string().min(1),
    email: z.string().email(),
    phoneNo: z.string().optional(),
    companyName: z.string().optional(),
    projectType: z.string().optional(),
    projectBudget: z.string().optional(),
    projectTimeline: z.string().optional(),
    projectDetails: z.string().min(1).max(2000),
    filesUrl: z.array(z.string()).optional(),
  }),

  BaseSchema.extend({
    type: z.literal("enquiry"),
    courseTitle: z.string().min(1),
    courseSlug: z.string(),
    durationInHours: z.number(),
    selectedRegion: z.string(),
    hourlyRate: z.number(),
    currency: z.string(),
    totalFee: z.number(),
    fullName: z.string().min(1),
    userEmail: z.string().email(),
    phone: z.string().min(1),
    role: z.string().min(1),
    preferredModule: z.string().min(1),
    trainingLevel: z.string().min(1),
    trainingMode: z.string().min(1),
    topics: z.string().optional(),
  }),

  BaseSchema.extend({
    type: z.literal("contact"),
    name: z.string().min(1),
    email: z.string().email(),
    phoneNo: z.string().optional(),
    subject: z.string().min(1),
    message: z.string().min(10),
  }),

  BaseSchema.extend({
    type: z.literal("sales-enquiry"),
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(10),
  }),

  BaseSchema.extend({
    type: z.literal("support-query"),
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(10),
  }),

  BaseSchema.extend({
    type: z.literal("newsletter"),
    email: z.string().email(),
  }),
]);

type EmailRequest = z.infer<typeof EmailRequestSchema>;

/* ---------------- Environment Variables ---------------- */

const {
  BREVO_API_KEY,
  SENDER_EMAIL,
  QUOTE_RECIPIENT_EMAIL,
  COURSE_RECIPIENT_EMAIL,
  CONTACT_RECIPIENT_EMAIL,
  SALES_RECIPIENT_EMAIL,
  SUPPORT_RECIPIENT_EMAIL,
  NEWSLETTER_RECIPIENT_EMAIL,
} = process.env;

const BREVO_SEND_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";

/* ---------------- POST Handler ---------------- */

export async function POST(request: Request) {
  if (!BREVO_API_KEY || !SENDER_EMAIL) {
    return NextResponse.json(
      { message: "Server email configuration missing." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || !body.type) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    const validatedData = EmailRequestSchema.parse(body);

    /* Honeypot Protection */

    if (validatedData.honeypot && validatedData.honeypot.trim() !== "") {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    /* Suspicious Email Detection */

    const emailFields = [
      (validatedData as any).email,
      (validatedData as any).userEmail,
    ].filter(Boolean);

    for (const email of emailFields) {
      if (!validateEmail(email) || isSuspiciousEmail(email)) {
        return NextResponse.json({ message: "OK" }, { status: 200 });
      }
    }

    let subject = "";
    let htmlContent = "";
    let replyTo: string | undefined;
    let recipient = SENDER_EMAIL;

    /* ---------------- EMAIL CONTENT ---------------- */

    if (validatedData.type === "quote") {
      subject = `New Project Quote Request from ${validatedData.name}`;
      recipient = QUOTE_RECIPIENT_EMAIL!;
      replyTo = validatedData.email;

      htmlContent = `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phoneNo || "-"}</p>
        <p><strong>Company:</strong> ${validatedData.companyName || "-"}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType || "-"}</p>
        <p><strong>Budget:</strong> ${validatedData.projectBudget || "-"}</p>
        <p><strong>Timeline:</strong> ${validatedData.projectTimeline || "-"}</p>
        <p><strong>Project Details:</strong></p>
        <p>${validatedData.projectDetails.replace(/\n/g, "<br>")}</p>
      `;
    }

    else if (validatedData.type === "enquiry") {
      subject = `New Training Enquiry - ${validatedData.courseTitle}`;
      recipient = COURSE_RECIPIENT_EMAIL!;
      replyTo = validatedData.userEmail;

      htmlContent = `
      <div style="font-family:Arial,sans-serif">

        <h2 style="color:#0f766e">New Training Enquiry</h2>

        <h3>Participant Details</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Full Name</strong></td><td>${validatedData.fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${validatedData.userEmail}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${validatedData.phone}</td></tr>
          <tr><td><strong>Role / Experience</strong></td><td>${validatedData.role}</td></tr>
        </table>

        <br/>

        <h3>Training Preferences</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Training Track</strong></td><td>${validatedData.preferredModule}</td></tr>
          <tr><td><strong>Training Level</strong></td><td>${validatedData.trainingLevel}</td></tr>
          <tr><td><strong>Training Mode</strong></td><td>${validatedData.trainingMode}</td></tr>
          <tr><td><strong>Training Region</strong></td><td>${validatedData.selectedRegion}</td></tr>
        </table>

        <br/>

        <h3>Course Details</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Course Title</strong></td><td>${validatedData.courseTitle}</td></tr>
          <tr><td><strong>Course Slug</strong></td><td>${validatedData.courseSlug}</td></tr>
        </table>

        <br/>

        <h3>Topics / Issues Requested</h3>
        <div style="border:1px solid #ddd;padding:12px">
          ${validatedData.topics?.replace(/\n/g, "<br>") || "Not specified"}
        </div>

      </div>
      `;
    }

    else if (validatedData.type === "contact") {
      subject = validatedData.subject;
      recipient = CONTACT_RECIPIENT_EMAIL!;
      replyTo = validatedData.email;

      htmlContent = `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phoneNo || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `;
    }

    else if (validatedData.type === "sales-enquiry") {
      subject = `Sales Enquiry`;
      recipient = SALES_RECIPIENT_EMAIL!;
      replyTo = validatedData.email;

      htmlContent = `
        <h2>Sales Enquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p>${validatedData.message}</p>
      `;
    }

    else if (validatedData.type === "support-query") {
      subject = `Support Query`;
      recipient = SUPPORT_RECIPIENT_EMAIL!;
      replyTo = validatedData.email;

      htmlContent = `
        <h2>Support Query</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p>${validatedData.message}</p>
      `;
    }

    else if (validatedData.type === "newsletter") {
      subject = `New Newsletter Signup`;
      recipient = NEWSLETTER_RECIPIENT_EMAIL!;

      htmlContent = `
        <h2>Newsletter Signup</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
      `;
    }

    /* ---------------- SEND EMAIL ---------------- */

    await axios.post(
      BREVO_SEND_EMAIL_URL,
      {
        sender: { email: SENDER_EMAIL },
        to: [{ email: recipient }],
        subject,
        htmlContent,
        ...(replyTo && { replyTo: { email: replyTo } }),
      },
      {
        headers: {
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    return NextResponse.json({ message: "Sent" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "OK" }, { status: 200 });
  }
}