import { ourClients } from "@/lib/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const OurClientsComponent = (props: Props) => {
  return (
    <div className="min-h-min w-full flex items-center justify-center">
      <div className="w-[90%] xl:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem] overflow-clip">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Happy Clients
          </p>
          <p className="w-full text-center text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, laudantium laudantium!. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full min-h-[400px] bg-white flex flex-col justify-center items-center overflow-hidden">
          <div className="w-fit flex-1 flex flex-row items-center justify-center bg-neutral-800 animate-marquee whitespace-nowrap">
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
                />
              </div>
            ))}
          </div>
          <div className="w-fit flex-1 flex flex-row items-center justify-center bg-neutral-800 animate-marquee whitespace-nowrap">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientsComponent;
