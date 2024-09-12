import React from "react";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PeopleIcon from "@mui/icons-material/People";

type Props = {};

const OurValuesComponent = (props: Props) => {
  return (
    <div
      className="w-full min-h-fit flex items-center justify-center"
      id="our-values"
    >
      <div className="w-full lg:w-[80%] flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="w-full text-center text-4xl lg:text-5xl font-semibold text-neutral-200 capitalize">
            Our Core Values
          </p>
          <p className="w-full lg:w-[60%] text-center text-base lg:text-lg font-neutral text-no-wrap text-neutral-500 leading-7">
            Our values shape the culture of our organization and define the{" "}
            <br /> character of our company
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <div className="w-full flex flex-row items-center justify-center gap-6 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ElectricBoltOutlinedIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Customized Solutions
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Tailor-made IT solutions that are designed to fit the specific
                needs and challenges of each client, ensuring maximum efficiency
                and effectiveness.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <AccessTimeFilledIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Cutting-Edge Technology
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Utilization of the latest technologies, such as artificial
                intelligence, machine learning, blockchain, and cloud computing,
                to provide forward-thinking solutions that drive business
                growth.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Scalability
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Solutions that are built to grow with the client&#39;s business,
                offering scalability to handle increased demand or expansion
                seamlessly.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Robust Security
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Implementation of advanced security measures to protect
                sensitive data and ensure compliance with industry regulations,
                reducing the risk of cyber threats.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Agile Development
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Use of agile methodologies to deliver solutions quickly and
                efficiently, allowing for continuous feedback, iteration, and
                improvement.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                User-Centric Design
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Focus on creating intuitive, user-friendly interfaces that
                enhance user experience and improve productivity.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Data-Driven Insights
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Leveraging big data analytics to provide actionable insights,
                enabling clients to make informed decisions based on real-time
                data.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Integration Capabilities
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Seamless integration with existing systems and third-party
                applications, ensuring that new solutions work harmoniously
                within the client&#39;s current IT ecosystem.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8">
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <ArrowOutwardIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                24/7 Support & Maintenance
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Comprehensive support services that include regular maintenance,
                troubleshooting, and updates to keep systems running smoothly at
                all times.
              </p>
            </div>
            <div className="group relative w-[50%] h-[200px] bg-neutral-700 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col items-center justify-center gap-4 transform transition-all duration-500 hover:translate-y-4">
              <div className="absolute top-[-1.5rem]">
                <PeopleIcon className="icon-gradient rounded-none rounded-tl-[1rem] rounded-br-[1rem] h-[45px] w-[45px]" />
              </div>
              <p className="w-[90%] text-xl lg:text-2xl font-bold text-neutral-300 text-center transform transition-all duration-300  group-hover:text-primary-pink">
                Innovation and R&amp;D
              </p>
              <p className="w-[80%] text-wrap text-neutral-400 leading-6 lg:leading-7 line-clamp-3 lg:line-clamp-2 truncate text-center">
                Continuous investment in research and development to stay ahead
                of industry trends and introduce innovative solutions that
                provide clients with a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesComponent;
