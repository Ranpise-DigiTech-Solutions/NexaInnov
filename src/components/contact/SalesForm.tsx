// components/contact/SalesForm.tsx

"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SalesFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const SalesForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    try {
      SalesFormSchema.parse(formData);
      const payload = {
        ...formData,
        type: 'sales-enquiry', // Unique type for this form
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      toast({ title: "Message Sent!", description: "Your sales enquiry has been sent." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.errors);
        toast({ variant: "destructive", title: "Validation Error", description: "Please check the form for errors." });
      } else {
        toast({ variant: "destructive", title: "Submission Failed", description: "There was a problem sending your message. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorForField = (fieldName: string) => {
    const error = errors.find(err => err.path.includes(fieldName));
    return error ? error.message : null;
  };

  return (
    <div className="p-8 bg-neutral-800 rounded-3xl border border-slate-500 shadow-[-1px_-1px_10px_var(--secondary-blue),1px_1px_10px_var(--secondary-pink)]">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Sales & Enquiries</DialogTitle>
        <DialogDescription className="text-neutral-400">
          Tell us about your needs and our sales team will get back to you.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div>
          <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-neutral-700" />
          {getErrorForField("name") && <p className="text-red-400 text-sm mt-1">{getErrorForField("name")}</p>}
        </div>
        <div>
          <Input name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="bg-neutral-700" />
          {getErrorForField("email") && <p className="text-red-400 text-sm mt-1">{getErrorForField("email")}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-32 p-3 rounded-md bg-neutral-700 text-neutral-200 border-none focus:outline-none focus:ring-2 focus:ring-primary-pink"
          />
          {getErrorForField("message") && <p className="text-red-400 text-sm mt-1">{getErrorForField("message")}</p>}
        </div>
        <Button type="submit" disabled={isLoading} className="gradient-border-inner">
          <p>{isLoading ? "Submitting..." : "Submit"}</p>
        </Button>
      </form>
    </div>
  );
};

export default SalesForm;