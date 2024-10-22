import Image from "next/image";
import React from "react";
import AboutCompanyComponent from "./_components/about-company";
import OurStoryComponent from "./_components/our-story";
import OurValuesComponent from "./_components/our-values";
import OurTeamComponent from "./_components/our-team";
import OurOfficeComponent from "./_components/our-office";
import OurPartnersComponent from "./_components/our-partners";
import ClientStoriesComponent from "./_components/client-stories";
import FAQComponent from "@/components/common/faq";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="min-h-screen w-full px-[2rem] flex flex-col text-neutral-200 gap-[6rem]">
      <AboutCompanyComponent />
      <OurStoryComponent />
      <OurValuesComponent />
      <OurTeamComponent />
      <OurOfficeComponent />
      <OurPartnersComponent />
      <ClientStoriesComponent />
      <FAQComponent faqs={[
        {
          key: "faq1",
          question: "What services does Nexainnov Solutions offer?",
          answer:
            "We provide a range of IT solutions, including event management tools, website building platforms, and IT training for IBM i (AS/400) and open systems."
        },
        {
          key: "faq2",
          question: "What industries does Nexainnov serve?",
          answer:
            "We cater to event management, IT services, digital transformation, and training, focusing on businesses, individuals, and institutions that need customized tech solutions."
        },
        {
          key: "faq3",
          question: "How does EventifyConnect help with event planning?",
          answer:
            "EventifyConnect allows users to book venue halls with real-time availability, and add other services such as photography, catering, and DJs—all in one place."
        },
        {
          key: "faq4",
          question: "Can I manage multiple events with EventifyConnect?",
          answer:
            "Yes, our platform supports managing multiple events with easy scheduling and booking features."
        },
        {
          key: "faq5",
          question: "Do I need coding experience to use DragBlitz?",
          answer:
            "No, DragBlitz is a user-friendly platform that allows anyone to build websites without any coding or design experience."
        },
      ]}/>
    </div>
  );
};

export default AboutPage;
