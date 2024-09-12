import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

type Props = {};

const GetStartedComponent = (props: Props) => {
  return (
    <div className="min-h-fit pt-[3rem] pb-[15rem] lg:p-0 lg:min-h-screen w-full flex items-center justify-center">
      <div className="relative w-[90%] lg:w-[85%] h-full flex flex-col items-start justify-center gap-8 lg:gap-12">
        <div className="w-full text-wrap lg:line-clamp-2 text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-200 capitalize">
          <p className="text-nowrap">
            Increase your skills with 
          </p>
          <div className="w-full flex flex-row items-end justify-start gap-6">
            <p className="gradient-text text-nowrap">top instructors</p>
            <Image 
              src={"/images/man-hand-writing-open-book.jpg"}
              alt="man-hand-writing-open-book"
              width={0}
              height={0}
              unoptimized
              draggable={false}
              quality={100}
              className="max-h-[30px] min-w-[100px] md:max-h-[35px] md:min-w-[120px] lg:max-h-[45px] lg:min-w-[150px] rounded-full object-cover"
            />
          </div>  
        </div>
        <p className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[45%] lg:line-clamp-3 line-clamp-4 truncate text-wrap text-neutral-400 text-base lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          ingnam harum suscipit excepturi quae ratione, earum, laudantium est
          dolore minima aliquid accusantium.
        </p>
        <div className="w-fit">
          <Image
            src={"/images/training-certified-badge.png"}
            alt="certified badge"
            width={0}
            height={0}
            unoptimized
            quality={100}
            objectFit="fill"
            draggable={false}
            className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] lg:w-[150px] lg:h-[150px]"
          />
        </div>
        <div className="w-fit flex flex-row items-center justify-center gap-16">
          <div className="relative flex flex-row items-center justify-center gap-[-5]">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://i.pinimg.com/736x/88/c8/12/88c8125ad474ab695432ee5265866715.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="absolute left-7 h-10 w-10">
              <AvatarImage src="https://trickscity.com/wp-content/uploads/2016/11/Best-Zayn-Malik-Haircuts-Image-2016-For-Stylish-Boys-1.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="absolute left-14 h-10 w-10">
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPU6snloie_2mVOBoi7IQVMNfMBl7dHFrrvrcet5L0KSeQHGUhjYCEvU5uKEy35u49zrg&usqp=CAU" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="underline text-neutral-300 text-base font-normal underline-offset-4 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            See all trainers
          </div>
        </div>
        <div className="absolute top-[30rem] lg:top-[20rem] right-0 w-full lg:w-[70%] xl:w-[75%] h-fit">
            <div className="relative w-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] rounded-3xl overflow-hidden">
                <Image 
                    src={"/images/training-get-started-bg.jpg"}
                    alt="training get started bg"
                    fill
                    objectFit="cover"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedComponent;
