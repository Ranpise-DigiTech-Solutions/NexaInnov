import Image from "next/image";
import React from "react";

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { ArrowUpRight } from "lucide-react";

type Props = {};

const ContactDetailsComponent = (props: Props) => {
  return (
    <div className="min-h-[50vh] w-full py-[2rem] px-[6rem] text-neutral-200 relative z-0 flex items-center justify-end mb-[18rem]">
      <Image
        src={"/images/contact_us_banner.png"}
        fill
        alt="contact us banner"
        quality={100}
        unoptimized
        layout="fixed"
        className="absolute top-0 right-0 left-0 bottom-0 z-[-1] object-fill"
      />
      <div className="w-[50%] h-full flex flex-col items-start justify-center gap-6">
        <div className="text-5xl font-bold text-white">Contact us</div>
        <div className="text-neutral-300 text-xl leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          ipsam quidem? Voluptatum inventore quis voluptas excepturi obcaecati.
        </div>
      </div>
      <div className="absolute left-[2rem] right-[2rem] h-[350px] bottom-[-17rem] z-100">
        <div className="w-full h-full p-[2rem] flex items-center justify-between gap-4">
          <div className="group h-full w-[400px] bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container">
            <p className="bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
                <BusinessCenterIcon fontSize="large" />
            </p>
            <p className="text-2xl font-semibold">
                Sales & Enquiries
            </p>
            <p className="text-neutral-400 w-full text-center leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, itaque.
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
                <p className="font-semibold text-lg transition-all transform duration-300 group-hover:text-primary-pink">Contact sales team</p>
                <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1"/>
            </div>
          </div>
          <div className="group h-full w-[400px] bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container">
            <p className="bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
                <BusinessCenterIcon fontSize="large" />
            </p>
            <p className="text-2xl font-semibold">
                Sales & Enquiries
            </p>
            <p className="text-neutral-400 w-full text-center leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, itaque.
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
                <p className="font-semibold text-lg transition-all transform duration-300 group-hover:text-primary-pink">Contact sales team</p>
                <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1"/>
            </div>
          </div>
          <div className="group h-full w-[400px] bg-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 p-[1.5rem] cursor-pointer link-underline-gradient-container">
            <p className="bg-neutral-700 p-2 rounded-xl transition-all transform duration-300 group-hover:scale-105">
                <BusinessCenterIcon fontSize="large" />
            </p>
            <p className="text-2xl font-semibold">
                Sales & Enquiries
            </p>
            <p className="text-neutral-400 w-full text-center leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, itaque.
            </p>
            <div className="relative w-fit flex flex-row items-center justify-center gap-2 link-underline-gradient-effect">
                <p className="font-semibold text-lg transition-all transform duration-300 group-hover:text-primary-pink">Contact sales team</p>
                <ArrowUpRight className="transition-all transform duration-300 group-hover:-translate-y-1"/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
