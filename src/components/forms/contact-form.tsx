"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  className?: string;
};

const ContactForm = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "rounded-3xl border border-slate-500 px-[3rem] py-[2rem] shadow-[-1px_-1px_10px_var(--secondary-blue),1px_1px_10px_var(--secondary-pink)] bg-neutral-800",
        className
      )}
    >
      <div className="w-full h-full flex flex-col items-stretch gap-8 justify-center">
        <div className="w-[50%]">
          <div className="w-full flex flex-col items-start justify-center gap-2 pr-2">
            <p className="text-l font-bold">Email</p>
            <Input
              type="email"
              placeholder="Full name"
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-l font-bold">Email</p>
            <Input
              type="email"
              placeholder="Full name"
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-l font-bold">Phone</p>
            <Input
              type="number"
              placeholder="Full name"
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-md font-bold">Subject</p>
            <Input
              type="email"
              placeholder="Full name"
              className="bg-neutral-600 min-h-[3rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-l font-bold">Message</p>
            <textarea
              placeholder="Please enter your message..."
              className="bg-neutral-600 w-full rounded-md p-4 text-sm border min-h-[6rem] transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
        <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <p className="gradient-border-inner tracking-wide text-neutral-200 py-3 px-6 font-bold text-md">
            Submit
          </p>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
