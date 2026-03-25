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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-800 dark:text-gray-300">Name *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  disabled={isPending} 
                  className="bg-white dark:bg-neutral-800 text-white border-neutral-700 focus:border-purple-500 rounded-xl" 
                />
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
              <FormLabel className="text-neutral-800 dark:text-gray-300">Email *</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  {...field} 
                  disabled={isPending} 
                  className="bg-white dark:bg-neutral-800 text-white border-neutral-700 focus:border-purple-500 rounded-xl" 
                />
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
              <FormLabel className="text-neutral-800 dark:text-gray-300">Phone No</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="Your phone number" 
                  {...field} 
                  disabled={isPending} 
                  className="bg-white dark:bg-neutral-800 text-white border-neutral-700 focus:border-purple-500 rounded-xl" 
                />
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
              <FormLabel className="text-neutral-800 dark:text-gray-300">Organization</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your organization" 
                  {...field} 
                  disabled={isPending} 
                  className="bg-white dark:bg-neutral-800 text-white border-neutral-700 focus:border-purple-500 rounded-xl" 
                />
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
              <FormLabel className="text-neutral-800 dark:text-gray-300">Message *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message" 
                  rows={5} 
                  {...field} 
                  disabled={isPending} 
                  className="bg-white dark:bg-neutral-800 text-white border-neutral-700 focus:border-purple-500 rounded-xl" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full sm:w-auto p-4 md:px-8 font-bold text-lg rounded-xl
                       dark:bg-primary-blue bg-orange-400 text-white border-2 border-transparent
                       bg-origin-border bg-clip-border relative
                       before:absolute before:inset-0 before:rounded-xl
                       before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-purple-500 before:z-[-1]
                       hover:scale-105 transition-transform duration-200"
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}