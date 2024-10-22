import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {};

const OpenPositionsComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[85%] h-full flex flex-col items-start justify-center gap-8 md:gap-12">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <p className="tracking-widest uppercase text-sm lg:text-base font-semibold text-primary-pink">
            career
          </p>
          <p className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200">
            Open positions
          </p>
        </div>
        <div className="w-full py-2 flex flex-row items-center justify-start gap-4 overflow-x-auto">
          <p className="text-xs text-nowrap md:text-base font-normal text-neutral-200 bg-primary-pink rounded-full px-4 py-2 border border-neutral-200 capitalize cursor-pointer transition-all transform duration-500 hover:bg-secondary-pink hover:font-bold">
            View all
          </p>
          <p className="text-xs md:text-base text-nowrap font-normal text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Development
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Design
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Marketing
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Customer Service
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Operations
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Finance
          </p>
          <p className="text-xs md:text-base font-normal text-nowrap text-primary-pink px-4 py-2 border border-primary-pink rounded-full cursor-pointer transform transition-all duration-500 hover:text-neutral-200 hover:border-neutral-200 hover:scale-105 hover:font-bold">
            Management
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8">
          <Link
            href={"https://forms.gle/7NA3doP8uGR9J4xEA"}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-[45%] min-h-[200px] md:min-h-[250px] bg-neutral-800 rounded-2xl py-4 px-6 flex flex-col items-center justify-center gap-4 md:gap-6 cursor-pointer transform transition-transform duration-500 hover:translate-y-2"
          >
            <div className="w-full flex flex-col items-start justify-center gap-4">
              <p className="w-full text-start text-xl md:text-2xl font-semibold text-neutral-200 transform transition-all duration-500 group-hover:text-primary-pink">
                Software Developer Intern
              </p>
              <p className="w-full text-neutral-400 line-clamp-3 md:line-clamp-2 truncate text-sm md:text-base leading-6 md:leading-7 font-normal text-wrap text-start">
                We&apos;re looking for a talented interns with strong experience
                in designing user interfaces for digital products.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="w-full flex flex-row items-center justify-between gap-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-1">
                  <LocationOnIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300">Remote</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <WatchLaterIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300 text-nowrap">Part time</p>
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-1">
                <p className="text-sm md:text-base font-normal text-neutral-300 text-nowrap">
                  Apply now
                </p>
                <ArrowUpRight className="text-neutral-300 w-4 h-4 md:w-6 md:h-6 transform transition-all duration-500 group-hover:-translate-y-1" />
                <div className="absolute h-0.5 w-0 -bottom-1 left-0 right-0 bg-gradient transform transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          </Link>
          <Link
            href={"https://forms.gle/7NA3doP8uGR9J4xEA"}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-[45%] min-h-[200px] md:min-h-[250px] bg-neutral-800 rounded-2xl py-4 px-6 flex flex-col items-center justify-center gap-4 md:gap-6 cursor-pointer transform transition-transform duration-500 hover:translate-y-2"
          >
            <div className="w-full flex flex-col items-start justify-center gap-4">
              <p className="w-full text-start text-xl md:text-2xl font-semibold text-neutral-200 transform transition-all duration-500 group-hover:text-primary-pink">
                Machine Learning Intern
              </p>
              <p className="w-full text-neutral-400 line-clamp-3 md:line-clamp-2 truncate text-sm md:text-base leading-6 md:leading-7 font-normal text-wrap text-start">
              We&apos;re looking for a motivated Machine Learning Intern with experience in data analysis, model development, and algorithm optimization.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="w-full flex flex-row items-center justify-between gap-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-1">
                  <LocationOnIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300">Remote</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <WatchLaterIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300 text-nowrap">Part time</p>
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-1">
                <p className="text-sm md:text-base font-normal text-neutral-300 text-nowrap">
                  Apply now
                </p>
                <ArrowUpRight className="text-neutral-300 w-4 h-4 md:w-6 md:h-6 transform transition-all duration-500 group-hover:-translate-y-1" />
                <div className="absolute h-0.5 w-0 -bottom-1 left-0 right-0 bg-gradient transform transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          </Link>
          <Link
            href={"mailto:jobs@nexainnov.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-[45%] min-h-[200px] md:min-h-[250px] bg-neutral-800 rounded-2xl py-4 px-6 flex flex-col items-center justify-center gap-4 md:gap-6 cursor-pointer transform transition-transform duration-500 hover:translate-y-2"
          >
            <div className="w-full flex flex-col items-start justify-center gap-4">
              <p className="w-full text-start text-xl md:text-2xl font-semibold text-neutral-200 transform transition-all duration-500 group-hover:text-primary-pink">
                Technical Lead
              </p>
              <p className="w-full text-neutral-400 line-clamp-3 md:line-clamp-2 truncate text-sm md:text-base leading-6 md:leading-7 font-normal text-wrap text-start">
              We&apos;re seeking a skilled Technical Lead with strong experience in leading development teams and building scalable, high-quality software solutions.
              </p>
            </div>
            <div className="line-divider"></div>
            <div className="w-full flex flex-row items-center justify-between gap-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-1">
                  <LocationOnIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300">Remote</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <WatchLaterIcon className="!h-5 !w-5 md:h-6 md:w-6 text-primary-pink" />
                  <p className="text-sm text-neutral-300 text-nowrap">Part time</p>
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-1">
                <p className="text-sm md:text-base font-normal text-neutral-300 text-nowrap">
                  Apply now
                </p>
                <ArrowUpRight className="text-neutral-300 w-4 h-4 md:w-6 md:h-6 transform transition-all duration-500 group-hover:-translate-y-1" />
                <div className="absolute h-0.5 w-0 -bottom-1 left-0 right-0 bg-gradient transform transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenPositionsComponent;
