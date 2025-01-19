
import React from "react";
import TeamMembersComponent from "./_components/team-members";
import JoinUsComponent from "./_components/join-us";

type Props = {};

const TeamPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
        <TeamMembersComponent className="mt-[2rem]"/>
        {/* <JoinUsComponent /> */}
    </div>
  );
};

export default TeamPage;
