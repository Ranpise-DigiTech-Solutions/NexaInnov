import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  description: string;
};

const OverviewComponent = ({ imageUrl, description }: Props) => {
  return (
    <div
      className="min-h-fit lg:max-h-[500px] w-full flex-col-reverse flex lg:flex-row items-center justify-center"
      id="overview"
    >
      <div className="w-full flex-[55%] h-full flex flex-col items-start justify-center gap-4 py-[2rem] px-[3rem]">
        <p className="text-sm lg:text-base text-primary-pink text-start tracking-widest font-semibold uppercase">Overview</p>
        <p className="text-start text-base xl:text-lg font-normal text-neutral-300 leading-8 xl:leading-10">
          {description}
        </p>
      </div>
      <div className="flex-[45%] h-full flex items-center justify-center px-[1rem]">
        <Image
          src={imageUrl}
          height={0}
          width={0}
          unoptimized
          quality={100}
          alt="services-automation-overview"
          className="h-[300px] w-[400px] lg:h-[350px] md:w-[450px] xl:h-[400px] xl:w-[500px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
