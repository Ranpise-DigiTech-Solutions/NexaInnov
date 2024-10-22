import React from "react";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PeopleIcon from "@mui/icons-material/People";

type Props = {};

const OurValuesComponent = (props: Props) => {
  return (
    <div
      className="w-full min-h-fit flex items-center justify-center"
      id="our-values"
    >
      <div className="w-full lg:w-[80%] flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Core Values
          </p>
          <p className="w-full lg:w-[60%] text-center text-sm md:text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-5 md:leading-7">
            Our values shape the culture of our organization and define the{" "}
            <br /> character of our company
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <div className="w-full flex flex-row items-center justify-center gap-6 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-2 md:gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ElectricBoltOutlinedIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] !h-[40px] !w-[40px] lg:!h-[45px] lg:!w-[45px]" />
              </div>
              <p className="w-[90%] text-lg md:text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Collaboration
              </p>
              <p className="w-[80%] text-sm md:text-base text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-4 md:line-clamp-3 lg:line-clamp-2 truncate text-center">
                At NexaInnov Solutions, collaboration is a core value that
                fosters teamwork, open communication, and knowledge sharing. By
                working together, both internally and with clients, we achieve
                innovative solutions and drive collective success.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-2 md:gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <AccessTimeFilledIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] !h-[40px] !w-[40px] lg:!h-[45px] lg:!w-[45px]" />
              </div>
              <p className="w-[90%] text-lg md:text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Transparency
              </p>
              <p className="w-[80%] text-sm md:text-base text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-4 md:line-clamp-3 lg:line-clamp-2 truncate text-center">
                At NexaInnov Solutions, transparency is a core value that
                promotes honesty and openness in all interactions. We ensure
                clear communication with clients and team members, fostering
                trust and accountability throughout every project.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-2 md:gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] !h-[40px] !w-[40px] lg:!h-[45px] lg:!w-[45px]" />
              </div>
              <p className="w-[90%] text-lg md:text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Integrity
              </p>
              <p className="w-[80%] text-sm md:text-base text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-4 md:line-clamp-3 lg:line-clamp-2 truncate text-center">
                At NexaInnov Solutions, integrity is a core value that guides
                all our actions and decisions. We are committed to ethical
                practices, maintaining honesty, and upholding strong moral
                principles, ensuring trustworthiness in every project and client
                relationship
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-2 md:gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] !h-[40px] !w-[40px] lg:!h-[45px] lg:!w-[45px]" />
              </div>
              <p className="w-[90%] text-lg md:text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Trust
              </p>
              <p className="w-[80%] text-sm md:text-base text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-4 md:line-clamp-3 lg:line-clamp-2 truncate text-center">
                At NexaInnov Solutions, trust is a foundational core value that
                drives our relationships with clients and team members. We
                consistently deliver on promises, maintain confidentiality, and
                build long-term partnerships through reliability and mutual
                respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesComponent;
