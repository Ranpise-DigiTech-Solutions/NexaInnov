import React from "react";
import Image from "next/image";

type Props = {};

const OurStoryComponent = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-[3rem]">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <p className="w-full text-base text-primary-pink text-center text-nowrap capitalize">
          Crafting Excellence
        </p>
        <p className="w-full text-5xl text-center text-neutral-200 font-semibold capitalize">
          The NexaInnov&apos;s Journey story
        </p>
        <p className="w-[80%] text-center text-neutral-400 text-base text-wrap leading-7 line-clamp-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          veniam vitae sequi! Quisquam aliquam velit mollitia aliquid numquam,
          adipisci qui aut quas voluptates eligendi, atque maiores! Voluptates
          ab molestias corporis facere sapiente a! Obcaecati exercitationem ex
          ad officia maiores delectus! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorem veniam vitae sequi! Quisquam aliquam velit
          mollitia aliquid numquam, adipisci qui aut quas voluptates eligendi,
          atque maiores! Volupta
        </p>
      </div>
      <div className="w-[80%] min-h-screen rounded-3xl py-8 px-12 bg-neutral-800 flex flex-col items-center justify-center gap-[2rem]">
        <div className="group w-full h-[250px] flex flex-row items-center justify-between gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-[400px] h-full">
            <Image
              src={"/images/our_story_pic_1.jpg"}
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
            <p className="text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">Inception Vision</p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              porro nulla iure nesciunt ab laudantium error voluptates, nobis
              quas eum debitis corporis. Amet qui, similique pariatur facere
              ullam debitis! Ratione, mollitia nisi voluptates illum qui
              recusandae culpa sequi inventore maxime id perspiciatis vero quis?
              At eveniet voluptates voluptatibus soluta corrupti.
            </p>
          </div>
        </div>
        <div className="group w-full h-[250px] flex flex-row-reverse items-center justify-between gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-[400px] h-full">
            <Image
              src={"/images/our_story_pic_1.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4 transform transition-all duration-500 group-hover:text-primary-pink">
            <p className="text-2xl font-bold">Inception Vision</p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              porro nulla iure nesciunt ab laudantium error voluptates, nobis
              quas eum debitis corporis. Amet qui, similique pariatur facere
              ullam debitis! Ratione, mollitia nisi voluptates illum qui
              recusandae culpa sequi inventore maxime id perspiciatis vero quis?
              At eveniet voluptates voluptatibus soluta corrupti.
            </p>
          </div>
        </div>
        <div className="group w-full h-[250px] flex flex-row items-center justify-between gap-16 transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-[400px] h-full">
            <Image
              src={"/images/our_story_pic_1.jpg"}
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
            <p className="text-2xl font-bold transform transition-all duration-500 group-hover:text-primary-pink">Inception Vision</p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              porro nulla iure nesciunt ab laudantium error voluptates, nobis
              quas eum debitis corporis. Amet qui, similique pariatur facere
              ullam debitis! Ratione, mollitia nisi voluptates illum qui
              recusandae culpa sequi inventore maxime id perspiciatis vero quis?
              At eveniet voluptates voluptatibus soluta corrupti.
            </p>
          </div>
        </div>
        <div className="group w-full h-[250px] flex flex-row-reverse items-center justify-between gap-16  transform transition-all duration-500 hover:scale-y-105">
          <div className="relative w-[400px] h-full">
            <Image
              src={"/images/our_story_pic_1.jpg"}
              fill
              objectFit="cover"
              alt="our story pic 1"
              unoptimized
              draggable={true}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4 transform transition-all duration-500 group-hover:text-primary-pink">
            <p className="text-2xl font-bold">Inception Vision</p>
            <p className="text-wrap text-neutral-400 leading-6 line-clamp-6 truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              porro nulla iure nesciunt ab laudantium error voluptates, nobis
              quas eum debitis corporis. Amet qui, similique pariatur facere
              ullam debitis! Ratione, mollitia nisi voluptates illum qui
              recusandae culpa sequi inventore maxime id perspiciatis vero quis?
              At eveniet voluptates voluptatibus soluta corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryComponent;
