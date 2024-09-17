import React from "react";
import Image from "next/image";

type Props = {};

const OurTeamComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Experience and Integrity by our team
          </p>
          <p className="w-full text-center text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-7">
            The right tools wielded by the right people to make anything
            possible. <br /> From year to year we strive to invent the most
            innovative technology produced by our creative people.
          </p>
        </div>
        <div className="w-full flex flex-row md:flex-row items-center justify-start md:justify-center gap-6 overflow-x-auto lg:overflow-x-visible">
          <div className="relative group min-h-[500px] min-w-[250px] rounded-tr-[3rem] rounded-bl-[3rem] cursor-pointer bg-white transfrom transition-all duration-500 hover:min-w-[350px] overflow-clip">
            <div className="absolute w-full  bottom-0 z-10 bg-black h-0 opacity-0 transform transition-all duration-500 flex flex-col items-center justify-center gap-2 group-hover:h-[100px] group-hover:opacity-75">
              <p className="w-full text-neutral-200 text-center font-semibold capitalize">
                Samadhan Ranpise
              </p>
              <p className="w-full text-center text-neutral-500 capitalize">
                Co-Founder & CEO
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
          <div className="relative group min-h-[500px] min-w-[250px] rounded-tr-[3rem] rounded-bl-[3rem] cursor-pointer bg-white transfrom transition-all duration-500 hover:min-w-[350px] overflow-clip">
            <div className="absolute w-full  bottom-0 z-10 bg-black h-0 opacity-0 transform transition-all duration-500 flex flex-col items-center justify-center gap-2 group-hover:h-[100px] group-hover:opacity-75">
              <p className="w-full text-neutral-200 text-center font-semibold capitalize">
                Adithya R
              </p>
              <p className="w-full text-center text-neutral-500 capitalize">
                Lead Software Developer
              </p>
            </div>
            <Image
              src={"/images/adithya_fullpic.jpeg"}
              fill
              objectFit="cover"
              alt="CEO Profile Pic"
              unoptimized
              quality={100}
              className="z-0 rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
          <div className="relative group min-h-[500px] min-w-[250px] rounded-tr-[3rem] rounded-bl-[3rem] cursor-pointer bg-white transfrom transition-all duration-500 hover:min-w-[350px] overflow-clip">
            <div className="absolute w-full  bottom-0 z-10 bg-black h-0 opacity-0 transform transition-all duration-500 flex flex-col items-center justify-center gap-2 group-hover:h-[100px] group-hover:opacity-75">
              <p className="w-full text-neutral-200 text-center font-semibold capitalize">
                Ravindra Raghavan
              </p>
              <p className="w-full text-center text-neutral-500 capitalize">
                Co-Founder & CTO
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
