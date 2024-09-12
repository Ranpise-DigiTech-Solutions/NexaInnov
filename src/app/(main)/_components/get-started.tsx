"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clientReviews } from "@/lib/constants";
import Link from "next/link";

type Props = {
  className?: string;
};

const GetStartedComponent = ({ className }: Props) => {
  return (
    // <div className={twMerge("w-full flex-[85%]")}>
    <Carousel
      className={twMerge(
        `w-full min-h-fit flex items-center justify-center`,
        className
      )}
      plugins={
        [
          Autoplay({
            delay: 5000,
          }),
        ]
      }
    >
      <CarouselContent>
        {clientReviews.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="flex-1 h-full flex xl:flex-row flex-col-reverse items-stretch justify-center flex-wrap-reverse md:gap-12 xl:gap-4">
              <div className="flex-1 w-[90%] xl:w-full self-center flex flex-col justify-center items-center gap-[3rem] text-wrap xl:pl-[4rem]">
                <div className="text-4xl lg:text-5xl text-neutral-200 flex flex-col justify-center items-center gap-2 font-bold">
                  <p className="text-center">Next-gen innovation company</p>
                  <p className="gradient-text">for modern customers</p>
                </div>
                <div className="text-neutral-500 text-xl lg:text-2xl flex flex-col justify-center items-center gap-2">
                  <p className="text-center">
                    Leading-edge solutions provider for visionary customers. We
                    provide Bespoke IT Solutions using Advanced Technology
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 lg:justify-between lg:p-x-2 w-full mt-6">
                  <Link href={"#why-us"}>
                    <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                      <p className="w-full gradient-border-inner text-lg lg:text-xl tracking-wide text-neutral-200 px-10 lg:px-[50px] lg:py-[15px]">
                        Get Started
                      </p>
                    </Button>
                  </Link>
                  <Link href={"/about#our-values"}>
                    <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 p-7 md:p-8 rounded-full">
                      <p className="w-full h-full text-lg lg:text-xl tracking-wide text-neutral-200 rounded-full flex items-center justify-center">
                        Browse Features
                      </p>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full min-h-[500px]">
                  <Image
                    src={"/images/get-started-bg-2.png"}
                    fill
                    alt="Get Started"
                    unoptimized
                    draggable={false}
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    // </div>
  );
};

export default GetStartedComponent;
