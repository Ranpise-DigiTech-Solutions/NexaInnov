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
        <p className="w-[60%] text-center text-5xl font-semibold text-no-wrap capitalize text-neutral-200 leading-[3.5rem]">
          Bringing your vision to life with <br />{" "}
          <span className="gradient-text">expertise and dedication</span>
        </p>
      </div>
      <div className="w-[80%] flex items-center justify-center">
        <Image
          src={"/images/aboutUs_pic_1.png"}
          alt=""
          height={1000}
          width={800}
          objectFit="cover"
          unoptimized
          quality={100}
          className="w-[1250px] h-[500px] rounded-3xl object-cover"
          draggable="false"
          contentEditable="false"
        />
      </div>
      <div className="w-[80%] min-h-[150px] flex flex-row items-center justify-between gap-4 rounded-full bg-neutral-800 shadow-[-1px_-1px_10px_var(--secondary-blue),1px_1px_10px_var(--secondary-pink)] overflow-clip px-[4rem]">
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <p className="text-neutral-200 text-3xl font-bold">100+</p>
          <p className="text-neutral-400 text-base font-normal capitalize">
            employees
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <p className="text-neutral-200 text-3xl font-bold">15+</p>
          <p className="text-neutral-400 text-base font-normal capitalize">
            countries
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <p className="text-neutral-200 text-3xl font-bold">60+</p>
          <p className="text-neutral-400 text-base font-normal capitalize">
            Projects done
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <p className="text-neutral-200 text-3xl font-bold">30+</p>
          <p className="text-neutral-400 text-base font-normal capitalize">
            Offices
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <p className="text-neutral-200 text-3xl font-bold">25+</p>
          <p className="text-neutral-400 text-base font-normal capitalize">
            project awards
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyComponent;
