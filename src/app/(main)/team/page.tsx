
import React from "react";
import TeamMembersComponent from "./_components/team-members";
import JoinUsComponent from "./_components/join-us";

type Props = {};

const TeamPage = (props: Props) => {
  return (
    <>
        <TeamMembersComponent />
        <JoinUsComponent />
    </>
  );
};

export default TeamPage;
