"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const FooterComponent = (props: Props) => {
  const [emailInput, setEmailInput] = useState<string>("");

  const handleEmailInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  return (
    <div className="text-white py-10 px-14 flex flex-col items-center justify-center gap-6 w-full">
      <div className="w-[95%] flex flex-row items-start justify-between gap-10 flex-wrap xl:flex-nowrap">
        <div className="flex-[35%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Pages</div>
          <div className="flex flex-row items-start justify-center gap-[6rem] text-neutral-400">
            <div className="flex flex-col items-start justify-center gap-4">
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Sales Home
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Primary Home
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                About
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Contact
              </a>
              <Link
                href="/team"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Team
              </Link>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Blog Post
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Pricing
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Pricing Single
              </a>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Sales Home
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Primary Home
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                About
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Contact
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Blog
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Blog Post
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Services</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Web Development
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Web Design
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Software Development
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              SEO Optimization
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Social Media Design
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Landing Page
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              CMS Development
            </a>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Utility Pages</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Start Here
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Style Guide
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Password Protected
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              404 Not Found
            </a>
            <a
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
            </a>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            corrupti ducimus praesentium commodi harum sunt aut
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
      <div className="w-[95%] flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide">
          <Image
            src={
              "/images/logo.png"
            }
            height={60}
            width={60}
            alt="logo"
          />
          <p className="text-xl italic font-serif text-logo-text">NexaInnov</p>
        </div>
      </Link>
        <div className="text-neutral-400">
          &copy; 2024 <span className="font-serif">NexaInnov</span>. All rights reserved. Designed by{" "}
          <a
            href="#"
            className="transition-all duration-300 hover:text-primary-pink font-serif"
          >
            `NexaInnov`
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
