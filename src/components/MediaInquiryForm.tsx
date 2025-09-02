"use client";

import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Zod Schema (unchanged)
const MediaInquiryFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNo: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type MediaInquiryFormSchemaType = z.infer<typeof MediaInquiryFormSchema>;

export function MediaInquiryForm() {
  const [isPending, startTransition] = useTransition();

  // Form Initialization (unchanged)
  const form = useForm<MediaInquiryFormSchemaType>({
    resolver: zodResolver(MediaInquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      organization: "",
      message: "",
    },
  });

  // Form Submission Handler (unchanged)
  const handleSubmit = (values: MediaInquiryFormSchemaType) => {
    startTransition(async () => {
      try {
        const payload = {
          type: "media-inquiry",
          ...values,
        };
        
        console.log("Sending payload:", payload);

        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to send email.");
        }

        toast.success("Inquiry sent successfully!");
        form.reset();
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to send inquiry. Please try again.");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name *</FormLabel>
              <FormControl>
                {/* Apply text-gray-900 class here */}
                <Input placeholder="Your name" {...field} disabled={isPending} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email *</FormLabel>
              <FormControl>
                {/* Apply text-gray-900 class here */}
                <Input type="email" placeholder="Your email" {...field} disabled={isPending} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message *</FormLabel>
              <FormControl>
                {/* Apply text-gray-900 class here */}
                <Textarea placeholder="Your message" rows={5} {...field} disabled={isPending} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phoneNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Phone No</FormLabel>
              <FormControl>
                {/* Apply text-gray-900 class here */}
                <Input type="tel" placeholder="Your phone number" {...field} disabled={isPending} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Organization Field */}
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Organization</FormLabel>
              <FormControl>
                {/* Apply text-gray-900 class here */}
                <Input placeholder="Your organization" {...field} disabled={isPending} className="text-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button (unchanged) */}
        <div className="flex justify-center">
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full sm:w-auto bg-white text-primary-pink hover:bg-gray-200 transition-colors duration-200 font-bold"
          >
            {isPending ? "Sending..." : "Send Inquiry"}
          </Button>
        </div>
      </form>
    </Form>
  );
}