import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clientReviews } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

const ClientStoriesComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-[1rem]">
          <p className="w-full text-center text-base text-primary-pink">
            About Us
          </p>
          <p className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-no-wrap capitalize text-neutral-200 lg:line-clamp-1">
            our client success stories
          </p>
          <p className="w-full text-center text-sm md:text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-6 md:leading-7">
            Discover how our innovative solutions have empowered businesses to
            achieve their goals. From seamless event management to stunning
            digital transformations, explore real-world success stories from our
            valued clients. Their achievements are a testament to the quality
            and impact of our services.
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-wrap gap-8">
          {clientReviews?.map((review, index) => (
            <div
              key={index}
              className="group flex-1 min-h-[275px] min-w-[300px] bg-neutral-800 shadow-md shadow-secondary-purple p-4 flex flex-col items-start justify-between gap-2 cursor-pointer transform transition-all duration-500 hover:translate-y-[-1rem]"
            >
              <p className="w-full text-xl md:text-2xl font-semibold text-neutral-200 line-clamp-1 truncate capitalize transform transition-all duration-500 group-hover:text-primary-pink">
                {review.heading}
              </p>
              <p className="w-full text-neutral-400 text-sm md:text-base font-normal line-clamp-5 truncate text-wrap text-start leading-6">
                {review.content}
              </p>
              <div className="w-full flex flex-row items-center justify-start gap-4">
                <Avatar className="w-[2rem] h-[2rem]">
                  <AvatarImage
                    src={review.profilePic}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex flex-col items-start justify-center">
                  <p className="capitalize font-semibold text-base md:text-lg text-neutral-300 text-wrap">
                    {review.author}
                  </p>
                  <p className="text-neutral-500 capitalize line-clamp-1 truncate text-sm md:text-base text-wrap">
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*<Button className="group flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <p className="w-full gradient-border-inner text-base md:text-lg font-bold tracking-wide text-neutral-200 px-6 py-3 flex flex-row items-center justify-center gap-2">
            <span>View All</span>
            <ArrowRight
              size={18}
              className="transform transition-all duration-300 group-hover:translate-x-2"
            />
          </p>
        </Button>*/}
      </div>
    </div>
  );
};

export default ClientStoriesComponent;
