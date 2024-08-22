import Image from "next/image";
import React from "react";
import AboutCompanyComponent from "./_components/about-company";
import OurStoryComponent from "./_components/our-story";
import OurValuesComponent from "./_components/our-values";
import OurTeamComponent from "./_components/our-team";
import OurOfficeComponent from "./_components/our-office";
import OurPartnersComponent from "./_components/our-partners";
import ClientStoriesComponent from "./_components/client-stories";
import FAQComponent from "@/components/global/faq";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="min-h-screen w-full p-[2rem] flex flex-col text-neutral-200 gap-[6rem]">
      <AboutCompanyComponent />
      <OurStoryComponent />
      <OurValuesComponent />
      <OurTeamComponent />
      <OurOfficeComponent />
      <OurPartnersComponent />
      <ClientStoriesComponent />
      <FAQComponent />
    </div>
  );
};

export default AboutPage;
