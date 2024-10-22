import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const IOTPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-iot-bg.jpg"
        title="Connect the Future with IoT Solutions"
      />
      <OverviewComponent
        description="At NexaInnov Solutions, we provide cutting-edge Internet of Things (IoT) solutions that help businesses harness the power of connected devices. By leveraging IoT technology, we enable real-time data collection, seamless automation, and enhanced decision-making, transforming how businesses operate and interact with the world around them. Our comprehensive IoT services include device integration, network connectivity, and advanced analytics, all tailored to meet your unique business needs. From smart manufacturing and asset tracking to intelligent building management and predictive maintenance, our solutions drive efficiency, reduce costs, and open up new opportunities for growth. With our expertise, you can create a truly connected ecosystem that empowers your business to stay ahead in a rapidly evolving digital landscape."
        imageUrl="/images/services-iot-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-iot-services.jpg"
        services={[
          {
            title: "IoT Strategy and Consulting:",
            description:
              "We work with businesses to develop a tailored IoT strategy that aligns with their goals. From identifying use cases to selecting the right technologies, our consultants provide the guidance needed to make IoT implementation a success.",
          },
          {
            title: "Custom IoT Development:",
            description:
              "Our team designs and develops custom IoT applications and systems, integrating devices, sensors, and cloud platforms to deliver a seamless, data-driven experience. Whether it&#39;s for smart factories, logistics, healthcare, or smart cities, we create scalable solutions to meet your business needs.",
          },
          {
            title: "IoT Device Management:",
            description:
              "We offer full lifecycle management of IoT devices, ensuring smooth deployment, maintenance, and updates. Our solutions include remote monitoring, diagnostics, and automated processes that enhance device performance and uptime.",
          },
          {
            title: "Data Analytics and Visualization:",
            description:
              "IoT generates vast amounts of data—our analytics tools turn this data into actionable insights. With real-time monitoring and visualization dashboards, you can make informed decisions to optimize performance and efficiency.",
          },
          {
            title: "IoT Security:",
            description:
              "We prioritize security at every stage, implementing robust encryption, authentication, and access control to protect your IoT ecosystem from cyber threats.",
          },
        ]}
      />
    </div>
  );
};

export default IOTPage;
