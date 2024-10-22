import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const TrustOurExpertiseComponent = (props: Props) => {
  return (
    <div className="min-h-fit w-full flex items-center justify-center bg-neutral-700 py-[2rem] xl:p-0">
      <div className="w-full lg:w-[90%] xl:w-[85%] h-[80%] flex flex-col-reverse lg:flex-row-reverse items-stretch justify-center gap-8">
        <div className="w-full flex-1 flex flex-col items-center xl:items-start justify-center gap-[3rem]">
          <p className="w-full 2xl:w-[80%] text-wrap capitalize xl:text-6xl text-4xl lg:text-5xl font-bold text-center xl:text-start text-neutral-300 ">
            Expertise you can trust
          </p>
          <div className="w-full flex flex-row flex-nowrap justify-between gap-4 items-center">
            <div className="flex-1 flex flex-col gap-2 xl:items-start items-center justify-center">
              <p className="xl:text-5xl text-4xl text-primary-pink">6+</p>
              <p className="w-full text-center xl:text-start text-base text-neutral-400 capitalize">
                Software Developers
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2 xl:items-start items-center justify-center">
              <p className="xl:text-5xl text-4xl text-primary-pink">4+</p>
              <p className="w-full text-center xl:text-start text-base text-neutral-400 capitalize">
                Projects Completed
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2 xl:items-start items-center justify-center">
              <p className="xl:text-5xl text-4xl text-primary-pink">1+</p>
              <p className="w-full text-center xl:text-start text-base text-neutral-400 capitalize">
                Years of expertise
              </p>
            </div>
          </div>
          <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 ">
            <p className="w-full gradient-border-inner xl:text-xl text-lg tracking-wide text-neutral-300 bg-primary-pink px-6 py-3 rounded-4xl">
              Get Started
            </p>
          </Button>
        </div>
        <div className="flex-1 flex items-center xl:justify-start justify-center">
          <div className="relative xl:min-h-[450px] xl:min-w-[650px] w-[90%] h-[350px] md:w-full md:h-[400px]">
            <Image
              src={"/images/trust-expertise.jpg"}
              alt="trust expertise"
              fill
              objectFit="cover"
              unoptimized
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustOurExpertiseComponent;
