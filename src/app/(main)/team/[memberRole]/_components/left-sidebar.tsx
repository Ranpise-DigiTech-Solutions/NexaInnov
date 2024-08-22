import React from 'react'
import { userActivity } from "@/lib/constants";
import clsx from "clsx";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string
}

const LeftSideBarComponent = ({ className }: Props) => {

  return (
    <div className={twMerge("h-full flex flex-col items-center justify-center gap-8 px-[2rem]", className)}>
        <div className="w-full max-h-[500px] flex items-center justify-center">
          <Image
            src={"/images/avatar_2.png"}
            alt="CEO Profile Pic"
            height={0}
            width={350}
            className="inline-block rounded-md self-center"
            unoptimized
            quality={100}
            draggable={false}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-row items-center justify-center gap-2">
            <p className="font-extrabold text-neutral-500 text-sm uppercase">
              activity
            </p>
            <p className="h-[1px] flex-1 bg-neutral-600"></p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            {
              userActivity.map((activity) => (
                <div key={activity.id} className="group w-full max-h-[125px] bg-neutral-800 flex flex-col items-center gap-2 justify-center p-4 transition-all transform duration-500 hover:max-h-[200px] overflow-clip cursor-pointer rounded-lg">
                    <div className="w-full flex flex-row items-center justify-between gap-2">
                        <p className="text-xl font-semibold text-neutral-200 transform transition-all duration-300 group-hover:text-primary-pink">
                            {activity.heading}
                        </p>
                        <div className={clsx("bg-green-tag text-neutral-200 py-1 px-2 rounded-full text-sm font-bold", activity.tag === "New" ? "bg-green-tag" : "bg-orange-tag" )}>
                            {activity.tag}
                        </div>
                    </div>
                    <div className="w-full text-start leading-6 text-neutral-500 line-clamp-2 truncate text-wrap group-hover:line-clamp-4  transition-all transform duration-300">
                     {activity.description}
                    </div>
                    <div className="hidden w-full group-hover:flex items-center justify-end gap-2 transition-all transform duration-500">
                      <Heart className="transform transition-all duration-300 text-neutral-400 hover:text-primary-pink" size={22} />
                      <Share2 className="transform transition-all duration-300 text-neutral-400 hover:text-primary-pink" size={22} />
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default LeftSideBarComponent