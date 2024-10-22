"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

type Props = {};

const FooterComponent = (props: Props) => {
  const [emailInput, setEmailInput] = useState<string>("");
  const { toast } = useToast();

  const handleEmailInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  return (
    <footer className="text-white px-[1rem] lg:px-14 flex flex-col items-center justify-center gap-6 w-full pb-2">
      <div className="w-[95%] flex flex-row items-start justify-between gap-10 flex-wrap xl:flex-nowrap">
        <div className="flex-[35%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold capitalize">About us</div>
          <div className="flex flex-row items-start justify-center gap-[6rem] text-neutral-400">
            <div className="flex flex-col items-start justify-center gap-4">
              <Link
                href="/about"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Our Story
              </Link>
              <Link
                href="/team"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Our leadership
              </Link>
              <Link
                href="/careers"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Contact Us
              </Link>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Client Stories
              </p>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                CSR Activities
              </p>
              <a
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Our Events
              </a>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Newsroom
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <Link
                href="/terms-and-conditions"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Privacy Policy
              </Link>
              <Link
                href="/training"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Training
              </Link>
              <Link
                href="/contact"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                FAQ&apos;s
              </Link>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Our Alumni
              </p>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Subsidiaries
              </p>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Media Enquiries
              </p>
              <p
                className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Action Unavailable",
                    description:
                      "This page is under development. Please try again later !",
                    className: "bg-destructive-tag text-neutral-200 ",
                  });
                }}
              >
                Support
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold capitalize">our Services</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <Link
              href="/services/automation"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Automation
            </Link>
            <Link
              href="/services/digital-marketing"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Digital Marketing
            </Link>
            <Link
              href="/services/software-development"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Software Development
            </Link>
            <Link
              href="/services/web-mobile-development"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Website & Mobile App Development
            </Link>
            <Link
              href="/services/advisory-outsourcing"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Advisory & Outsourcing Services
            </Link>
            <Link
              href="/services/erp-consulting"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              IBM I(AS/400) & JD Edwards ERP Consulting
            </Link>
            <Link
              href="/services/internet-of-things"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Internet of Things
            </Link>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Our Products</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <Link
              href="https://www.eventifyconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              EventifyConnect
            </Link>
            <p
              className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Action Unavailable",
                  description:
                    "This page is under development. Please try again later !",
                  className: "bg-destructive-tag text-neutral-200 ",
                });
              }}
            >
              Dragblitz
            </p>
            <p
              className="transition-all duration-300 hover:text-primary-pink cursor-pointer"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Action Unavailable",
                  description:
                    "This page is under development. Please try again later !",
                  className: "bg-destructive-tag text-neutral-200 ",
                });
              }}
            >
              Shopify
            </p>
            {/* <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Licenses
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              ChangeLog
            </a> */}
            <a
              href="#"
              className="text-primary-pink underline underline-offset-4"
            >
              More Info
            </a>
          </div>
        </div>
        <div className="flex-[25%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Subscribe to our newsletter</div>
          <div className="text-neutral-400 text-wrap leading-7">
            Stay connected with us! Subscribe to our newsletter for exclusive
            updates, tips, and special offers delivered straight to your inbox.
            Join our community and never miss out on the latest news!
          </div>
          <div className="flex items-center justify-between">
            <Input
              type="email"
              name="email"
              value={emailInput}
              onChange={handleEmailInputChange}
              className="bg-neutral-700 outline-none border-none p-4"
              placeholder="Your email address"
            />
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <p className="w-full gradient-border-inner tracking-wide text-neutral-200 p-2">
                Subscribe
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="line-divider w-[95%]"></div>
      <div className="w-[95%] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
        <Link href={"/"}>
          <div className="flex items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide gap-2">
            <Image src={"/images/logo.png"} height={40} width={40} alt="logo" />
            <p className="text-xl italic font-serif text-white">NexaInnov</p>
          </div>
        </Link>
        <div className="text-neutral-400 lg:text-nowrap text-wrap leading-7">
          &copy; 2024 <span className="font-serif">NexaInnov</span>. All rights
          reserved. Designed by{" "}
          <a
            href="#"
            className="transition-all duration-300 hover:text-primary-pink font-serif"
          >
            `NexaInnov`
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
