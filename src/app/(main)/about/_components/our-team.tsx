import React from "react";
import Image from "next/image";

type Props = {};

const OurTeamComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Experience and Integrity by our team
          </p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-6 md:leading-7">
            At NexaInnov Solutions, our team brings a wealth of experience and
            unwavering integrity to every project we undertake. With years of
            industry expertise, we are dedicated to delivering exceptional
            results while upholding the highest standards of professionalism and
            ethics.
          </p>
        </div>
        <div className="w-full flex flex-row md:flex-row items-center justify-start md:justify-center gap-6 overflow-x-auto lg:overflow-x-visible">
          <div className="relative group min-h-[400px] md:min-h-[450px] lg:min-h-[500px] min-w-[250px] rounded-tr-[3rem] rounded-bl-[3rem] cursor-pointer bg-white transform transition-all duration-500 hover:min-w-[350px] overflow-clip">
            <div className="absolute w-full  bottom-0 z-10 bg-black h-0 opacity-0 transform transition-all duration-500 flex flex-col items-center justify-center gap-2 group-hover:h-[100px] group-hover:opacity-80">
              <p className="w-full text-neutral-200 text-center font-semibold capitalize">
                Samadhan Ranpise
              </p>
              <p className="w-full text-center text-neutral-500 capitalize">
                Investor
              </p>
            </div>
            <Image
              src={"/images/ceo_fullpic.jpeg"}
              fill
              objectFit="cover"
              alt="CEO Profile Pic"
              unoptimized
              quality={100}
              className="z-0 rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
          <div className="relative group min-h-[400px] md:min-h-[450px] lg:min-h-[500px] min-w-[250px] rounded-tr-[3rem] rounded-bl-[3rem] cursor-pointer bg-white transform transition-all duration-500 hover:min-w-[350px] overflow-clip">
            <div className="absolute w-full  bottom-0 z-10 bg-black h-0 opacity-0 transform transition-all duration-500 flex flex-col items-center justify-center gap-2 group-hover:h-[100px] group-hover:opacity-80">
              <p className="w-full text-neutral-200 text-center font-semibold capitalize">
                Ravindra Raghavan
              </p>
              <p className="w-full text-center text-neutral-500 capitalize">
                Founder and CEO
              </p>
            </div>
            <Image
              src={"/images/cto_fullpic.jpeg"}
              fill
              objectFit="cover"
              alt="CEO Profile Pic"
              unoptimized
              quality={100}
              className="z-0 rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
