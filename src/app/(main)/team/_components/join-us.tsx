import { Button } from "@/components/ui/button";
import React from "react";
import Image from 'next/image';
import Link from "next/link";

type Props = {};

const JoinUsComponent = (props: Props) => {
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center">
      <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between lg:gap-4 gap-8 text-neutral-200">
        <div className="w-full lg:w-[55%] h-full flex flex-col items-center justify-center gap-8">
          <div className="w-full text-center text-3xl font-bold">
            Join Our Team
          </div>
          <div className="w-full text-center text-neutral-400 text-wrap line-clamp-4 leading-7 truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nesciunt omnis soluta exercitationem nam ea delectus eos ullam tenetur
            aliquam sunt, sit eaque, eius voluptate facere esse voluptatem
            aspernatur cum?
          </div>
          <Link href={"/careers"}>
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <p className="w-full gradient-border-inner text-md tracking-wide text-neutral-200 py-3 px-6 font-semibold">
                Apply Now
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-full lg:w-[45%] h-full flex items-center justify-center">
          <Image
            src="/images/our-team.png"
            alt="Join Us"
            unoptimized
            unselectable={"on"}
            draggable={false}
            quality={100}
            className="object-cover w-full h-full rounded-md"
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsComponent;
