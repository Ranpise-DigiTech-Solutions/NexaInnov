import React from "react";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import ContactForm from "@/components/forms/contact-form";

type Props = {};

const GetInTouchComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center text-neutral-200 gap-16 lg:gap-0">
      <div className="w-full lg:w-[50%] h-fit lg:h-full flex items-center justify-center">
        <div className="w-[90%] h-fit lg:p-[3rem] lg:h-full flex flex-col gap-8 lg:gap-12 items-start justify-center overflow-hidden">
          <p className="text-4xl lg:text-5xl font-bold">Get in touch</p>
          <p className="text-neutral-500 text-base lg:text-lg text-wrap leading-7">
            We’d love to hear from you! Whether you have questions, feedback, or
            need assistance, feel free to reach out. Use the contact form below,
            or connect with us via email or phone, and we’ll get back to you as
            soon as possible.
          </p>
          <div className="w-full flex flex-col gap-6">
            <div className="group w-full flex flex-row items-center justify-start gap-6 cursor-pointer">
              <LocalPhoneIcon className="w-6 h-6 lg:w-7 lg:h-7 bg-neutral-700 p-1 scale-110 rounded-md transition-all transform duration-300 group-hover:scale-125" />
              <span className="transition-all transform duration-300 text-base lg:text-lg group-hover:text-primary-pink">
                (+91) 97699-19222
              </span>
            </div>
            <div className="group w-full flex flex-row items-center justify-start gap-6 cursor-pointer">
              <EmailIcon className="w-6 h-6 lg:w-7 lg:h-7 bg-neutral-700 p-1 scale-110 rounded-md transition-all transform duration-300 group-hover:scale-125" />
              <span className="transition-all transform duration-300 text-base lg:text-lg group-hover:text-primary-pink">
                info@nexainnov.com / admin@nexainnov.com
              </span>
            </div>
          </div>
          {/*<div className="w-full flex flex-col gap-6">
            <p className="text-xl lg:text-2xl font-bold">Follow us on</p>
            <div className="w-full min-h-[40px] lg:h-fit flex flex-row items-center justify-start gap-4">
              <Link
                href={"/"}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <FacebookIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <WhatsAppIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <XIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <InstagramIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <YouTubeIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/nexainnov-solutions-llp/posts/?feedView=all"
                }
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <LinkedInIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <PinterestIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white inline-block" />
                </span>
              </Link>
            </div>
          </div>*/}
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
        <ContactForm className="h-fit w-[90%] lg:w-[95%] lg:mr-[4rem]" />
      </div>
    </div>
  );
};

export default GetInTouchComponent;
