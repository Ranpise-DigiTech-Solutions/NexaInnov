import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const ArticlesComponent = (props: Props) => {
  return (
    <div className="min-h-screen text-neutral-200 w-full flex items-center justify-center">
      <div className="w-[75%] h-full flex flex-col gap-[3rem] ">
        <div className="flex flex-row items-center justify-between">
          <div className="text-5xl font-bold">Latest articles</div>
          <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 p-8 rounded-full">
            <p className="w-full h-full text-xl tracking-wide text-neutral-200 rounded-full flex items-center justify-center">
              Browse all articles
            </p>
          </Button>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="group h-[500px] w-[47%] bg-neutral-800 cursor-pointer rounded-3xl transition-all transform duration-300 hover:translate-y-2 link-underline-gradient-container">
            <div className="h-[60%] w-full overflow-hidden flex items-center justify-center rounded-t-3xl">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
                height={100}
                width={100}
                quality={100}
                unoptimized
                layout="fixed"
                alt="article cover image"
                className="h-full w-full object-cover transition-all transform duration-300 group-hover:scale-105 group-hover:rounded-t-3xl rounded-t-3xl"
              />
            </div>
            <div className="w-full h-[40%] px-4 py-6 flex flex-col items-center justify-center gap-6">
              <div className="w-full self-start text-2xl font-bold truncate translate-all transform duration-300 group-hover:text-primary-pink">
                What is Initial Public Offering (IPO)?
              </div>
              <div className="w-full flex items-center gap-4 justify-start text-neutral-400">
                <div className="flex items-center gap-2 justify-start">
                  <Calendar />
                  <p>September 1, 2002</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Clock />
                  <p>7 min read</p>
                </div>
              </div>
              <div className="w-full self-start flex items-center justify-start text-lg">
                <div className="relative link-underline-gradient-effect flex items-center gap-2">
                  <p className="font-bold">Read more</p>
                  <ArrowUpRight className="transition-all transform duration:300 group-hover:-translate-y-1"/>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-[500px] w-[47%] bg-neutral-800 cursor-pointer rounded-3xl transition-all transform duration-300 hover:translate-y-2 link-underline-gradient-container">
            <div className="h-[60%] w-full overflow-hidden flex items-center justify-center rounded-t-3xl">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
                height={100}
                width={100}
                quality={100}
                unoptimized
                layout="fixed"
                alt="article cover image"
                className="h-full w-full object-cover transition-all transform duration-300 group-hover:scale-105 group-hover:rounded-t-3xl rounded-t-3xl"
              />
            </div>
            <div className="w-full h-[40%] px-4 py-6 flex flex-col items-center justify-center gap-6">
              <div className="w-full self-start text-2xl font-bold truncate translate-all transform duration-300 group-hover:text-primary-pink">
                What is Initial Public Offering (IPO)?
              </div>
              <div className="w-full flex items-center gap-4 justify-start text-neutral-400">
                <div className="flex items-center gap-2 justify-start">
                  <Calendar />
                  <p>September 1, 2002</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Clock />
                  <p>7 min read</p>
                </div>
              </div>
              <div className="w-full self-start flex items-center justify-start text-lg">
                <div className="relative link-underline-gradient-effect flex items-center gap-2">
                  <p className="font-bold">Read more</p>
                  <ArrowUpRight className="transition-all transform duration:300 group-hover:-translate-y-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesComponent;
