"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'sonner';
import { GetQuoteFormSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

type Props = {};

const GetQuoteForm = (props: Props) => {
  const form = useForm<z.infer<typeof GetQuoteFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(GetQuoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      companyName: "",
      projectType: "it-consult",
      projectBudget: "<5k",
      projectTimeline: "flexible",
      projectDetails: "",
      filesUrl: [],
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async () => {
    // 💡 FINAL FIX: Get the form values directly using form.getValues()
    const values = form.getValues();

    // Log the values one last time to confirm they are correct
    console.log("Final values retrieved with form.getValues():", values);

    // Now proceed with your submission logic
    if (!values.name || !values.email || !values.projectDetails) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const formData = {
      type: 'quote',
      name: values.name,
      email: values.email,
      phoneNo: values.phoneNo || undefined,
      companyName: values.companyName || undefined,
      projectType: values.projectType,
      projectBudget: values.projectBudget,
      projectTimeline: values.projectTimeline,
      projectDetails: values.projectDetails,
      filesUrl: values.filesUrl || undefined,
    };

    console.log("Submitting quote form with final payload:", formData);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Your quote request has been sent successfully! We'll be in touch shortly.");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send your quote request. Please try again.");
        if (data.errors) {
          console.error("Server validation errors:", data.errors);
          data.errors.forEach((err: any) => {
            const path = err.path && err.path[0];
            if (path && form.getValues(path) !== undefined) {
              form.setError(path, { message: err.message });
            }
          });
        }
      }
    } catch (error) {
      console.error("Error sending quote email:", error);
      toast.error("Network error. Failed to send your request. Please try again later.");
    }
  };

  const handleInvalid = (errors: any) => {
    console.error("Validation Failed:", errors);
    toast.error("Please correct the form errors and try again.");
  };

  return (
    <Card className="border border-neutral-700">
      <CardHeader>
        <CardTitle className="text-primary-pink text-2xl">
          Project Information
        </CardTitle>
        <CardDescription className="text-sm text-neutral-500">
          Please enter your project details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit, handleInvalid)}
            className="space-y-5"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Customer Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      {...field}
                      className="bg-transparent border-neutral-700 outline-none text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Email Id
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email id"
                      {...field}
                      className="bg-transparent border-neutral-700 outline-none text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Mobile No
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your mobile no."
                      {...field}
                      className="bg-transparent border-neutral-700 outline-none text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your organization name"
                      {...field}
                      className="bg-transparent border-neutral-700 outline-none text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Type
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger
                        id="projectType"
                        className="border-neutral-700 text-neutral-400"
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="border-neutral-700 outline-none text-neutral-400 bg-neutral-700"
                      >
                        <SelectItem className="cursor-pointer" value="web-app-dev">
                          Website Development
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="mobile-app-dev">
                          Mobile Application Development
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="desktop-dev">
                          Desktop Software Development
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="it-consult">
                          IT Consulting
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="it-train"
                        >
                          IT Training
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Budget
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger
                        id="projectBudget"
                        className="border-neutral-700 text-neutral-400"
                      >
                        <SelectValue placeholder="Enter your proposed budget" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="border-neutral-700 outline-none text-neutral-400 bg-neutral-700"
                      >
                        <SelectItem className="cursor-pointer" value="<5k">
                          {"<"} &#8377;5,000
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="5k-10k">
                          &#8377;5,000 - &#8377;10,000
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="10k-20k">
                          &#8377;10,000 - &#8377;20,000
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value=">20k">
                          {">"} &#8377;20,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectTimeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Timeline
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger
                        id="projectTimeline"
                        className="border-neutral-700 text-neutral-400"
                      >
                        <SelectValue placeholder="Enter your project timeline" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="border-neutral-700 outline-none text-neutral-400 bg-neutral-700"
                      >
                        <SelectItem
                          className="cursor-pointer"
                          value="immediately"
                        >
                          Immediately
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="1m-3m">
                          1 to 3 months
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="3m-6m">
                          3 to 6 months
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="flexible">
                          Flexible
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id="projectDetails"
                      placeholder="Write your description here..."
                      rows={4}
                      {...field}
                      className="mt-1 block w-full rounded-md border-neutral-700 shadow-none bg-transparent text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="flex justify-between w-full p-0 pt-6">
              <Button
                variant="destructive"
                className="text-neutral-200 font-bold border border-neutral-300 transform transition-all duration-300 hover:opacity-80"
                onClick={() => form.reset()}
                type="button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-primary-pink text-neutral-200 transform transition-all duration-300 font-bold hover:opacity-80"
              >
                {isLoading ? 'Sending Request...' : 'Submit Quote Request'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GetQuoteForm;
