import Image from "next/image";
import React from "react";

type Props = {};

const ExploreCareersComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-[4rem]">
      <div className="min-h-[300px] w-full flex items-center justify-center bg-neutral-700">
        <div className="h-[90%] w-[95%] md:w-[85%] flex flex-col items-center justify-center gap-6">
          <p className="capitalize w-full text-3xl md:text-4xl lg:text-5xl text-neutral-200 font-bold text-nowrap text-center leading-12">
            Explore Exciting Career
            <br /> <span className="gradient-text">Opportunities with us</span>
          </p>
          <p className="w-[90%] md:w-[85%] lg:w-[60%] text-wrap line-clamp-4 md:line-clamp-3 lg:line-clamp-2 text-sm lg:text-base leading-6 md:leading-7 font-normal text-neutral-400 text-center">
            Unlock your potential and explore exciting career opportunities with
            us. Join a dynamic team where innovation thrives, and your skills
            make an impact.
          </p>
        </div>
      </div>
      <div className="flex-1 w-[90%] lg:w-[85%] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
        <div className="flex-1">
          <Image
            src={"/images/careers-interview.jpeg"}
            alt="Careers Interview"
            width={0}
            height={0}
            className="min-h-[350px] min-w-[450px] md:min-w-[500px] lg:min-w-[550px] rounded-2xl object-cover"
            unoptimized
            quality={100}
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4">
            <p className="text-wrap text-3xl md:text-4xl lg:text-5xl text-neutral-200 font-bold capitalize text-center lg:text-start">
              Diversity, equity & Inclusion
            </p>
            <div className="text-wrap text-neutral-400 text-start text-sm md:text-base font-normal flex flex-col items-start justify-center gap-4 leading-6 lg:leading-7">
              <p>
                Diversity, equity, and inclusion are integral to our values and
                mission. We believe that a diverse team brings unique
                perspectives, innovative ideas, and richer solutions to the
                table. Our commitment is to create an environment where everyone
                feels valued, respected, and heard, regardless of their
                background, identity, or experiences. By fostering a culture of
                inclusion, we aim to empower individuals to reach their full
                potential and contribute to our collective success.
              </p>
              <p>
                We strive to ensure equal opportunities for all, promoting
                collaboration across diverse teams and encouraging open
                dialogue. Our goal is to build a workplace where differences are
                not just welcomed but celebrated, driving creativity, growth,
                and innovation. Together, we are building a community that
                thrives on understanding, acceptance, and respect for one
                another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCareersComponent;
