"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const FAQComponent = (props: Props) => {
  const [faqTrigger, setFaqTrigger] = useState<{
    faq1: boolean;
    faq2: boolean;
    faq3: boolean;
    faq4: boolean;
    faq5: boolean;
  }>({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
  });

  const handleFaqTrigger = (key: keyof typeof faqTrigger, value: boolean) => {
    setFaqTrigger((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  console.log(faqTrigger);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-4xl font-bold text-center">
          Frequently Asked Questions
        </div>
        <div className="w-full text-center text-neutral-500 text-lg">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-[6rem]">
        <div className="w-[55%] py-[2rem] pl-[4rem] flex flex-col items-center justify-center gap-[2rem]">
          <div
            className={clsx(
              "group max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
              faqTrigger["faq1"] && "!max-h-[10rem]"
            )}
          >
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <p className="text-neutral-200 text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                Lorem, ipsum dolor ?
              </p>
              <Button
                className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                onClick={() => handleFaqTrigger("faq1", !faqTrigger['faq1'])}
              >
                <p className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                  <Plus size={20} />
                </p>
              </Button>
            </div>
             <div className={clsx("inline-block w-full text-wrap text-neutral-400 leading-6 truncate", !faqTrigger['faq1'] && "hidden")}>
             { " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet  consectetur,elit. Id Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ".slice(0, 250)}...
             <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">Read more</span>
            </div>
          </div>
          <div
            className={clsx(
              "group max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
              faqTrigger["faq2"] && "!max-h-[10rem]"
            )}
          >
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <p className="text-neutral-200 text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                Lorem, ipsum dolor ?
              </p>
              <Button
                className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                onClick={() => handleFaqTrigger("faq2", !faqTrigger['faq2'])}
              >
                <p className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                  <Plus size={20} />
                </p>
              </Button>
            </div>
             <div className={clsx("inline-block w-full text-wrap text-neutral-400 leading-6 truncate", !faqTrigger['faq2'] && "hidden")}>
             { " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet  consectetur,elit. Id Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ".slice(0, 250)}...
             <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">Read more</span>
            </div>
          </div>
          <div
            className={clsx(
              "group max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
              faqTrigger["faq3"] && "!max-h-[10rem]"
            )}
          >
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <p className="text-neutral-200 text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                Lorem, ipsum dolor ?
              </p>
              <Button
                className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                onClick={() => handleFaqTrigger("faq3", !faqTrigger['faq3'])}
              >
                <p className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                  <Plus size={20} />
                </p>
              </Button>
            </div>
             <div className={clsx("inline-block w-full text-wrap text-neutral-400 leading-6 truncate", !faqTrigger['faq3'] && "hidden")}>
             { " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet  consectetur,elit. Id Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ".slice(0, 250)}...
             <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">Read more</span>
            </div>
          </div>
          <div
            className={clsx(
              "group max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
              faqTrigger["faq4"] && "!max-h-[10rem]"
            )}
          >
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <p className="text-neutral-200 text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                Lorem, ipsum dolor ?
              </p>
              <Button
                className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                onClick={() => handleFaqTrigger("faq4", !faqTrigger['faq4'])}
              >
                <p className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                  <Plus size={20} />
                </p>
              </Button>
            </div>
             <div className={clsx("inline-block w-full text-wrap text-neutral-400 leading-6 truncate", !faqTrigger['faq4'] && "hidden")}>
             { " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet  consectetur,elit. Id Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ".slice(0, 250)}...
             <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">Read more</span>
            </div>
          </div>
          <div
            className={clsx(
              "group max-h-[4rem] w-full flex flex-col items-center justify-center gap-4 px-4 py-3 rounded-md bg-neutral-700 shadow-sm shadow-secondary-purple cursor-pointer transition-all transform duration-300 relative",
              faqTrigger["faq5"] && "!max-h-[10rem]"
            )}
          >
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <p className="text-neutral-200 text-lg font-semibold translate-all transform duration-300 group-hover:text-primary-pink">
                Lorem, ipsum dolor ?
              </p>
              <Button
                className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 p-0"
                onClick={() => handleFaqTrigger("faq5", !faqTrigger['faq5'])}
              >
                <p className="w-full gradient-border-inner before:bg-neutral-700 text-neutral-200 p-2">
                  <Plus size={20} />
                </p>
              </Button>
            </div>
             <div className={clsx("inline-block w-full text-wrap text-neutral-400 leading-6 truncate", !faqTrigger['faq5'] && "hidden")}>
             { " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet consectetur,elit. Id Lorem ipsum dolor sit amet  consectetur,elit. Id Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ".slice(0, 250)}...
             <span className="transition-all transform duration-300 text-neutral-200 hover:text-primary-light-blue px-2 underline underline-offset-4">Read more</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[4rem]">
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-110 p-0">
              <p className="w-full gradient-border-inner text-neutral-200 p-3">
                <ArrowLeft size={24} />
              </p>
            </Button>
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-110 p-0">
              <p className="w-full gradient-border-inner text-neutral-200 p-3">
                <ArrowRight size={24} />
              </p>
            </Button>
          </div>
        </div>
        <div className="w-[45%] py-[2rem] pr-[4rem] flex flex-col items-center justify-center gap-8">
          <div className="w-full h-[200px] flex items-center justify-center">
            <Image
              src={"/images/faq.png"}
              height={100}
              width={100}
              alt=""
              unoptimized
              className="w-full h-full object-contain self-center"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="w-full text-center text-2xl font-bold">
              Do You Have Any Question ?
            </div>
            <div className="w-full text-neutral-500 leading-7 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              quod recusandae quae nulla aliquid accusantium?
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-semibold text-neutral-300">
              Let us know
            </p>
            <Input
              placeholder="Type something..."
              type="text"
              name="faqQuery"
              className="w-full bg-neutral-600 transition-all transform duration-300 hover:bg-neutral-700"
            />
          </div>
          <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
            <p className="w-full gradient-border-inner text-lg tracking-wide text-neutral-200 py-2 px-6">
              Send
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
