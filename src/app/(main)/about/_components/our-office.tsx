import React from "react";
import Image from 'next/image';

type Props = {};

const OurOfficeComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Global Presence
          </p>
          <p className="w-full text-center text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, laudantium laudantium!. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="relative w-full min-h-[600px]">
            <Image 
                src={"/images/world_map.png"}
                fill
                objectFit="cover"
                alt="world map"
                quality={100}
                unoptimized
                layout="fixed"
                className=""
            />
        </div>
      </div>
    </div>
  );
};

export default OurOfficeComponent;
