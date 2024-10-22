import React from "react";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type Props = {};

const OurStoryComponent = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-[3rem]">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <p className="w-full text-base text-primary-pink text-center text-nowrap capitalize">
          Crafting Excellence
        </p>
        <p className="w-full text-3xl md:text-4xl lg:text-5xl text-center text-neutral-200 font-semibold capitalize">
          The NexaInnov&apos;s Journey story
        </p>
        <p className="w-full lg:w-[80%] text-center text-neutral-400 text-sm md:text-base text-wrap leading-6 lg:leading-7 lg:line-clamp-4">
          NexaInnov Solutions started in the year 2024 as a vision of
          Samadhan Ranpise and Ravindra Raghavan, as a passionate entrepreneurs
          driven by the desire to innovate in the IT industries. The company was
          founded with the aim to develop software products that simplify
          complex tasks and empower businesses to thrive in the digital age.
        </p>
      </div>
      <div className="w-full lg:w-[80%] min-h-screen rounded-3xl py-6 md:py-8 px-4 md:px-8 lg:px-12 bg-neutral-800 flex flex-col items-center justify-center gap-[2rem]">
        <div className="group w-full h-[450px] md:h-[250px] flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8 lg:gap-12 xl:gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-full md:w-[300px] lg:w-[350px] xl:w-[400px] h-[40%] md:h-full">
            <Image
              src={"/images/our_story_1.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4">
            <p className="text-xl md:text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">
              Inception Vision
            </p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate text-sm md:text-base">
              The journey of NexaInnov began with the goal of creating
              user-friendly solutions that cater to a broad range of industries.
              With a focus on innovation and quality, team NexaInnov set out to
              bridge the gap between traditional business processes and modern
              technology. The core belief that technology should be accessible
              and beneficial to all types of businesses became the guiding
              principle for the company.
            </p>
          </div>
        </div>
        <div className="group w-full h-[450px] md:h-[250px] flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-8 lg:gap-12 xl:gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-full md:w-[300px] lg:w-[350px] xl:w-[400px] h-[40%] md:h-full">
            <Image
              src={"/images/our_story_2.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4">
            <p className="text-xl md:text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">
              Expanding Horizons
            </p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate text-sm md:text-base">
              As NexaInnov grew, so did its portfolio. The company branched out
              into various sectors, developing specialized products to meet
              specific market needs. One of the flagship offerings,
              EventifyConnect, revolutionized the event planning industry by
              providing a comprehensive platform for booking various services related to an event. This
              all-in-one solution enabled users to manage their events
              efficiently, using a real-time availability calendar.
              {/* Simultaneously, NexaInnov ventured into the website building space
              with DragBlitz, a platform designed to democratize website
              creation. DragBlitz empowered users to build websites without any
              coding or design skills, providing intuitive drag-and-drop tools
              and integrated storage solutions. The inclusion of a Kanban board
              feature further enhanced user experience by facilitating activity
              scheduling. */}
            </p>
          </div>
        </div>
        <div className="group w-full h-[450px] md:h-[250px] flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8 lg:gap-12 xl:gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-full md:w-[300px] lg:w-[350px] xl:w-[400px] h-[40%] md:h-full">
            <Image
              src={"/images/our_story_3.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4">
            <p className="text-xl md:text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">
              Commitment to Learning and Growth
            </p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate text-sm md:text-base">
              Beyond product development, NexaInnov Solutions has committed
              itself to education and training, reflecting our founder’s belief
              in the power of knowledge. The company offers specialized training
              programs in AS/400 (IBM i) and open systems, catering to both
              online and in-person learners. This focus on training ensures that
              NexaInnov not only delivers innovative solutions but also nurtures
              the next generation of IT professionals.
            </p>
          </div>
        </div>
        <div className="group w-full h-[450px] md:h-[250px] flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-8 lg:gap-12 xl:gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-full md:w-[300px] lg:w-[350px] xl:w-[400px] h-[40%] md:h-full">
            <Image
              src={"/images/our_story_4.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4">
            <p className="text-xl md:text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">
              Looking Ahead
            </p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate text-sm md:text-base">
              Today, NexaInnov Solutions stands as a beacon of innovation and
              excellence in the IT sector. The journey, marked by perseverance,
              creativity, and a commitment to customer satisfaction, has
              positioned NexaInnov as a trusted partner for businesses looking
              to embrace technology. As the company continues to grow and
              evolve, it remains dedicated to its mission of making technology
              accessible, effective, and transformative for all.
               {/* NexaInnov&#39;s
              journey is a testament to the power of vision, the importance of
              adaptability, and the impact of technological innovation in
              driving success. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryComponent;
