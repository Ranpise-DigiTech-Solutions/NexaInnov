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
    <div className="text-white px-[1rem] lg:px-14 flex flex-col items-center justify-center gap-6 w-full">
      <div className="w-[95%] flex flex-row items-start justify-between gap-10 flex-wrap xl:flex-nowrap">
        <div className="flex-[35%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold capitalize">About us</div>
          <div className="flex flex-row items-start justify-center gap-[6rem] text-neutral-400">
            <div className="flex flex-col items-start justify-center gap-4">
              <Link
                href="/"
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
                href="/team"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Client stories
              </Link>
              <Link
                href="/careers"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Privacy policies
              </Link>
              <Link
                href="/training"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Subsidiaries
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Alumni
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Newsroom
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <Link
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                CSR Activities
              </Link>
              <Link
                href="/training"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Training
              </Link>
              <Link
                href="/careers"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Careers
              </Link>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                lorem
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-primary-pink"
              >
                lorem
              </a>
            </div>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold capitalize">our Services</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              IT and DT Consulting
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Automation
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Digital Marketing
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Software Development
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Website & Mobile App Development
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Advisory & Outsourcing Services
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              IBM I(AS/400) & JD Edwards ERP Consulting
            </Link>
          </div>
        </div>
        <div className="flex-[20%] flex flex-col items-start justify-center gap-6">
          <div className="text-2xl font-bold">Our Pages</div>
          <div className="flex flex-col items-start justify-center gap-4 text-neutral-400">
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              EventifyConnect
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Dragblitz
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              Shopify
            </Link>
            <Link
              href="#"
              className="transition-all duration-300 hover:text-primary-pink"
            >
              lorem
            </Link>
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
      <div className="w-[95%] flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide">
            <Image src={"/images/logo.png"} height={60} width={60} alt="logo" />
            <p className="text-xl italic font-serif text-logo-text">
              NexaInnov
            </p>
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
    </div>
  );
};

export default FooterComponent;
