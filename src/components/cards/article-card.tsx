"use client";

import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  title: string;
  readTime: string;
  imageSrc: string;
  href: string;
};

const ArticleCard = ({ className, title, readTime, imageSrc, href }: Props) => {
  return (
    
      <div
        className={twMerge(
          "group bg-neutral-800 cursor-pointer rounded-3xl transition-all transform duration-300 hover:translate-y-2 link-underline-gradient-container overflow-hidden",
          className
        )}
      >
        <div className="relative w-full aspect-[4/3] rounded-t-3xl overflow-hidden">
          <Image
            src={imageSrc}
            alt="article cover image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-4">
          <div className="w-full self-start text-xl lg:text-2xl font-bold transition-all transform duration-300 group-hover:text-primary-pink text-wrap line-clamp-2">
            {title}
          </div>
          <div className="w-full flex items-center gap-4 justify-start text-neutral-400 text-sm md:text-base">
            <div className="flex items-center justify-start gap-2">
              <Clock />
              <p>{readTime}</p>
            </div>
          </div>
          <Link href={href}>
          <div className="w-full self-start flex items-center justify-start text-base md:text-lg">
            <div className="relative link-underline-gradient-effect flex items-center gap-2">
              <p className="font-bold">Read more</p>
              <ArrowUpRight className="transition-all transform duration:300 group-hover:-translate-y-1" />
            </div>
          </div>
          </Link>
          </div>
        </div>
  );
};

export default ArticleCard;