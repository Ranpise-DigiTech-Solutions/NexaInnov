import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const GetStartedComponent = (props: Props) => {
  return (
    // 1. Maintain overall container style and background (now bg-neutral-900 for dark theme consistency)
    <div className="bg-white dark:bg-neutral-700 min-h-fit pt-[3rem] pb-[8rem] lg:min-h-screen w-full flex items-center justify-center">
      <div className="relative w-[90%] lg:w-[85%] h-full flex flex-col items-start justify-center gap-8 lg:gap-16">

        {/* -------------------------------------------------------- */}
        {/* 2. MAIN HEADLINE - New, concise, commercial messaging */}
        {/* -------------------------------------------------------- */}
        <div className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-200 leading-tight">
          <h1 className="text-primary-blue dark:text-white">
            NexaInnov Academy
          </h1>
          <h2 className="gradient-text">
            Learn. Grow. Lead.
          </h2>
        </div>

        {/* -------------------------------------------------------- */}
        {/* 3. REPOSITIONED SUB-TEXT/DESCRIPTION (Now more prominent) */}
        {/* -------------------------------------------------------- */}
        <p className="w-full md:w-[70%] lg:w-[60%] text-neutral-800 dark:text-neutral-400 text-lg lg:text-xl font-medium">
          The premier training division of NexaInnov Solutions. Dedicated to empowering students and professionals with industry-relevant skills in niche and emerging technologies.
        </p>

        {/* -------------------------------------------------------- */}
        {/* 4. BADGE/CERTIFICATION SECTION (The foundation for more rounded badges) */}
        {/* -------------------------------------------------------- */}
        <div className="w-fit flex flex-row items-center justify-start gap-4 lg:gap-8 mt-4">
          
          {/* Existing Badge/Circular Image */}
          <div className="w-fit">
            <Image
              src={"/images/course_5.jpg"} // Placeholder for a badge/certificate
              alt="Certified badge"
              width={100} // Set explicit width/height for better performance
              height={100}
              unoptimized
              draggable={false}
              className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover border-4 border-white/50 shadow-xl"
            />
          </div>

          {/* New Badge Placeholder 1 (Easy to replicate) */}
          <div className="w-fit">
            <Image
              src={"/images/jd_edwards.jpg"} // Change this path
              alt="Industry Certification"
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover border-4 border-white/50 shadow-xl"
            />
          </div>
          
          {/* New Badge Placeholder 2 */}
          <div className="w-fit">
            <Image
              src={"/images/sap_logo.jpg"} // Change this path
              alt="Expert Instructor"
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover border-4 border-white/50 shadow-xl"
            />
          </div>

          <div className="w-fit">
            <Image
              src={"/images/ibm_as_400.jpg"} // Change this path
              alt="Expert Instructor"
              width={100}
              height={100}
              unoptimized
              draggable={false}
              className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover border-4 border-white/50 shadow-xl"
            />
          </div>

        </div>
        
        {/* -------------------------------------------------------- */}
        {/* 5. Removed Large Image Section (Previously top-[30rem] absolute) */}
        {/* 6. Removed "Top Instructors" small image section */}
        {/* 7. Removed Top-right corner text (Now integrated into the main headline) */}
        {/* -------------------------------------------------------- */}

      </div>
    </div>
  );
};

export default GetStartedComponent;