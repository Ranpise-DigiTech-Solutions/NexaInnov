import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const GetStartedComponent = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "w-[60%] self-center flex flex-col justify-center items-center gap-[3rem] text-wrap",
        className ?? className
      )}
    >
      <div className="text-6xl text-neutral-200 flex flex-col justify-center items-center gap-2 font-bold">
        <p>Next-gen innovation company</p>
        <p className="gradient-text">for modern customers</p>
      </div>
      <div className="text-neutral-500 text-2xl flex flex-col justify-center items-center gap-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Quo rerum vel iste illum veritatis repudiandae</p>
      </div>
      <div className="flex flex-row items-center justify-between p-x-2 w-full mt-6">
        <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <p className="w-full gradient-border-inner text-xl tracking-wide text-neutral-200">
            Get Started
          </p>
        </Button>
        <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 p-8 rounded-full">
          <p className="w-full h-full text-xl tracking-wide text-neutral-200 rounded-full flex items-center justify-center">
            Browse Features
          </p>
        </Button>
      </div>
    </div>
  );
};

export default GetStartedComponent;
