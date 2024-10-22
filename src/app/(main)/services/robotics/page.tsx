import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const RoboticsPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-robotics-bg.jpg"
        title="Advanced Robotics for Efficient Automation"
      />
      <OverviewComponent
        description="At NexaInnov Solutions, we specialize in delivering advanced robotics solutions that automate complex tasks, enhance productivity, and improve operational efficiency. Our expertise in robotics spans across multiple industries, helping businesses reduce manual labor, minimize errors, and achieve faster production times. Whether it's manufacturing, logistics, healthcare, or agriculture, we design and implement custom robotic systems that streamline operations and increase precision. Our innovative approach ensures that our robotic solutions are reliable, scalable, and adaptable to your specific needs, driving business growth and innovation."
        imageUrl="/images/services-robotics-overview.png"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-robotics-services.png"
        services={[
          {
            title: "Industrial Automation:",
            description:
              "Custom robotic systems for assembly lines, packaging, and quality control to streamline manufacturing processes.",
          },
          {
            title: "Robotic Process Automation (RPA):",
            description:
              "Software bots that handle repetitive tasks like data entry, invoice processing, and customer service, freeing up human resources for higher-value work.",
          },
          {
            title: "Autonomous Mobile Robots (AMRs):",
            description:
              "Mobile robots designed for tasks like warehouse navigation, goods transport, and inventory management, enhancing logistics efficiency.",
          },
          {
            title: "Collaborative Robots (Cobots):",
            description:
              "Robots that work alongside human operators to assist with tasks, improving safety, productivity, and flexibility on the production floor.",
          },
          {
            title: "Robotics Integration:",
            description:
              "Integration of robotic systems with existing infrastructure, including software platforms, IoT devices, and machine learning algorithms for seamless operation.",
          },
          {
            title: "Robotics Consulting:",
            description:
              "Expert guidance on robotics strategy, implementation, and optimization, ensuring businesses invest in the right technology for their needs.",
          },
          {
            title: "Robotics Maintenance and Support:",
            description:
              "Ongoing maintenance and technical support to ensure robotic systems remain efficient, reliable, and up-to-date.",
          },
        ]}
      />
    </div>
  );
};

export default RoboticsPage;
