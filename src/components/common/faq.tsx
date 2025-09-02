"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useToast } from "../ui/use-toast"; // NEW: Import useToast hook

type Props = {
  className?: string;
  faqs: {
    key: "faq1" | "faq2" | "faq3" | "faq4" | "faq5";
    question: string;
    answer: string;
  }[];
};

const FAQComponent = ({ className, faqs }: Props) => {
  const [faqTrigger, setFaqTrigger] = useState<{
    faq1: boolean;
    faq2: boolean;
    faq3: boolean;
    faq4: boolean;
    faq5: boolean;
  }>({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
  });

  // NEW: State for the FAQ query input and loading status
  const [faqQuery, setFaqQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFaqTrigger = (key: keyof typeof faqTrigger, value: boolean) => {
    setFaqTrigger((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  // NEW: Handler for the FAQ input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFaqQuery(e.target.value);
  };

  // NEW: Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!faqQuery.trim()) {
      toast({
        variant: "destructive",
        title: "Input Required",
        description: "Please type your question before sending.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        type: 'faq-query',
        query: faqQuery,
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send your question. Please try again.");
      }

      toast({
        title: "Question Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      setFaqQuery(""); // Clear the input field on success

    } catch (error) {
      console.error("FAQ form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error sending your question. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  console.log(faqTrigger);

  return (
    <div
      className={twMerge(
        "min-h-screen w-full flex flex-col items-center justify-center gap-6",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Frequently Asked Questions
        </div>
        <div className="w-full text-center text-neutral-500 text-sm md:text-base lg:text-lg">
          Explore our FAQs for more information on how Nexainnov Solutions can
          support your business and professional growth.
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-full flex flex-col lg:flex-row items-center justify-center gap-[2rem] lg:gap-[6rem]">
        <div className="w-full lg:w-[55%] py-[2rem] lg:pl-[4rem] flex flex-col items-center justify-center gap-[2rem]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={clsx(
                "group max-h-[6rem] md:max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
                faqTrigger[faq.key] && "!max-h-[10rem]"
              )}
            >
              <div className="w-full flex flex-row items-center justify-between gap-4">
                <p className="text-neutral-200 text-base md:text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                  {faq.question}
                </p>
                <Button
                  className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                  onClick={() => handleFaqTrigger(faq.key, !faqTrigger[faq.key])}
                >
                  <div className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                    {/* Horizontal bar */}
                    <div className="relative w-[75%] h-full p-2">
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-200 transform -translate-y-1/2 transition-transform duration-300 ease-in-out"></div>
                      {/* Vertical bar */}
                      <div
                        className={`absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 transform transition-transform duration-300 ease-in-out ${
                          faqTrigger[faq.key] ? "rotate-90" : "-translate-x-1/2"
                        }`}
                      ></div>
                    </div>
                  </div>
                </Button>
              </div>
              <div
                className={clsx(
                  "inline-block w-full text-wrap text-neutral-400 leading-6 truncate",
                  !faqTrigger[faq.key] && "hidden"
                )}
              >
                {faq.answer.slice(0, 250)}
                {faq.answer.length > 250 && (
                  <>
                    ...
                    <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">
                      Read more
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}

          {/*<div className="w-full flex items-center justify-center gap-[4rem]">
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-110 p-0">
              <p className="w-full gradient-border-inner text-neutral-200 p-3">
                <ArrowLeft size={24} />
              </p>
            </Button>
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-110 p-0">
              <p className="w-full gradient-border-inner text-neutral-200 p-3">
                <ArrowRight size={24} />
              </p>
            </Button>
          </div>*/}
        </div>
        {/* NEW: Use a form element to handle the submission */}
        <div className="w-full lg:w-[45%] py-[2rem] lg:pr-[4rem] flex flex-col items-center justify-center gap-8">
          <div className="w-full h-[200px] flex items-center justify-center">
            <Image
              src={"/images/faq.png"}
              height={100}
              width={100}
              alt=""
              unoptimized
              className="w-full h-full object-contain self-center"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full text-center text-xl md:text-2xl font-bold">
              Do You Have Any Question ?
            </div>
            <div className="w-full text-sm md:text-base text-neutral-500 leading-6 md:leading-7 text-center">
              Whether you need a quote, have a project in mind, or simply want to learn more,
              our experts are just a message away.
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-base md:text-lg font-semibold text-neutral-300">
              Let us know
            </p>
            <Input
              placeholder="Type something..."
              type="text"
              name="faqQuery"
              className="w-full bg-neutral-600 transition-all transform duration-300 hover:bg-neutral-700"
              value={faqQuery}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
              disabled={isLoading}
            >
              <p className="w-full gradient-border-inner text-sm md:text-base lg:text-lg tracking-wide text-neutral-200 py-2 px-4 md:px-6">
                {isLoading ? "Sending..." : "Send"}
              </p>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;