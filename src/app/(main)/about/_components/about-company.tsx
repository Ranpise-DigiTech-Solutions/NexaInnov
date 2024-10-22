import React from "react";
import Image from "next/image";

type Props = {};

const AboutCompanyComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-[3rem]">
      <div className="w-full flex flex-col items-center justify-center gap-[1rem]">
        <p className="w-full text-center text-base text-primary-pink">
          About Us
        </p>
        <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-no-wrap capitalize text-neutral-200 leading-[2.5rem] md:leading-[3rem] lg:leading-[3.5rem]">
          Bringing your vision to life with <br />{" "}
          <span className="gradient-text">our expertise & dedication</span>
        </p>
      </div>
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] lg:w-[80%] flex items-center justify-center">
        <Image
          src={"/images/aboutUs_pic_1.png"}
          alt=""
          fill
          // height={1000}
          // width={800}
          unoptimized
          quality={100}
          className="rounded-3xl object-cover"
          draggable="false"
          contentEditable="false"
        />
      </div>
      <div className="w-full lg:w-[80%] min-h-[150px] flex items-center justify-center rounded-full bg-neutral-800 shadow-[-1px_-1px_10px_var(--secondary-blue),1px_1px_10px_var(--secondary-pink)] overflow-clip">
        <div className="w-full flex flex-row flex-nowrap items-start justify-between gap-4 px-[1rem] md:px-[1.5rem] lg:px-[4rem]">
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-200 text-2xl md:text-3xl font-bold">10+</p>
            <p className="text-neutral-400 text-sm md:text-base font-normal capitalize">
              employees
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-200 text-2xl md:text-3xl font-bold">1+</p>
            <p className="text-neutral-400 text-sm md:text-base font-normal capitalize">
              countries
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-200 text-2xl md:text-3xl font-bold">4+</p>
            <p className="text-neutral-400 text-sm md:text-base font-normal capitalize text-center">
              Projects done
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-200 text-2xl md:text-3xl font-bold">2+</p>
            <p className="text-neutral-400 text-sm md:text-base font-normal capitalize">
              Offices
            </p>
          </div>
          <div className="hidden h-full md:flex flex-col items-center justify-center gap-2">
            <p className="text-neutral-200 text-2xl md:text-3xl font-bold">10+</p>
            <p className="text-neutral-400 text-sm md:text-base font-normal capitalize">
              happy clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyComponent;
