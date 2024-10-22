import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ourFeatures } from "@/lib/constants";

type Props = {
  className?: string;
};

const FeaturesListComponent = ({ className }: Props) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full absolute top-0 right-0 left-0 h-[75%] bg-secondary-purple-dark z-10"></div>
      <div className="w-[80%] h-full py-[2rem] z-20">
        <div className="w-full flex flex-col items-center justify-center gap-[4rem]">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <p className="text-5xl text-neutral-200 font-bold">Features</p>
            <p className="text-lg text-neutral-400 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              dolores consectetur nesciunt ipsum officia perspiciatis.
            </p>
          </div>
          <div className="w-full flex-1 bg-neutral-800 flex flex-col items-center justify-center gap-6 p-[4rem]">
            <p className="text-3xl font-semibold text-neutral-200">
              Our Features
            </p>
            <div className="w-full flex flex-row items-center justify-center lg:justify-between flex-wrap gap-8">
              {ourFeatures.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] min-h-[200px] flex-1 flex flex-col items-center justify-center gap-4"
                >
                  <CalendarMonthOutlinedIcon
                    className="text-primary-pink"
                    fontSize="large"
                  />
                  <p className="text-lg text-neutral-200">{item.heading}</p>
                  <p className="line-clamp-3 lg:line-clamp-4 truncate text-neutral-500 text-wrap text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesListComponent;
