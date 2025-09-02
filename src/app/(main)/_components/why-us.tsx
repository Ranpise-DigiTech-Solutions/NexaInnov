"use client";

import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/components/providers/modal-provider";
import CustomModal from "@/components/global/custom-model";
import GetQuoteForm from "@/components/forms/get-quote-form";

type Props = {};

const WhyUsComponent = (props: Props) => {
  const { setOpen } = useModal();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      id="why-us"
    >
      <div className="w-[95%] overflow-hidden xl:w-[85%] px-[1rem] xl:p-0 flex flex-col lg:flex-row items-center lg:items-stretch justify-center xl:gap-4 gap-12">
        <div className="w-full flex-1 flex flex-col items-start justify-center gap-10">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <div className="relative uppercase text-sm lg:text-base font-normal text-neutral-200">
              why choose us?
              <p className="absolute h-0.5 w-full -bottom-1 left-0 right-0 bg-primary-pink"></p>
            </div>
            <p className="w-full text-wrap text-neutral-200 font-bold text-3xl md:text-4xl lg:text-5xl">
              Powerful features of{" "}
              <span className="gradient-text">NexaInnov</span>
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-col items-center justify-center gap-2 border border-neutral-600 shadow-sm shadow-secondary-purple p-2 rounded-xl">
              <div className="w-full flex flex-row gap-2 items-center justify-start">
                <AccessTimeFilledIcon fontSize="medium" />
                <p className="font-semibold text-lg">Customized Solutions</p>
              </div>
              <p className="w-full text-wrap text-neutral-400 line-clamp-2 truncate leading-7 font-normal text-base">
                Our clients appreciate our ability to understand their unique
                needs and provide tailored solutions that align perfectly with
                their business goals.
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2 border border-neutral-600 shadow-sm shadow-secondary-purple p-2 rounded-xl">
              <div className="w-full flex flex-row gap-2 items-center justify-start">
                <AccessTimeFilledIcon fontSize="medium" />
                <p className="font-semibold text-lg">Outstanding Support</p>
              </div>
              <p className="w-full text-wrap text-neutral-400 line-clamp-2 truncate leading-7 font-normal text-base">
                From the initial consultation to ongoing maintenance, our
                dedicated support team is always available to assist, ensuring a
                seamless and positive experience
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2 border border-neutral-600 shadow-sm shadow-secondary-purple p-2 rounded-xl">
              <div className="w-full flex flex-row gap-2 items-center justify-start">
                <AccessTimeFilledIcon fontSize="medium" />
                <p className="font-semibold text-lg">
                  Exceptional Support and Maintenance
                </p>
              </div>
              <p className="w-full text-wrap text-neutral-400 line-clamp-2 truncate leading-7 font-normal text-base">
                At NexaInnov Solutions, our commitment to clients doesn’t end
                after deployment. We provide 24/7 support and maintenance
                services, ensuring that your systems remain up-to-date and
                operate smoothly.
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden flex flex-nowrap flex-row items-center justify-center gap-2">
            {/*<Button className="w-[50%] group flex items-center justify-center transform transition-transform duration-300 hover:scale-95 p-0">
              <p className="w-full gradient-border-inner text-lg tracking-wide text-neutral-200 px-4 lg:px-6 py-2 lg:py-3 flex flex-row items-center justify-center gap-1">
                <span>Explore more</span>
                <ArrowUpRight
                  fontSize={20}
                  className="hidden md:inline-block transform transition-transform duration-300 group-hover:-translate-y-1 w-5 h-5"
                />
              </p>
            </Button>*/}
            <Button
              className="w-[50%] group flex items-center justify-center transform transition-transform duration-300 hover:scale-95 hover:bg-primary-black bg-neutral-700 rounded-full px-5 lg:px-6 py-6 lg:py-7"
              onClick={() => {
                setOpen(
                  <CustomModal
                    title="Request A Quote"
                    subHeading="We’re excited to learn more about your project and how we can help. Fill out the
                    form below to get a custom quote tailored to your specific needs"
                  >
                    <GetQuoteForm />
                  </CustomModal>
                );
              }}
            >
              <p className="w-full h-full text-lg tracking-wide text-neutral-200 rounded-full flex items-center justify-center gap-1">
                <span>Get a quote</span>
                <ArrowRight
                  fontSize={16}
                  className="hidden lg:inline-block transform transition-transform duration-300 group-hover:translate-x-1 h-5 w-5"
                />
              </p>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-auto flex-1 flex items-center justify-center lg:justify-end">
          <div className="relative min-h-[500px] min-w-[400px]">
            <Image
              src={"/images/why_us_bg_1.jpg"}
              fill
              alt="why us bg 2"
              unoptimized
              quality={100}
              objectFit="cover"
              draggable={false}
              className="object-cover rounded-2xl"
            />
            <Image
              src={"/images/why_us_bg_2.png"}
              height={0}
              width={0}
              unoptimized
              quality={100}
              alt="why us bg 2"
              draggable={false}
              objectFit="cover"
              className="absolute object-fill min-h-[350px] min-w-[500px] -bottom-8 -left-[3rem] lg:-left-[12rem] xl:-left-[16rem] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsComponent;
