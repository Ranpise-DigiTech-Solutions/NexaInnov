import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const WebMobileDevelopmentPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-software-dev-bg.jpg"
        title="Transformative Web & Mobile Solutions"
      />
      <OverviewComponent
        description="At NexaInnov, we specialize in crafting high-quality, custom websites and mobile applications tailored to meet the unique needs of businesses. Our team of experienced developers and designers work collaboratively to deliver innovative, user-friendly, and scalable solutions that enhance your online presence. Whether it's a sleek, responsive website or a powerful mobile app, we focus on creating seamless experiences that engage users and drive business growth. From concept to deployment, our expertise ensures your digital products stand out in a competitive landscape, helping you connect with your audience effectively and achieve your business goals."
        imageUrl="/images/services-software-dev-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-software-dev-services.jpg"
        services={[
          {
            title: "Custom Website Design and Development:",
            description:
              "We build responsive, visually appealing websites that are optimized for performance across all devices. Whether you need a simple landing page or a complex e-commerce platform, we ensure your website not only looks great but also delivers an exceptional user experience.",
          },
          {
            title: "Mobile App Development:",
            description:
              "Our team develops intuitive mobile applications for both Android and iOS platforms. We focus on creating apps that are easy to navigate, secure, and highly functional, with features that keep your customers engaged.",
          },
          {
            title: "E-Commerce Solutions:",
            description:
              "We provide end-to-end e-commerce development services, integrating secure payment gateways and custom features that streamline the shopping experience.",
          },
          {
            title: "Content Management Systems (CMS):",
            description:
              "We empower our clients with easy-to-use CMS solutions like WordPress, Shopify, or custom-built platforms, allowing you to manage and update your website content with ease.",
          },
          {
            title: "API Integration:",
            description:
              "Seamlessly connect your website or app with third-party services through robust API integration, enhancing your site&#39;s functionality and user experience.",
          },
          {
            title: "Ongoing Support and Maintenance:",
            description:
              "Our support doesn’t stop once your website or app is live. We offer continuous maintenance, updates, and support to ensure that your platform stays up-to-date and secure.",
          },
        ]}
      />
    </div>
  );
};

export default WebMobileDevelopmentPage;
