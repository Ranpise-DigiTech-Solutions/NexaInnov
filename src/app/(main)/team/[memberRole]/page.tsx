"use client";
import React, { useState } from "react";
import LeftSideBarComponent from "./_components/left-sidebar";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageIcon from "@mui/icons-material/Message";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import clsx from "clsx";
import VideoPlayer from "@/components/common/video-player";

type Props = {
  params: Promise<{
    memberRole: "ceo" | "cto";
  }>;
};

const TeamMemberProfilePage = async ({ params }: Props) => {
  const { memberRole } = await params;

  const [currentTab, setCurrentTab] = useState<"about" | "education" | "work" | "articles">("about");

  return (
    <div className="min-h-screen w-full flex flex-row items-stretch justify-center my-[2rem]">
      <LeftSideBarComponent className="w-[30%]" />
      <div className="w-[70%] h-full flex flex-col items-center justify-center gap-8 text-neutral-200 px-[2rem]">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="w-full text-start text-2xl font-bold">
              Samadhan Ranpise{" "}
              <span className="font-normal text-lg px-2 text-neutral-600">
                (He/Him)
              </span>
            </p>
            <p className="w-full text-start text-md text-neutral-500 font-extrabold">
              Strategic Investor &nbsp;| &nbsp;
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-2">
            <MapPin className="text-primary-pink" size={18} />
            <p className="text-sm text-neutral-400">
              Mysore, Karnataka, India - 570008
            </p>
            <p className="text-primary-light-blue text-sm text-details-dot-separator cursor-pointer">
              Contact Info
            </p>
          </div>
          <p className="text-neutral-200 leading-7 line-clamp-4 truncate text-wrap">
            {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quos mollitia labore natus hic incidunt ipsa quo voluptatibus cumque corporis tempore dolore aspernatur quisquam repellendus, et assumenda ab tempora ut vitae rerum. Amet, quibusdam odit, quaerat earum laborum unde enim dolores reiciendis, consequatur cumque rem atque sed placeat velit corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus saepe sint veritatis dicta inventore molestias atque soluta aliquid ipsa. Numquam votm?".slice(
              0,
              500
            )}{" "}
            ...{" "}
            <span className="text-primary-light-blue underline underline-offset-2 text-sm cursor-pointer">
              Read more
            </span>
          </p>
          <div className="w-full flex items-center justify-start gap-4">
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-neutral-600 bg-neutral-700 rounded-md">
              <p className="w-full h-full text-sm tracking-wide text-neutral-200 rounded-full flex items-center justify-center gap-2">
                <MessageIcon fontSize="small" />
                <span>Send message</span>
              </p>
            </Button>
            <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-neutral-600 bg-neutral-700 rounded-md">
              <p className="w-full h-full text-sm tracking-wide text-neutral-200 rounded-full flex items-center justify-center gap-2">
                <ScheduleIcon fontSize="small" />
                <span>Schedule meeting</span>
              </p>
            </Button>
          </div>
        </div>
        <Separator className="my-1 bg-neutral-600" />
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex flex-row items-center justify-start text-white gap-4">
            <TabsTrigger
              value="about"
              className={clsx(
                "tracking-wide text-base flex flex-row items-center justify-center gap-2 font-semibold py-2 px-4 rounded-b-none rounded-t-lg",
                currentTab === "about"
                  ? "bg-neutral-800 text-primary-pink"
                  : "bg-transparent text-neutral-600"
              )}
              onClick={() => setCurrentTab("about")}
            >
              <PersonIcon fontSize="small" />
              <p>About</p>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className={clsx(
                "tracking-wide text-base flex flex-row items-center justify-center gap-2 text-neutral-600 font-semibold py-2 px-4 rounded-b-none rounded-t-lg",
                currentTab === "education"
                  ? "bg-neutral-800 text-primary-pink"
                  : "bg-transparent text-neutral-600"
              )}
              onClick={() => setCurrentTab("education")}
            >
              <SchoolIcon fontSize="small" />
              <p>Education</p>
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className={clsx(
                "tracking-wide text-base flex flex-row items-center justify-center gap-2 text-neutral-600 font-semibold py-2 px-4 rounded-b-none rounded-t-lg",
                currentTab === "work"
                  ? "bg-neutral-800 text-primary-pink"
                  : "bg-transparent text-neutral-600"
              )}
              onClick={() => setCurrentTab("work")}
            >
              <WorkIcon fontSize="small" />
              <p>Work</p>
            </TabsTrigger>
            <TabsTrigger
              value="articles"
              className={clsx(
                "tracking-wide text-base flex flex-row items-center justify-center gap-2 text-neutral-600 font-semibold py-2 px-4 rounded-b-none rounded-t-lg",
                currentTab === "articles"
                  ? "bg-neutral-800 text-primary-pink"
                  : "bg-transparent text-neutral-600"
              )}
              onClick={() => setCurrentTab("articles")}
            >
              <ArticleIcon fontSize="small" />
              <p>Articles</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="about"
            className="w-full bg-neutral-800 min-h-[500px] my-0 mx-1 p-8"
          >
            <div className="w-full h-full p-[1rem] flex flex-col items-center justify-center gap-12">
              <div className="w-full flex flex-col items-center justify-center gap-6">
                <p className="w-full text-start text-base font-bold text-neutral-600">
                  About NexaInnov
                </p>
                <p className="text-neutral-200 leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                  ipsum quas excepturi assumenda distinctio, tempora, veniam quis
                  cupiditate cum corporis similique, illum provident optio quam autem
                  voluptatum? Minima distinctio iure eos esse, nam commodi quisquam
                  eius laudantium doloribus nisi earum dolorum ipsa itaque? Quam,
                  velit minima! Maiores ducimus optio possimus?
                </p>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-6">
                <p className="w-full text-start text-base font-bold text-neutral-600">
                  CEO Testimony
                </p>
                <VideoPlayer
                  src="https://videos.pexels.com/video-files/4426909/4426909-uhd_2560_1440_25fps.mp4"
                  className="w-[75%]"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="education"
            className="w-full bg-neutral-800 min-h-[500px] my-0 mx-1 p-8"
          >
            education
          </TabsContent>
          <TabsContent
            value="work"
            className="w-full bg-neutral-800 min-h-[500px] my-0 mx-1 p-8"
          >
            work
          </TabsContent>
          <TabsContent
            value="articles"
            className="w-full bg-neutral-800 min-h-[500px] my-0 mx-1 p-8/1 p-8"
          >
            articles
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamMemberProfilePage;

