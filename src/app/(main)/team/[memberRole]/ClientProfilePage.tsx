"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import VideoPlayer from "@/components/common/video-player";

// Use props to receive data from the server component
type ClientProfilePageProps = {
  memberRole: "ceo" | "cto";
};

const ClientProfilePage = ({ memberRole }: ClientProfilePageProps) => {
  const [currentTab, setCurrentTab] = useState<
    "about" | "education" | "work" | "articles"
  >("about");

  return (
    <>
      {/* Move the Tabs and other stateful components here */}
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
          {/* ... about content with VideoPlayer ... */}
        </TabsContent>
        {/* ... other TabsContent components ... */}
      </Tabs>
    </>
  );
};

export default ClientProfilePage;