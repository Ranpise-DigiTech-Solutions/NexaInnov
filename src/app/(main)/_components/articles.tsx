import ArticleCard from "@/components/cards/article-card";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const ArticlesComponent = (props: Props) => {
  return (
    <div className="min-h-screen text-neutral-200 w-full flex items-center justify-center">
      <div className="w-[75%] h-full flex flex-col gap-[3rem] ">
        <div className="flex flex-row items-center justify-between">
          <div className="text-5xl font-bold">Latest articles</div>
          <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 p-8 rounded-full">
            <p className="w-full h-full text-xl tracking-wide text-neutral-200 rounded-full flex items-center justify-center">
              Browse all articles
            </p>
          </Button>
        </div>
        <div className="w-full flex items-center justify-between">
          <ArticleCard className="h-[500px] w-[47%]" />
          <ArticleCard className="h-[500px] w-[47%]" />
        </div>
      </div>
    </div>
  );
};

export default ArticlesComponent;
