"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

type Props = {
  bgImageUrl: string;
  title: string;
};

const HeaderComponent = ({ bgImageUrl, title }: Props) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <div className="w-full min-h-fit flex flex-col items-center justify-center gap-0">
      <div className="min-h-[30vh] md:min-h-[50vh] w-full p-[2rem] relative z-0 flex items-center justify-center">
        <Image
          src={bgImageUrl}
          fill
          alt="contact us banner"
          quality={100}
          unoptimized
          layout="fixed"
          className=" absolute top-0 right-0 left-0 bottom-0 z-[-1] object-cover"
        />
        <div className="text-neutral-200 text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-wrap text-center">
          {title}
        </div>
      </div>
      <nav className="w-full bg-secondary-purple-dark px-[2rem] py-[1rem] hidden lg:flex flex-row items-center justify-start gap-6">
        <p
          className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center"
          onClick={() => scrollToSection("overview")}
        >
          Overview
        </p>
        <p
          className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center"
          onClick={() => scrollToSection("core-offerings")}
        >
          Core Offerings
        </p>
        <p className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center">
          Our Expertise
        </p>
        <p className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center">
          Our Approach
        </p>
        <p className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center">
          Technologies We Use
        </p>
        <p className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center">
          Key Benefits
        </p>
        <p className="text-base xl:text-lg capitalize font-neutral text-neutral-200 cursor-pointer text-center">
          Success Stories
        </p>
      </nav>
      <div className="w-full h-fit bg-secondary-purple-dark px-[2rem] py-[1rem] lg:hidden flex flex-col items-center justify-center">
        <div
          className="flex flex-row items-center justify-center gap-2 cursor-pointer"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <Menu className="text-neutral-200" />
          <p className="text-lg capitalize text-neutral-200 font-semibold">
            Menu
          </p>
        </div>
      </div>
      <nav
        className={`w-full ${
          menuToggle ? "!max-h-[325px] py-[1rem]" : "!max-h-0"
        } flex lg:!hidden bg-secondary-purple-dark flex-col items-center justify-center gap-[1rem] overflow-hidden transform transition-all duration-300`}
      >
        <p
          className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200"
          onClick={() => scrollToSection("overview")}
        >
          Overview
        </p>
        <p
          className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200"
          onClick={() => scrollToSection("core-offerings")}
        >
          Core offerings
        </p>
        <p className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200">
          Our Expertise
        </p>
        <p className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200">
          Our Approach
        </p>
        <p className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200">
          Technologies We Use
        </p>
        <p className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200">
          Key Benefits
        </p>
        <p className="text-lg capitalize font-neutral text-neutral-400 cursor-pointer transform transition-all duration-300 hover:text-neutral-200">
          Success Stories
        </p>
      </nav>
    </div>
  );
};

export default HeaderComponent;
