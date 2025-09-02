import ArticleCard from "@/components/cards/article-card";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const ArticlesComponent = (props: Props) => {
  return (
    <div className="min-h-screen text-neutral-200 w-full flex items-center justify-center">
      <div className="w-[90%] xl:w-[75%] h-full flex flex-col gap-[3rem] ">
        <div className="flex flex-row items-center justify-between">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">Latest articles</div>
          
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-0">
          <ArticleCard
            className="w-full md:w-[80%] lg:w-[47%]" // Removed fixed height here
            title="Gartner's Top Technology Trends for 2025"
            readTime="7 min read"
            imageSrc="/images/blog1.png"
            href="/blog/gartner-trends-2025"
          />
          <ArticleCard
            className="w-full md:w-[80%] lg:w-[47%]" // Removed fixed height here
            title="The Future of ERP: Key Trends for 2025"
            readTime="10 min read"
            imageSrc="/images/blog2.png"
            href="/blog/future-of-erp-2025"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ArticlesComponent;