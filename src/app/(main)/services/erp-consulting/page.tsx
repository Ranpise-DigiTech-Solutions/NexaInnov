import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const ERPConsultingPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-erp-consulting-bg.jpg"
        title="Specialized ERP Consulting for Optimized Business Processes"
      />
      <OverviewComponent
        description="At NexaInnov Solutions, we offer specialized consulting services for IBM i (AS/400) and JD Edwards ERP systems, helping businesses optimize their legacy systems and streamline their enterprise resource planning (ERP) operations. Our expert consultants provide comprehensive solutions, from system modernization and performance tuning to integration with modern technologies. We ensure that your IBM i platform and JD Edwards ERP systems operate seamlessly, maximizing efficiency and reliability. Our services also include implementation, customization, and ongoing support, empowering your business to stay agile and competitive in a rapidly changing market. Whether you need to enhance existing functionalities or migrate to a more scalable infrastructure, our tailored approach ensures that your systems align perfectly with your business goals."
        imageUrl="/images/services-erp-consulting-overview.png"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-erp-consulting-services.jpg"
        services={[
          {
            title: "IBM i (AS/400) Consulting:",
            description:
              "Our team of experts provides comprehensive support for IBM i (AS/400), helping organizations maintain, modernize, and maximize the performance of their mission-critical applications. From system upgrades and integration to security enhancements and cloud adoption, we ensure that your IBM i platform operates at peak efficiency. Whether you need to modernize legacy applications, optimize database performance, or integrate with new technologies, our solutions are tailored to your specific needs, enabling seamless and secure operations. We bring extensive experience in IBM i architecture, development, and administration to support your business growth and agility.",
          },
          {
            title: "JD Edwards ERP Consulting:",
            description:
              "We deliver end-to-end consulting for JD Edwards ERP systems, including implementation, customization, upgrades, and ongoing support. Our services are designed to improve operational efficiency, streamline processes, and provide real-time insights, empowering your business to make data-driven decisions. From initial system design to module-specific enhancements, we help you leverage the full potential of JD Edwards to meet your business requirements. Our expertise covers finance, supply chain, manufacturing, human capital management, and more, ensuring smooth integration and optimal performance across your enterprise.",
          },
        ]}
      />
    </div>
  );
};

export default ERPConsultingPage;
