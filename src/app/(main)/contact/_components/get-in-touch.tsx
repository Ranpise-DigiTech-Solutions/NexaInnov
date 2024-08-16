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
    <div className="min-h-screen w-full flex flex-row items-center justify-center text-neutral-200">
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[90%] p-[3rem] h-full flex flex-col gap-12 items-start justify-center overflow-hidden">
          <p className="text-4xl font-bold">Get in touch</p>
          <p className="text-neutral-500 text-wrap leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            ipsam nobis, quas pariatur eos accusantium ea quibusdam asperiores
            totam fuga!
          </p>
          <div className="w-full flex flex-col gap-6">
            <div className="group w-full flex flex-row items-center justify-start gap-6 cursor-pointer">
              <LocalPhoneIcon className="bg-neutral-700 p-1 scale-110 rounded-md transition-all transform duration-300 group-hover:scale-125" />
              <span className="transition-all transform duration-300 group-hover:text-primary-pink">
                (+91) 972-2322-232
              </span>
            </div>
            <div className="group w-full flex flex-row items-center justify-start gap-6 cursor-pointer">
              <EmailIcon className="bg-neutral-700 p-1 scale-110 rounded-md transition-all transform duration-300 group-hover:scale-125" />
              <span className="transition-all transform duration-300 group-hover:text-primary-pink">
                info@nexainnov.com
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <p className="text-xl font-bold">Follow us on</p>
            <div className="w-full flex flex-row items-center justify-start gap-4">
              <Link
                href={"/"}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <FacebookIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <WhatsAppIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <XIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <InstagramIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <YouTubeIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <LinkedInIcon className="text-white inline-block" />
                </span>
              </Link>
              <Link href={"/"} passHref>
                <span className="cursor-pointer transition-all transform duration-300 hover:scale-105 icon-gradient">
                  <PinterestIcon className="text-white inline-block" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <ContactForm className="h-fit w-[95%] mr-[4rem]" />
      </div>
    </div>
  );
};

export default GetInTouchComponent;
