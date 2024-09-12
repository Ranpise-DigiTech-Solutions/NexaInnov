import React from "react";

type Props = {};

const FactNumbersComponent = (props: Props) => {
  return (
    <div className="min-h-[600px] lg:min-h-[500px] bg-neutral-700 w-full flex items-end justify-center pb-[5rem]">
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-start justify-center gap-8">
        <div className="flex-1 flex flex-col items-start justify-center gap-2">
          <p className="text-sm lg:text-base text-secondary-pink font-normal uppercase">
            lorem academy
          </p>
          <p className="text-neutral-200 text-4xl lg:text-5xl font-semibold text-wrap lg:line-clamp-3 xl:line-clamp-2">
            How about some fact numbers about us ?
          </p>
        </div>
        <div className="flex-1 flex flex-col items-stretch justify-center gap-8">
          <div className="flex flex-row items-start justify-between gap-8">
            <div className="flex-1 flex flex-col items-start lg:items-center justify-center gap-1">
              <p className="uppercase text-3xl lg:text-4xl font-semibold text-secondary-pink">
                5k
              </p>
              <p className="text-sm lg:text-base text-wrap text-start lg:text-center text-neutral-400">
                Client Satisfied
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start lg:items-center justify-center gap-1">
              <p className="uppercase text-3xl lg:text-4xl font-semibold text-secondary-pink">
                +20
              </p>
              <p className="text-sm lg:text-base text-wrap text-start lg:text-center text-neutral-400">
                lorem ipsium dolor
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start lg:items-center justify-center gap-1">
              <p className="uppercase text-3xl lg:text-4xl font-semibold text-secondary-pink">
                +10
              </p>
              <p className="text-sm lg:text-base text-wrap text-start lg:text-center text-neutral-400">
                lorem ipsium
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start lg:items-center justify-center gap-1">
              <p className="uppercase text-3xl lg:text-4xl font-semibold text-secondary-pink">
                5k
              </p>
              <p className="text-sm lg:text-base text-wrap text-start lg:text-center text-neutral-400">
                Client Satisfied
              </p>
            </div>
          </div>
          <div className="flex-1 text-wrap text-neutral-300 line-clamp-4 lg:line-clamp-3 leading-7 font-normal text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            accusamus soluta nulla cupiditate aliquam laboriosam, consequuntur
            debitis sequi expedita voluptatem sit itaque quisquam corporis eum
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactNumbersComponent;
