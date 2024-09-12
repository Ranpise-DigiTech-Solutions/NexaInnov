import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Button } from "@/components/ui/button";

type Props = {};

const CourseListComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[85%] h-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <p className="text-sm lg:text-base text-primary-pink font-semibold tracking-widest uppercase">
            courses
          </p>
          <p className="text-4xl lg:text-5xl text-neutral-200 font-bold capitalize">
            popular courses
          </p>
          <p className="text-neutral-400 text-wrap font-normal text-base lg:text-lg lg:line-clamp-1 line-clamp-3 truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            placeat?
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:gap-4 gap-6">
          <p className="w-full text-end text-base underline underline-offset-2 text-neutral-300 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            View all courses
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full flex flex-row items-center justify-center gap-4"
          >
            <CarouselPrevious className="hidden lg:inline-block text-neutral-200 transform transition-all duration-300 hover:text-primary-pink h-8 w-8 hover:border-primary-pink" />
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="min-h-[400px] min-w-[300px] p-1 bg-neutral-800 flex flex-col items-center justify-center overflow-clip rounded-3xl">
                    <div className="relative flex-1 min-h-[200px] w-full rounded-t-3xl overflow-hidden">
                      <Image
                        src={"/images/courses_1.jpg"}
                        alt="Course 1"
                        fill
                        unoptimized
                        quality={100}
                        draggable="false"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 w-full p-2 flex flex-col items-center justify-center gap-2">
                      <p className="text-xl w-full font-semibold text-wrap line-clamp-2 truncate capitalize text-neutral-200">
                        The complete 2024 web development bootcamp
                      </p>
                      <p className="w-full text-base font-normal line-clamp-1 truncate text-neutral-400">
                        Dr. Angela Yu, Developer and Lead Architect
                      </p>
                      <div className="w-full flex items-center justify-start gap-2">
                        <p className="font-semibold text-base text-neutral-300">
                          4.7
                        </p>
                        <div className="flex items-center justify-center">
                            <StarOutlinedIcon className="text-yellow-500"/>
                            <StarOutlinedIcon className="text-yellow-500"/>
                            <StarOutlinedIcon className="text-yellow-500"/>
                            <StarOutlinedIcon className="text-yellow-500"/>
                            <StarOutlinedIcon className="text-neutral-300"/>
                        </div>
                        <p className="text-base font-neutral text-neutral-300">(398, 530)</p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <p className="font-bold text-base text-neutral-300">&#8377;399</p>
                            <p className="font-normal text-base line-through text-neutral-400">
                            &#8377;3,099
                            </p>
                        </div>
                        <Button className="bg-secondary-pink text-neutral-200 font-bold transform transition-all duration-500 hover:bg-primary-pink">
                            Enroll now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden lg:inline-block text-neutral-200 transform transition-all duration-300 hover:text-primary-pink h-8 w-8 hover:border-primary-pink" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CourseListComponent;
