"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { GetQuoteFormSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

type Props = {};

const GetQuoteForm = (props: Props) => {
  const toast = useToast();
  const form = useForm<z.infer<typeof GetQuoteFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(GetQuoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: 0,
      companyName: "",
      projectType: "it-consult",
      projectBudget: "<5k",
      projectTimeline: "flexible",
      projectDetails: "",
      filesUrl: [],
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof GetQuoteFormSchema>) => {
    console.log(values);
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
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={(field) => (
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
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={(field) => (
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
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="phoneNo"
              render={(field) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Mobile No
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Your mobile no."
                      {...field}
                      className="bg-transparent border-neutral-700 outline-none text-neutral-400"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="companyName"
              render={(field) => (
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
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectType"
              render={(field) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Type
                  </FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger
                        id="framework"
                        className="border-neutral-700 text-neutral-400"
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="border-neutral-700 outline-none text-neutral-400 bg-neutral-700"
                      >
                        <SelectItem
                          className="cursor-pointer"
                          value="web-app-dev"
                        >
                          Website Development
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="mobile-app-dev"
                        >
                          Mobile Application Development
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="desktop-dev"
                        >
                          Desktop Software Development
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="it-consult"
                        >
                          IT Consulting
                        </SelectItem>
                        <SelectItem
                          className="cursor-pointer"
                          value="it-training"
                        >
                          IT Training
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectBudget"
              render={(field) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Budget
                  </FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger
                        id="framework"
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
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectTimeline"
              render={(field) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Timeline
                  </FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger
                        id="framework"
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
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="projectTimeline"
              render={(field) => (
                <FormItem>
                  <FormLabel className="text-neutral-200 text-base font-bold">
                    Project Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      name="description"
                      rows={4} // Adjust the number of rows as needed
                      className="mt-1 block w-full rounded-md border-neutral-700 shadow-none bg-transparent text-neutral-400"
                      placeholder="Write your description here..."
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" className="text-neutral-200 font-bold border border-neutral-300 transform transition-all duration-300 hover:opacity-80">Cancel</Button>
        <Button type="submit" className="bg-primary-pink text-neutral-200 transform transition-all duration-300 font-bold hover:opacity-80">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default GetQuoteForm;
