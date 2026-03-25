import React from "react";
import LeftSideBarComponent from "./_components/left-sidebar";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageIcon from "@mui/icons-material/Message";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ClientProfilePage from "./ClientProfilePage"; // Import the new component

type Props = {
  params: Promise<{
    memberRole: "ceo" | "cto";
  }>;
};

const TeamMemberProfilePage = async ({ params }: Props) => {
  const { memberRole } = await params;

  return (
    <div className="min-h-screen w-full flex flex-row items-stretch justify-center my-[2rem]">
      <LeftSideBarComponent className="w-[30%]" />
      <div className="w-[70%] h-full flex flex-col items-center justify-center gap-8 text-neutral-200 px-[2rem]">
        {/* All the static, non-interactive JSX remains here */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* ... all the static JSX for the user profile header ... */}
        </div>
        {/* Render the new client component here */}
        <ClientProfilePage memberRole={memberRole} />
      </div>
    </div>
  );
};

export default TeamMemberProfilePage;