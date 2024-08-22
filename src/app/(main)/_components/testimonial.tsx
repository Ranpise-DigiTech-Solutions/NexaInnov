"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
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
    setAnimation("swipeOutLeft")
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalTestimonialCount.current : prevIndex - 1
      );
      setAnimation("swipeInRight")
    }, 500);
  };

  const handleRightSwipe = () => {
    setAnimation("swipeOutRight")
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalTestimonialCount.current ? 0 : prevIndex + 1
      );
      setAnimation("swipeInLeft")
    }, 500);
  };

  return (
    <div className="min-h-screen text-white w-full flex flex-col items-center justify-center gap-8">
      <div className="w-full text-center text-5xl font-bold">
        What our clients say
      </div>
      <div className="w-[30%] text-center text-wrap text-neutral-400 leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod ipsa
        veniam reiciendis illum culpa nesciunt
      </div>
      <div className="w-full flex items-center justify-center gap-6">
        <div className="flex-[15%] flex items-center justify-center">
          <Button
            className="bg-neutral-700 rounded-full transition-all transform duration-300 hover:scale-105 py-7"
            onClick={handleLeftSwipe}
          >
            <ArrowLeft />
          </Button>
        </div>
        <div className="flex-[70%] h-[30em] bg-neutral-800 rounded-3xl p-[4rem]">
          <div className={`h-full w-full flex flex-row items-center justify-between gap-4 inset-0 ${animation ? `animate-${animation}` : ''}`}>
            <div className="flex flex-col items-start justify-between gap-10 text-neutral-200">
              <div className="text-2xl font-bold">
                {testimonialData[currentIndex].heading}
              </div>
              <div className="text-neutral-400 leading-7 text-wrap">
                {testimonialData[currentIndex].description}
              </div>
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex flex-col items-start justify-center gap-2">
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
              height={350}
              width={350}
              src={testimonialData[currentIndex].profilePic}
              className="rounded-full p-2"
            />
          </div>
        </div>
        <div className="flex-[15%] flex items-center justify-center">
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
