import Image from "next/image";
import React from "react";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

type Props = {};

const TrainingFeaturesComponent = (props: Props) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[85%] flex flex-col-reverse lg:flex-row justify-center items-end gap-8 lg:gap-16">
        <div className="flex-1 w-full">
          <div className="relative w-full lg:min-w-[300px] min-h-[400px] lg:min-h-[500px]">
            <Image
              src={"/images/training-features-bg.jpg"}
              alt="training features background image"
              height={0}
              width={0}
              unoptimized
              unselectable="on"
              draggable={false}
              quality={100}
              objectFit="cover"
              className="h-full w-full absolute bottom-0 left-0 right-0 top-0 z-10 px-4"
            />
            <div className="absolute z-1 w-full h-[80%] bottom-0 bg-neutral-700 rounded-2xl"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 items-start justify-center">
          <p className="text-4xl lg:text-5xl text-start font-semibold text-wrap lg:text-nowrap capitalize text-neutral-200">
            Professional & lifelong <br/>
            <span className="gradient-text">learning comes here</span>
          </p>
          <p className="text-base font-normal text-wrap line-clamp-4 lg:line-clamp-3 truncate text-neutral-400 leading-7 text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nemo culpa sunt eius id possimus totam aliquam recusandae! Facere magni mollitia non dolores dolore nesciunt quae tenetur amet officia exercitationem.
          </p>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <div className="w-[60%] flex flex-row items-center justify-start gap-2 border border-neutral-500 shadow-md shadow-neutral-500 p-2">
                <PsychologyOutlinedIcon fontSize="medium" className="text-primary-pink"/>
                <p className="line-clamp-1 text-neutral-300 font-normal text-base lg:text-lg">Lorem ipsum dolor sit.</p>
            </div>      
            <div className="w-[60%] flex flex-row items-center justify-start gap-2 border border-neutral-500 shadow-md shadow-neutral-500 p-2">
                <PsychologyOutlinedIcon fontSize="medium" className="text-primary-pink"/>
                <p className="line-clamp-1 text-neutral-300 font-normal text-base lg:text-lg">Lorem ipsum dolor sit.</p>
            </div>      
            <div className="w-[60%] flex flex-row items-center justify-start gap-2 border border-neutral-500 shadow-md shadow-neutral-500 p-2">
                <PsychologyOutlinedIcon fontSize="medium" className="text-primary-pink"/>
                <p className="line-clamp-1 text-neutral-300 font-normal text-base lg:text-lg">Lorem ipsum dolor sit.</p>
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFeaturesComponent;
