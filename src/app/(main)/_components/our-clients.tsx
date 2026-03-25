import { ourClients } from "@/lib/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const OurClientsComponent = (props: Props) => {
  return (
    <div className="min-h-min w-full flex items-center justify-center">
      <div className="w-[90%] xl:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem] overflow-clip">
        <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-neutral-200 capitalize">
            Our Happy Clients ✨
          </h2>
          <p className="max-w-3xl text-base lg:text-lg font-neutral text-neutral-800 dark:text-neutral-500 leading-7">
            See how we’ve helped businesses grow and thrive! From impactful solutions to lasting partnerships, our clients share their success stories. 🚀
          </p>
          <div className="bg-orange-300 dark:bg-neutral-800 border border-neutral-700 rounded-lg p-4 md:p-6 mt-4 max-w-2xl mx-auto shadow-xl">
            <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-300 font-medium italic">
              <span className="text-primary-pink font-bold">💡 Highlight:</span> One of our clients — Hobbyist Decal — recently secured **VC funding** from a Mumbai-based fund house, a true testament to the value we deliver!
            </p>
          </div>
        </div>
        <div className="w-full min-h-[400px] flex flex-col justify-center items-center overflow-hidden">
          <div className="w-fit flex-1 flex flex-row items-center justify-center bg-white dark:bg-neutral-800 animate-marquee whitespace-nowrap gap-[4rem]">
            {ourClients?.[0].map((client, index) => (
              <div
                key={index}
                className="relative min-w-[250px] h-full flex items-center justify-center"
              >
                <Image
                  src={client?.logo}
                  height={250}
                  width={250}
                  objectFit="cover"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            ))}
            {ourClients?.[0].map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative min-w-[250px] h-full flex items-center justify-center"
              >
                <Image
                  src={client?.logo}
                  height={250}
                  width={250}
                  objectFit="cover"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
          {/* <div className="w-fit flex-1 flex flex-row items-center justify-center bg-neutral-800 animate-marquee whitespace-nowrap">
            {ourClients?.[1].map((client, index) => (
              <div
                key={index}
                className="relative min-w-[250px] h-full flex items-center justify-center"
              >
                <Image
                  src={client?.logo}
                  height={250}
                  width={250}
                  objectFit="cover"
                  alt=""
                />
              </div>
            ))}
            {ourClients?.[1].map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative min-w-[250px] h-full flex items-center justify-center"
              >
                <Image
                  src={client?.logo}
                  height={250}
                  width={250}
                  objectFit="cover"
                  alt=""
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurClientsComponent;
