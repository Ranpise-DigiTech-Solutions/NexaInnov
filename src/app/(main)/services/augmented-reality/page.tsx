import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const AugmentedRealityPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-augmented-reality-bg.jpg"
        title="Elevate Experiences with Augmented Reality"
      />
      <OverviewComponent
        description="At NexaInnov Solutions, we offer innovative Augmented Reality (AR) solutions that blend digital content with the physical world, creating immersive and interactive experiences. Our AR technologies are designed to engage users, enhance customer experiences, and drive business value across various industries. Whether it’s for retail, education, entertainment, or industrial applications, our team develops tailored AR solutions that transform how people interact with products and environments. From virtual try-ons and interactive product demos to immersive training and real-time data visualization, our AR services help businesses stand out and connect with their audience in unique and meaningful ways. Embrace the future of digital interaction with our cutting-edge AR solutions."
        imageUrl="/images/services-augmented-reality-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-augmented-reality-services.png"
        services={[
          {
            title: "Custom AR Development:",
            description:
              "We design and develop custom AR applications for mobile devices, smart glasses, and other platforms. Whether for retail, real estate, education, or entertainment, our AR solutions bring your brand or product to life.",
          },
          {
            title: "AR for Marketing and Advertising:",
            description:
              "Create memorable brand experiences by using AR to offer interactive product demonstrations, virtual try-ons, or engaging ads that captivate your audience and boost engagement..",
          },
          {
            title: "AR in Training and Education:",
            description:
              "Transform learning with AR-powered training simulations and interactive educational tools that provide hands-on experiences in a virtual environment, making complex concepts easier to understand.",
          },
          {
            title: "AR in Retail and E-Commerce:",
            description:
              "Enable customers to visualize products in real-world settings with AR-based virtual try-ons, product previews, or 3D visualization, enhancing their buying experience and increasing conversion rates.",
          },
        ]}
      />
    </div>
  );
};

export default AugmentedRealityPage;
