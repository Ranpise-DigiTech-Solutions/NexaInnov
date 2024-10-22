import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const SoftwareDevelopmentPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-software-dev-bg.jpg"
        title="Innovative Software Solutions for Your Business Needs"
      />
      <OverviewComponent
        description="Our expert software development team is dedicated to building innovative, reliable, and scalable solutions tailored to meet your business needs. We specialize in creating custom software applications that streamline operations, enhance user experiences, and drive digital transformation. Whether it's developing web applications, mobile apps, or complex enterprise software, our team leverages the latest technologies and industry best practices to deliver solutions that are secure, efficient, and future-proof. From initial consultation and design to development, testing, and deployment, we ensure a seamless and collaborative process that brings your vision to life."
        imageUrl="/images/services-software-dev-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-software-dev-services.jpg"
        services={[
          {
            title: "Custom Software Development:",
            description:
              "Custom software solutions meticulously designed to streamline operations, enhance efficiency, and cater to your unique business needs.",
          },
          {
            title: "Web and Mobile Applications:",
            description:
              "We develop intuitive, responsive web and mobile apps that provide seamless experiences across all devices and platforms.",
          },
          {
            title: "Enterprise Solutions:",
            description:
              "Powerful, secure, and scalable enterprise software solutions designed to optimize workflows and drive business growth.",
          },
          {
            title: "Software Integration:",
            description:
              "Seamless integration of systems and applications to ensure efficient data flow and enhance overall business performance.",
          },
          {
            title: "Maintenance and Support:",
            description:
              "Reliable, ongoing software maintenance and support services to keep your systems smooth, secure, and up-to-date.",
          },
        ]}
      />
    </div>
  );
};

export default SoftwareDevelopmentPage;
