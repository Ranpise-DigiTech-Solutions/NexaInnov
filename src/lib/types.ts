// src/lib/types.ts
import { z } from "zod";

export const GetQuoteFormSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email(),
    phoneNo: z.string().optional(), // CHANGED: phone number is now a string
    companyName: z.string().optional(),
    projectType: z.enum(['web-app-dev', 'mobile-app-dev', 'desktop-dev', 'it-consult', 'it-train']),
    projectBudget: z.enum(['<5k', '5k-10k', '10k-20k', '>20k']),
    projectTimeline: z.enum(['immediately', '1m-3m', '3m-6m', 'flexible']),
    projectDetails: z.string().min(1, "Required").max(1000, "Too long"),
    filesUrl: z.array(z.string()).optional()
});