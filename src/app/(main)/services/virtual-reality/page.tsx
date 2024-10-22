import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const VirtualRealityPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-virtual-reality-bg.jpg"
        title="Elevate Experiences with Augmented Reality"
      />
      <OverviewComponent
        description="At NexaInnov Solutions, we deliver immersive Virtual Reality (VR) solutions that transport users into fully interactive digital environments. Our VR technologies elevate user experiences by creating realistic, engaging, and captivating virtual worlds. Whether it’s for training, simulations, marketing, or entertainment, our VR solutions offer new and innovative ways to connect with your audience. From lifelike training simulations and virtual tours to interactive product demonstrations and immersive storytelling, we help businesses redefine how they engage with customers and stakeholders. With our expertise in cutting-edge VR development, you can transform your ideas into dynamic digital experiences that captivate and inspire."
        imageUrl="/images/services-virtual-reality-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-virtual-reality-services.jpg"
        services={[
          {
            title: "Custom VR Development:",
            description:
              "We create tailor-made VR applications for various industries, including gaming, healthcare, real estate, and education. Our solutions allow users to explore 3D environments, interact with objects, and simulate real-world scenarios.",
          },
          {
            title: "VR Training and Simulations:",
            description:
              "Improve learning outcomes with VR-based training programs that offer hands-on experience in safe, controlled environments. Whether it&#39;s technical training, soft skills, or complex procedures, VR makes learning more engaging and effective.",
          },
          {
            title: "VR for Marketing and Events:",
            description:
              "Capture attention and leave a lasting impression with VR experiences for product launches, virtual tours, and interactive demonstrations at events or trade shows.",
          },
          {
            title: "VR in Real Estate and Architecture:",
            description:
              "Allow clients to virtually walk through properties and experience architectural designs before they are built. Our VR solutions give a realistic sense of space and scale, helping clients make informed decisions.",
          },
        ]}
      />
    </div>
  );
};

export default VirtualRealityPage;
