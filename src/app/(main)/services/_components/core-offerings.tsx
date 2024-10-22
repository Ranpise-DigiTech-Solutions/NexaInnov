import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

type Props = {
  imageUrl: string;
  services: {
    title: string;
    description: string;
  }[];
};

const CoreOfferingsComponent = ({ imageUrl, services }: Props) => {
  return (
    <div
      className="min-h-fit lg:max-h-[500px] w-full flex-col flex lg:flex-row items-center justify-center gap-8"
      id="core-offerings"
    >
      <div className="flex-[45%] h-full flex items-center justify-center pl-[1rem]">
        <Image
          src={imageUrl}
          height={0}
          width={0}
          unoptimized
          quality={100}
          alt="services-automation-overview"
          className="h-[300px] w-[400px] lg:h-[450px] lg:w-[500px] md:w-[450px] xl:h-[450px] xl:w-[550px] object-cover rounded-3xl"
        />
      </div>
      <div className="w-full flex-[55%] h-full flex flex-col items-start justify-center gap-6 px-[3rem]">
        <p className="text-sm lg:text-base text-primary-pink text-start tracking-widest font-semibold uppercase">
          core offerings
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-4">
          {services.length !== 0 &&
            services.map((service, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-start justify-start gap-2"
              >
                <BadgeCheck className="text-green-tag h-[20px] w-[20px] flex-shrink-0 my-1" />
                <p className="text-base text-neutral-300">
                  <span className="font-bold text-neutral-200">{service.title}</span> {service.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoreOfferingsComponent;
