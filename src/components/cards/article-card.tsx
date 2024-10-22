"use client";

import React from "react";

import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const ArticleCard = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "group bg-neutral-800 cursor-pointer rounded-3xl transition-all transform duration-300 hover:translate-y-2 link-underline-gradient-container",
        className
      )}
    >
      <div className="h-[60%] w-full overflow-hidden flex items-center justify-center rounded-t-3xl">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
          height={100}
          width={100}
          quality={100}
          unoptimized
          layout="fixed"
          alt="article cover image"
          className="h-full w-full object-cover transition-all transform duration-300 group-hover:scale-105 group-hover:rounded-t-3xl rounded-t-3xl"
        />
      </div>
      <div className="w-full h-[40%] px-4 py-6 flex flex-col items-center justify-center gap-6">
        <div className="w-full self-start text-xl lg:text-2xl font-bold truncate translate-all transform duration-300 group-hover:text-primary-pink text-wrap">
          What is Initial Public Offering (IPO)?
        </div>
        <div className="w-full flex items-center gap-4 justify-start text-neutral-400 text-sm md:text-base">
          <div className="flex items-center gap-2 justify-start">
            <Calendar />
            <p>September 1, 2002</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <Clock />
            <p>7 min read</p>
          </div>
        </div>
        <div className="w-full self-start flex items-center justify-start text-base md:text-lg">
          <div className="relative link-underline-gradient-effect flex items-center gap-2">
            <p className="font-bold">Read more</p>
            <ArrowUpRight className="transition-all transform duration:300 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
