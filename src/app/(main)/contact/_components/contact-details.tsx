"use client";

import Image from "next/image";
import React, { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ArrowUpRight } from "lucide-react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ArticleIcon from "@mui/icons-material/Article";
import { twMerge } from "tailwind-merge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SalesForm from "@/components/contact/SalesForm";
import SupportForm from "@/components/contact/SupportForm";
import {MediaInquiryForm} from "@/components/MediaInquiryForm";

type Props = {};

const ContactDetailsComponent = (props: Props) => {
  const [openForm, setOpenForm] = useState<
    "sales" | "support" | "media" | null
  >(null);

  const openFormModal = (formType: "sales" | "support" | "media") => {
    setOpenForm(formType);
  };

  const closeFormModal = () => {
    setOpenForm(null);
  };

  return (
    <div className="z-0 max-h-[40vh] md:min-h-[50vh] w-full py-[2rem] md:px-[6rem] text-neutral-200 relative flex flex-row items-center justify-end mb-[53rem] md:mb-[18rem]">
      <Image
        src={"/images/contact_us_banner.png"}
        fill
        alt="contact us banner"
        quality={100}
        unoptimized
        layout="fixed"
        className=" absolute top-0 right-0 left-0 bottom-0 z-[-1] object-fill"
      />
      <div className="w-[50%] h-full flex flex-col items-start justify-center gap-4 lg:gap-6">
        <div className="w-full text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue dark:text-white">
          Contact us
        </div>
        <div className="w-full text-neutral-800 dark:text-neutral-300 text-sm md:text-base lg:text-xl leading-6 md:leading-7 line-clamp-5 md:line-clamp-6">
          Need assistance with our event management platform or website builder,
          or want to explore our training programs, we’d love to hear from you.
          Reach out to us for any inquiries, project discussions, or partnership
          opportunities. Our team is ready to provide the support and expertise
          you need.
        </div>
      </div>
      <div className="absolute top-[15rem] left-0 right-0 md:top-auto lg:left-[2rem] lg:right-[2rem] md:h-[350px] md:bottom-[-17rem] z-100">
        <div className="w-full h-full p-[2rem] flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="group h-full w-[400px] bg-blue-600 dark:bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container"
            onClick={() => openFormModal("sales")}
          >
            <p className="bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
              <BusinessCenterIcon fontSize="large" />
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Sales & Enquiries
            </p>
            <p className="text-sm md:text-base text-white dark:text-neutral-400 w-full text-center leading-6 line-clamp-3 lg:line-clamp-4 truncate text-wrap">
              For those interested in learning more about our IT software
              products, event planning solutions, or training programs, our
              dedicated sales team is ready to provide detailed information,
              tailored demonstrations, and customized pricing
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
              <p className="font-semibold text-base md:text-lg transition-all transform duration-300 group-hover:text-primary-pink">
                Contact sales team
              </p>
              <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1" />
            </div>
          </div>
          <div
            className="group h-full w-[400px] bg-blue-600 dark:bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container"
            onClick={() => openFormModal("support")}
          >
            <p className="bg-blue-600 bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
              <LocalPostOfficeIcon fontSize="large" />
            </p>
            <p className="text-xl md:text-2xl font-semibold">Help & Support</p>
            <p className="text-sm md:text-base text-white dark:text-neutral-400 w-full text-center leading-6 line-clamp-3 lg:line-clamp-4 truncate text-wrap">
              For common questions, please visit our FAQ section below. If you
              have a unique or specific query, feel free to share it with us,
              and we&#39;ll consider adding it to our growing database of
              helpful resources.
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
              <p className="font-semibold text-base md:text-lg transition-all transform duration-300 group-hover:text-primary-pink">
                Contact support team
              </p>
              <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1" />
            </div>
          </div>
          <div
            className="group h-full w-[400px] bg-blue-600 dark:bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container"
            onClick={() => openFormModal("media")}
          >
            <p className="bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
              <ArticleIcon fontSize="large" />
            </p>
            <p className="text-xl md:text-2xl font-semibold">Media & Press</p>
            <p className="text-sm md:text-base text-white dark:text-neutral-400 w-full text-center leading-6 line-clamp-3 lg:line-clamp-4 truncate text-wrap">
              Please refer the events section for any information on press
              releases, special events and announcements from Nexainnov
              Solutions For more information, contact our press team
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
              <p className="font-semibold text-base md:text-lg transition-all transform duration-300 group-hover:text-primary-pink">
                Contact media team
              </p>
              <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={!!openForm} onOpenChange={closeFormModal}>
        <DialogContent className="border-none w-[100%] md:w-[60%] lg:w-[45%] rounded-3xl bg-white p-0 shadow-2xl">
  {/* 🚀 Improvement: A consistent, padded container for all forms */}
  <div className="p-6 sm:p-8 lg:p-10"> 
    {/* Consistent Vertical Spacing */}
    <div className="space-y-0"> 
      
      {/* 1. Header Area (optional, but highly recommended) */}
      <div className="text-center space-y-2 pb-4 border-b border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800">Contact Us</h3>
        <p className="text-gray-500">Please select the type of inquiry below to get started.</p>
      </div>

      {/* 2. Form Content Area */}
      <div>
        {openForm === "sales" && <SalesForm />}
        {openForm === "support" && <SupportForm />}
        {openForm === "media" && <MediaInquiryForm />}
      </div>
      
    </div>
  </div>
</DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactDetailsComponent;