import React from "react";
import Image from "next/image";
import { Building, Landmark, MapPin } from "lucide-react";

type Props = {};

const OurOfficeComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Regional Impact
          </p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-6 md:leading-7">
            With a strong emphasis on regional development, we strive to make a
            meaningful impact through our services. Our commitment to
            understanding local dynamics allows us to provide effective
            solutions that truly resonate with our clients.
          </p>
        </div>
        <div className="relative w-full min-h-[600px] flex flex-col lg:flex-row items-center lg:items-stretch justify-center md:gap-6">
          <div className="w-full lg:w-[40%] flex flex-col justify-center items-start gap-6">
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Come and visit us!
            </h2>
            <p className="text-sm md:text-base text-neutral-500 leading-6">
              We welcome you to visit our offices and experience our vibrant
              work environment firsthand. Whether you want to learn more about
              our services, have a face-to-face consultation, or simply explore
              our spaces, our doors are always open. Find us at our convenient
              locations listed below and let’s connect in person. 
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {/*<div className="group border border-neutral-700 p-4 md:p-[2rem] bg-neutral-700 w-full min-h-fit rounded-xl flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-fit bg-neutral-600 p-2 rounded-xl">
                  <Building className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem]" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-center md:items-start gap-2">
                  <h2 className="font-bold text-base md:text-lg text-white capitalize group-hover:text-primary-pink transform transition-all duration-300">
                    Mumbai, Maharashtra, IND
                  </h2>
                  <p className="w-full text-center md:text-start text-sm md:text-base text-neutral-400 capitalize text-wrap">
                    Sarvodaya park, Bldg no 2, wing A, kalyan west, mumbai,
                    maharashtra 421301
                  </p>
                </div>
              </div>>*/}
              <div className="group border border-neutral-700 p-4 md:p-[2rem] bg-neutral-700 w-full min-h-fit rounded-xl flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-fit bg-neutral-600 p-2 rounded-xl">
                  <Landmark className="h-6 w-6 md:h-[2rem] md:w-[2rem]" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-center md:items-start gap-2">
                  <h2 className="font-bold text-base md:text-lg text-white capitalize group-hover:text-primary-pink transform transition-all duration-300">
                    Mangalore, Karnataka, IND
                  </h2>
                  <p className="w-full text-center md:text-start text-neutral-400 capitalize text-wrap text-sm md:text-base">
                    4-31D, shri krishna nilaya, kolya, ramananda ashrama kotekar
                    post, H P school, mangalore, karnataka 575022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full min-h-[500px] lg:h-auto lg:w-[60%] flex items-center justify-center">
            <Image
              src={"/images/world_map_2.png"}
              fill
              alt="world map"
              quality={100}
              unoptimized
              // layout=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfficeComponent;
