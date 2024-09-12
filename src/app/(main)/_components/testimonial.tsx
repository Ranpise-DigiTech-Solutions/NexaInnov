"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonialData } from "@/lib/constants";

type Props = {};

const TestimonialComponent = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalTestimonialCount = useRef<number>(0);
  const [animation, setAnimation] = useState<string>("");

  useEffect(() => {
    totalTestimonialCount.current = testimonialData.length - 1;
  }, []);

  const handleLeftSwipe = () => {
    setAnimation("animate-swipeOutLeft");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalTestimonialCount.current : prevIndex - 1
      );
      setAnimation("animate-swipeInRight");
    }, 500);
  };

  const handleRightSwipe = () => {
    setAnimation("animate-swipeOutRight");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalTestimonialCount.current ? 0 : prevIndex + 1
      );
      setAnimation("animate-swipeInLeft");
    }, 500);
  };

  return (
    <div className="min-h-screen text-white w-full flex flex-col items-center justify-center gap-12">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full text-center text-4xl lg:text-5xl font-bold">
          What our clients say
        </div>
        <div className="w-[75%] md:w-[60%] lg:w-[50%] text-base text-center text-wrap text-neutral-400 leading-7">
          At NexaInnov Technologies, we take pride in delivering exceptional
          results and outstanding service. But don’t just take our word for
          it—here’s what our clients have to say about their experience working
          with us.&quot;
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-6">
        <div className="hidden flex-[15%] lg:flex items-center justify-center">
          <Button
            className="bg-neutral-700 rounded-full transition-all transform duration-300 hover:scale-105 py-7"
            onClick={handleLeftSwipe}
          >
            <ArrowLeft />
          </Button>
        </div>
        <div className="w-[90%] h-fit bg-neutral-800 rounded-3xl lg:p-[4rem] overflow-hidden">
          <div
            className={`h-full w-full p-4 md:px-8 lg:p-0 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between lg:gap-4 gap-6 inset-0 ${animation}`}
          >
            <div className="flex flex-col items-center lg:items-start justify-between gap-6 lg:gap-10 text-neutral-200">
              <div className="text-2xl font-bold">
                {testimonialData[currentIndex].heading}
              </div>
              <div className="w-full text-center lg:text-start text-neutral-400 leading-7 text-wrap">
                {testimonialData[currentIndex].description}
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-4">
                <div className="w-full flex flex-col lg:items-start items-center justify-center gap-2">
                  <div className="text-2xl font-bold">
                    {testimonialData[currentIndex].author}
                  </div>
                  <div className="text-neutral-500">
                    {testimonialData[currentIndex].designation}
                  </div>
                </div>
                <Image
                  src={testimonialData[currentIndex].companyLogo}
                  width={150}
                  height={150}
                  alt="company logo"
                />
              </div>
            </div>
            <Image
              alt="avatar"
              height={0}
              width={0}
              src={testimonialData[currentIndex].profilePic}
              unoptimized
              quality={100}
              className="h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] rounded-full p-2"
            />
          </div>
        </div>
        <div className="hidden flex-[15%] lg:flex items-center justify-center">
          <Button
            className="bg-neutral-700 rounded-full transition-all transform duration-300 hover:scale-105 py-7"
            onClick={handleRightSwipe}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
