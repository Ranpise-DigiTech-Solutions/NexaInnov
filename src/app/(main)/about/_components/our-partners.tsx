import React from "react";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {};

const OurPartnersComponent = (props: Props) => {
  return (
    <div className="min-h-min w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Partners
          </p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-6 md:leading-7">
            At NexaInnov Solutions, we believe that strong partnerships are
            key to delivering exceptional results and driving innovation. We
            proudly collaborate with a network of industry- leading companies,
            technology providers, and solution experts. Together, we combine
            strengths and expertise to offer cutting-edge IT solutions that help
            businesses thrive in a competitive digital landscape.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:flex-wrap">
          <div className="min-h-[250px] w-full md:min-w-[400px] lg:min-w-[500px] bg-neutral-800 border-neutral-700 border flex-1 flex flex-row items-center justify-center gap-2">
            <Image
              src={"/images/client_logo_11.png"}
              height={250}
              width={250}
              objectFit="cover"
              alt=""
            />
            <p className="text-neutral-200 text-center text-lg mt-2">Anav Decals</p>
          </div>
          <div className="min-h-[250px] w-full md:min-w-[400px] lg:min-w-[500px] bg-neutral-800 border-neutral-700 border flex-1 flex flex-row items-center justify-center gap-2">
            <Image
              src={"/images/client_logo_6.png"}
              height={250}
              width={250}
              objectFit="cover"
              alt=""
            />
            <p className="text-neutral-200 text-center text-lg mt-2">HD Group Mangalore</p>
          </div>
          <div className="min-h-[250px] w-full md:min-w-[400px] lg:min-w-[500px] bg-neutral-800 border-neutral-700 border flex-1 flex flex-row items-center justify-center gap-2">
            <Image
              src={"/images/client_logo_3.png"}
              height={175}
              width={175}
              objectFit="cover"
              alt=""
            />
            <p className="text-neutral-200 text-center text-lg mt-2">Ranpise Digitech</p>
          </div>
          <div className="min-h-[250px] w-full md:min-w-[400px] lg:min-w-[500px] bg-neutral-800 border-neutral-700 border flex-1 flex flex-row items-center justify-center gap-2">
            <Image
              src={"/images/client_logo_7.png"}
              height={250}
              width={250}
              objectFit="cover"
              alt=""
            />
            <p className="text-neutral-200 text-center text-lg mt-2">Qodes Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnersComponent;
