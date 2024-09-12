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
    <div className={twMerge("min-h-screen w-full flex items-center justify-center", className)}>
      <div className="w-[90%] flex flex-col items-center justify-center gap-6 text-neutral-200">
        <div className="w-full text-center text-4xl lg:text-5xl font-bold">
          Our Leadership Team
        </div>
        <div className="w-full text-base lg:text-lg text-center text-wrap text-neutral-400 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quos
          maxime? Possimus quo non voluptatem facilis cumque culpa totam dolorum!
        </div>
        <div className="w-full py-[2rem] flex flex-row items-center justify-center flex-wrap gap-8">
          <Link href={"/team/ceo"}>
            <div className="group h-[500px] max-w-[325px] bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center gap-6 relative cursor-pointer transform transition-all duration-300 hover:translate-y-2 hover:bg-neutral-700">
              <Button className="absolute top-3 right-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                <p className="w-full gradient-border-inner text-md tracking-wide text-neutral-200 py-2 px-4 font-semibold">
                  CEO
                </p>
              </Button>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/C5103AQF-qSCFnpFaLA/profile-displayphoto-shrink_100_100/0/1566392750666?e=1729123200&v=beta&t=v46_LAnrm4qvNXH7AK8sku2zdGnGB-eU4kzjbJtoAoo"
                  }
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
                <div className="font-bold text-neutral-500">Co-Founder & CEO</div>
              </div>
              <div className="max-h-[120px] w-full text-center text-wrap text-neutral-400 truncate line-clamp-4 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                at est labore, recusandae, omnis officia porro inventore pariatur
                quia, voluptate non fugit ea eaque quae. Dignissimos, similique
                officiis assumenda corrupti reprehenderit adipisci odio
                voluptatibus cupiditate eveniet hic itaque soluta suscipit.
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
                <LinkedInIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
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
                  CTO
                </p>
              </Button>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/C5603AQF5fwqrcDSJYQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516322751212?e=1729123200&v=beta&t=6WV1wlZV-rdz95FqqUD4H4i8T24Zq1Xm7idHO8znUhI"
                  }
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
                <div className="font-bold text-neutral-500">Co-Founder & CTO</div>
              </div>
              <div className="max-h-[120px] w-full text-center text-wrap text-neutral-400 truncate line-clamp-4 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                at est labore, recusandae, omnis officia porro inventore pariatur
                quia, voluptate non fugit ea eaque quae. Dignissimos, similique
                officiis assumenda corrupti reprehenderit adipisci odio
                voluptatibus cupiditate eveniet hic itaque soluta suscipit.
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
                <LinkedInIcon
                  fontSize="medium"
                  className="transform transition-all duration-300 hover:text-primary-light-blue"
                />
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
