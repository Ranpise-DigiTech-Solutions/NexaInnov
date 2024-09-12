import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-primary-black">
      <NavbarComponent />
      <div className="min-h-svh w-full flex lg:flex-row flex-col-reverse flex-wrap items-center justify-center">
        <div className="lg:flex-[55%] lg:h-full w-[95%] flex-1 flex flex-col items-center justify-center gap-12 py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="w-full text-4xl text-wrap font-bold text-neutral-200 text-center">
            Page Not Found
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <p className="w-full text-start text-xl text-neutral-400">
              Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <p className="w-full text-lg leading-7 text-neutral-400 text-start">
              It seems you&apos;ve ventured off the beaten path. But don&apos;t
              worry, we&apos;re here to guide you back on track. Whether the
              link was broken, the page was moved, or you just mistyped the{" "}
              <span className="text-secondary-blue transform transition-all duration-300 cursor-pointer hover:underline underline-offset-2">
                URL
              </span>
              , we&apos;ve got you covered.
            </p>
            <p className="font-bold text-2xl w-full text-start text-neutral-200">
              What to do next:
            </p>
            <div className="w-full flex flex-col items-start justify-center px-[2rem] gap-2">
              <p className="text-neutral-400 text-lg text-start">
                1. Check the URL for any typos.
              </p>
              <p className="text-neutral-400 text-lg text-start">
                2. Return to our{" "}
                <Link href={"/"}>
                  <span className="text-secondary-blue transform transition-all duration-300 cursor-pointer hover:underline underline-offset-2">
                    Homepage
                  </span>{" "}
                  and continue exploring.
                </Link>
              </p>
              <p className="text-neutral-400 text-lg text-start">
                3. Use the navigation menu to find what you&apos;re looking for.
              </p>
            </div>
            <p className="text-start w-full text-neutral-400 text-lg leading-7">
              If you still can&apos;t find what you&apos;re searching for, feel
              free to reach out to us at{" "}
              <span className="text-secondary-blue transform transition-all duration-300 cursor-pointer hover:underline underline-offset-2">
                support@nexainnov.com
              </span>
              . We&apos;re always here to help!
            </p>
          </div>
          <Link href={"/"}>
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <p className="w-full gradient-border-inner text-lg tracking-wide text-neutral-200 px-6 py-4 font-semibold">
                Back to home page
              </p>
            </Button>
          </Link>
        </div>
        <div className="lg:flex-[45%] lg:h-full flex-1 w-[95%]">
          <Image
            src={"/images/not-found.png"}
            alt=""
            objectFit="cover"
            height={700}
            width={700}
            unoptimized
            quality={100}
            draggable={false}
          />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default NotFoundPage;
