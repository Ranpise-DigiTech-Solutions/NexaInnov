"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useToast } from "../ui/use-toast";

type Props = {
  className?: string;
};

// Define the Zod schema for the contact form
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNo: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = ({ className }: Props) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]); // Clear previous errors

    try {
      // Validate data with Zod
      ContactFormSchema.parse(formData);

      const payload = {
        ...formData,
        type: 'contact', // A new type for this form
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });

      // Clear the form on success
      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof z.ZodError) {
        setErrors(error.errors);
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please check the form for errors.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was a problem sending your message. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Helper to find and display validation errors for a specific field
  const getErrorForField = (fieldName: string) => {
    const error = errors.find(err => err.path.includes(fieldName));
    return error ? error.message : null;
  };

  return (
    <div
      className={twMerge(
        "rounded-3xl border border-slate-500 px-[1.5rem] lg:px-[3rem] py-[2rem] shadow-[-1px_-1px_10px_var(--secondary-blue),1px_1px_10px_var(--secondary-pink)] bg-neutral-800",
        className
      )}
    >
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-stretch gap-8 justify-center">
        {/* Name */}
        <div className="w-full lg:w-[50%]">
          <div className="w-full flex flex-col items-start justify-center gap-2 lg:pr-2">
            <p className="text-lg font-bold">Name</p>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
            {getErrorForField("name") && (
                <p className="text-red-400 text-sm">{getErrorForField("name")}</p>
            )}
          </div>
        </div>
        {/* Email & Phone */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-bold">Email</p>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
            {getErrorForField("email") && (
                <p className="text-red-400 text-sm">{getErrorForField("email")}</p>
            )}
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-bold">Phone</p>
            <Input
              type="tel"
              name="phoneNo"
              placeholder="Phone"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
        </div>
        {/* Subject */}
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-bold">Subject</p>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
            {getErrorForField("subject") && (
                <p className="text-red-400 text-sm">{getErrorForField("subject")}</p>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-bold">Message</p>
            <textarea
              name="message"
              placeholder="Please enter your message..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-neutral-600 w-full rounded-md p-4 text-sm border min-h-[6rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
            {getErrorForField("message") && (
                <p className="text-red-400 text-sm">{getErrorForField("message")}</p>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <Button type="submit" className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105" disabled={isLoading}>
            <p className="gradient-border-inner tracking-wide text-neutral-200 py-3 px-6 font-bold text-md">
              {isLoading ? "Submitting..." : "Submit"}
            </p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;