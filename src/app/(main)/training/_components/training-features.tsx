'use client';

import Image from "next/image";
import React, { useState } from "react";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

type Props = {};

const TrainingFeaturesComponent = (props: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Expert-Led Training",
      content:
        "Learn directly from seasoned industry professionals with real-world experience in niche technologies.",
    },
    {
      title: "Career-Focused Curriculum",
      content:
        "Hands-on, project-based learning tailored to make you job-ready and future-proof.",
    },
    {
      title: "Industry-Aligned Projects",
      content:
        "Work on real-world case studies and capstone projects that mirror current industry demands.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[85%] flex flex-col-reverse lg:flex-row justify-center items-end gap-8 lg:gap-16">
        {/* Left side - Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full lg:min-w-[300px] min-h-[400px] lg:min-h-[500px]">
            <Image
              src={"/images/training-features-bg.jpg"}
              alt="training features background image"
              height={0}
              width={0}
              unoptimized
              unselectable="on"
              draggable={false}
              quality={100}
              objectFit="cover"
              className="h-full w-full absolute bottom-0 left-0 right-0 top-0 z-10 px-4"
            />
            <div className="absolute z-1 w-full h-[80%] bottom-0 bg-neutral-700 rounded-2xl"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col gap-8 items-start justify-center">
          <p className="text-4xl lg:text-5xl text-start font-semibold text-wrap lg:text-nowrap capitalize text-neutral-200">
            Professional & lifelong <br />
            <span className="gradient-text">learning comes here</span>
          </p>
          <p className="text-base font-normal text-wrap line-clamp-4 lg:line-clamp-3 truncate text-neutral-400 leading-7 text-start">
            Nexainnov Academy is where professional growth and lifelong learning begin. We offer expert-led training in cutting-edge technologies, designed to upskill students, professionals, and career changers. Whether you're starting out or advancing your tech career, Nexainnov Academy is your trusted partner in continuous learning and real-world readiness.
          </p>

          {/* Expandable features */}
          <div className="w-full flex flex-col items-start justify-center gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-[60%] flex flex-col gap-2 border border-neutral-500 shadow-md shadow-neutral-500 p-3 rounded-md cursor-pointer transition-all duration-300"
                onClick={() => handleToggle(index)}
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <PsychologyOutlinedIcon fontSize="medium" className="text-primary-pink" />
                  <p className="text-neutral-300 font-normal text-base lg:text-lg line-clamp-1">
                    {item.title}
                  </p>
                </div>
                {openIndex === index && (
                  <p className="text-neutral-400 text-sm lg:text-base pl-7 transition-all duration-300">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFeaturesComponent;
