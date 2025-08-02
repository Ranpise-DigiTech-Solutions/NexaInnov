import React from "react";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const TeamMembersComponent = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "min-h-screen w-full flex items-center justify-center",
        className
      )}
    >
      <div className="w-[90%] flex flex-col items-center justify-center gap-6 text-neutral-200">
        <div className="w-full text-center text-4xl lg:text-5xl font-bold">
          Our Leadership Team
        </div>
        <div className="w-full text-base lg:text-lg text-center text-wrap text-neutral-400 leading-7">
          The right tools wielded by the right people to make anything possible.
          From year to year we strive to invent the most innovative technology
          produced by our creative people.
        </div>
        <div className="w-full py-[2rem] flex flex-row items-center justify-center flex-wrap gap-8">
          <Link href={"/team/ceo"}>
            <div className="group h-[500px] max-w-[325px] bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center gap-6 relative cursor-pointer transform transition-all duration-300 hover:translate-y-2 hover:bg-neutral-700">
              <Button className="absolute top-3 right-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                <p className="w-full gradient-border-inner text-md tracking-wide text-neutral-200 py-2 px-4 font-semibold">
                  Strategic Investor
                </p>
              </Button>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/images/ceo_passportpic.jpeg"}
                  height={150}
                  width={150}
                  alt=""
                  unoptimized
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="transition-all transform duration-300 group-hover:text-primary-pink text-2xl font-semibold">
                  Samadhan Ranpise
                </div>
                <div className="font-bold text-neutral-500">
                  Strategic Investor
                </div>
              </div>
              <div className="max-h-[120px] w-full text-center text-wrap text-neutral-400 truncate line-clamp-4 leading-7">
                Samadhan brings over 20 years of work experience in Information
                Technology in system analysis, design, development and project
                management. His technological forte is IBM AS400 and he has
                proficient in JD Edwards ERP system.
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <WhatsAppIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <FacebookIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <XIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <Link
                  href={
                    "https://www.linkedin.com/in/samadhan-ranpise-0b661749/"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon
                    fontSize="medium"
                    className="transform transition-all duration-300 hover:text-primary-light-blue"
                  />
                </Link>
                <InstagramIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
              </div>
            </div>
          </Link>
          <Link href={"/team/cto"}>
            <div className="group h-[500px] max-w-[325px] bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center gap-6 relative cursor-pointer transform transition-all duration-300 hover:translate-y-2 hover:bg-neutral-700">
              <Button className="absolute top-3 right-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                <p className="w-full gradient-border-inner text-md tracking-wide text-neutral-200 py-2 px-4 font-semibold">
                  Founder and CEO
                </p>
              </Button>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/images/cto_passportpic.jpeg"}
                  height={150}
                  width={150}
                  alt=""
                  unoptimized
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="transition-all transform duration-300 group-hover:text-primary-pink text-2xl font-semibold">
                  Ravindra Raghavan
                </div>
                <div className="font-bold text-neutral-500">
                  Founder and CEO
                </div>
              </div>
              <div className="max-h-[120px] w-full text-center text-wrap text-neutral-400 truncate line-clamp-4 leading-7">
                Ravindra brings over 18 years of work experience in Information
                Technology in system analysis, design, development and project
                management. His technological forte is IBM AS400 and he is
                proficient in ERP, BFSI domain.
              </div>
              <div className="w-full flex flex-row items-center justify-center gap-2">
                <WhatsAppIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <FacebookIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <XIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
                <Link
                  href={
                    "https://www.linkedin.com/in/ravindra-raghavan-itil-v3-safe-agelist-1825767/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    fontSize="medium"
                    className="transform transition-all duration-300 hover:text-primary-light-blue"
                  />
                </Link>
                <InstagramIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersComponent;
