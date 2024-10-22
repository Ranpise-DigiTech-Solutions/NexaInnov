import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PublicIcon from "@mui/icons-material/Public";

type Props = {};

const OurMissionComponent = (props: Props) => {
  return (
    <div className="min-h-fit w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[85%] h-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-wrap text-neutral-200">
            Interested in our <br /> mission ?
          </p>
          <p className="w-[90%] md:w-[75%] lg:w-[55%] text-neutral-500 text-sm lg:text-base leading-6 lg:leading-7 text-center">
            Passionate about making a difference? Join us on our mission to
            drive innovation, inclusivity, and excellence. Be part of a team
            that values creativity, collaboration, and a shared vision for a
            better future.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4">
            <PeopleAltIcon
              fontSize="medium"
              className="w-full self-center text-primary-pink"
            />
            <p className="text-neutral-200 font-bold text-xl">
              We put people first
            </p>
            <p className="text-neutral-400 font-normal text-sm md:text-base line-clamp-3 lg:line-clamp-2 text-wrap">
              Our people are our greatest asset. We prioritize the well-being
              and development of our team members, creating a supportive culture
              that values individual contributions and promotes work-life
              balance.
            </p>
          </div>
          <div className="flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4">
            <RocketLaunchIcon
              fontSize="medium"
              className="w-full text-primary-pink self-center"
            />
            <p className="text-neutral-200 font-bold text-xl">
              We&apos;re always growing
            </p>
            <p className="text-neutral-400 font-normal text-sm md:text-base line-clamp-3 lg:line-clamp-2 text-wrap">
              At our company, growth is at the heart of everything we do. We
              embrace change and continuously strive to improve, ensuring that
              both our team and our solutions evolve with the times
            </p>
          </div>
          <div className="flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4">
            <PublicIcon
              fontSize="medium"
              className="w-full self-center text-primary-pink"
            />
            <p className="text-neutral-200 font-bold text-xl">
              We&apos;re accessible
            </p>
            <p className="text-neutral-400 font-normal text-sm md:text-base line-clamp-3 lg:line-clamp-2 text-wrap">
              We believe in open communication and inclusivity. Our doors are
              always open, making it easy for everyone to share ideas, ask
              questions, and connect, fostering a collaborative environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionComponent;
