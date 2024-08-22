import React from "react";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PeopleIcon from "@mui/icons-material/People";

type Props = {};

const OurValuesComponent = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-5xl font-semibold text-neutral-200 capitalize">
            Our Core Values
          </p>
          <p className="w-[60%] text-center text-lg font-neutral text-no-wrap text-neutral-500 leading-7">
            Our values shape the culture of our organization and define the{" "}
            <br /> character of our company
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <div className="w-full flex flex-row items-center justify-center gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ElectricBoltOutlinedIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-full text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Collaboration
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-7 line-clamp-2 truncate text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, optio! Dignissimos dolorum impedit.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <AccessTimeFilledIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-full text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Transparency
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-7 line-clamp-2 truncate text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, optio! Dignissimos dolorum impedit.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-full text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Integrity
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-7 line-clamp-2 truncate text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, optio! Dignissimos dolorum impedit.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-full text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Trust
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-7 line-clamp-2 truncate text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, optio! Dignissimos dolorum impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesComponent;
