import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const CustomerSupportComponent = (props: Props) => {
  return (
    <div className="min-h-min w-full flex items-center justify-center mt-[5rem]">
      <div className="relative w-[90%] md:w-[80%] min-h-[250px] flex flex-col lg:flex-row flex-wrap items-center justify-end bg-gradient px-[1rem] lg:px-[2rem] rounded-3xl">
        <Image
          src={"/images/customer-care-girl.png"}
          height={0}
          width={0}
          alt="Customer Care Girl"
          quality={100}
          unoptimized
          className="absolute bottom-60 md:bottom-52 lg:bottom-0 lg:left-0 h-[250px] w-[350px] md:h-[300px] md:w-[500px] lg:h-[375px] lg:w-[475px] xl:h-[400px] xl:w-[550px]"
        />
        <div className="w-full lg:w-[40%] xl:w-[50%] flex flex-col items-center justify-center bg-transparent gap-6 mt-[10rem] md:mt-[12rem] lg:m-0 py-[2rem] lg:p-0">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-3xl font-extrabold capitalize line-clamp-1 text-nowrap text-slate-900">
                    big goals? bring it on.
                </p>
                <p className="text-center text-lg line-clamp-2 text-wrap text-slate-700 font-semibold">
                    We&apos;d love to hear from you and discuss how we can help.
                </p>
            </div>
          <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 px-6 py-6 rounded-full">
            <p className="w-full h-full text-base tracking-wide text-neutral-200 rounded-full flex items-center justify-center capitalize font-normal">
              Chat with an expert
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportComponent;
