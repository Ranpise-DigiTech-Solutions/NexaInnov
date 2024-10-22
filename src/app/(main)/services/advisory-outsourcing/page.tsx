import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const AdvisoryOutsourcingPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-advisory-outsourcing-bg.png"
        title="Expert Advisory & Seamless Outsourcing Services"
      />
      <OverviewComponent
        imageUrl="/images/services-advisory-outsourcing-overview.jpg"
        description="At NexaInnov Solutions, we provide expert advisory and outsourcing services designed to help businesses streamline their operations and achieve their strategic goals. Our team of experienced consultants offers tailored advice and support across a range of functions, enabling you to focus on core business activities while we manage the complexities. We combine industry expertise with innovative solutions to ensure cost-efficiency, scalability, and high-quality outcomes."
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-advisory-outsourcing-services.png"
        services={[
          {
            title: "Business Process Outsourcing (BPO):",
            description:
              "We manage essential yet time-consuming processes, including customer support, data entry, payroll, and back-office operations. Our services ensure cost efficiency, quality control, and consistency, freeing your team to focus on high-value activities.",
          },
          {
            title: "IT Outsourcing:",
            description:
              "From software development to IT infrastructure management, our dedicated team delivers reliable, scalable solutions that reduce overhead, streamline workflows, and enhance productivity. Our expertise covers cloud services, cybersecurity, network management, and more.",
          },
          {
            title: "Advisory Services:",
            description:
              "Our expert advisors work closely with your team to identify challenges, recommend best practices, and create actionable plans for growth, operational improvements, and technological transformation. We help businesses navigate complex decisions and drive positive change.",
          },
          {
            title: "Project Management Consulting:",
            description:
              "We offer expert guidance on project planning, execution, and delivery, providing the tools and methodologies to ensure your projects are completed on time, within scope, and on budget.",
          },
          {
            title: "Digital Transformation Consulting:",
            description:
              "Our consultants help businesses leverage cutting-edge technologies to innovate and adapt, guiding you through cloud migration, automation, data analytics, and digital marketing strategies.",
          },
          {
            title: "Supply Chain Management Outsourcing:",
            description:
              "Optimize your supply chain operations with our comprehensive solutions, including procurement, inventory management, logistics coordination, and demand forecasting.",
          },
        ]}
      />
    </div>
  );
};

export default AdvisoryOutsourcingPage;
