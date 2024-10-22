import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";
import CoreOfferingsComponent from "../_components/core-offerings";

type Props = {};

const DigitalMarketingPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-digital-marketing-bg.png"
        title="Drive Engagement and Growth with Digital Marketing Solutions"
      />
      <OverviewComponent
        description="Our digital marketing solutions are crafted to elevate your brand's online presence, attract targeted audiences, and drive meaningful engagement across various platforms. We specialize in a range of services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content creation, and email marketing. By leveraging data-driven strategies and the latest digital tools, we help businesses connect with their audience, increase visibility, and achieve measurable results. Whether it’s enhancing brand awareness, driving website traffic, or generating leads, our tailored solutions are designed to meet your unique marketing goals."
        imageUrl="/images/services-digital-marketing-overview.jpg"
      />
      <CoreOfferingsComponent
        imageUrl="/images/services-digital-marketing-services.jpg"
        services={[
          {
            title: "Search Engine Optimization (SEO):",
            description:
              "We enhance your website’s visibility on search engines through keyword optimization, backlink building, and content strategy, ensuring higher rankings and organic traffic.",
          },
          {
            title: "Social Media Marketing:",
            description:
              "We create and manage impactful social media campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter to build brand awareness, engage with your audience, and increase conversions.",
          },
          {
            title: "Pay-Per-Click (PPC) Advertising:",
            description:
              "Our PPC experts design targeted ad campaigns on Google and social platforms to drive immediate traffic and conversions with a measurable ROI.",
          },
          {
            title: "Content Marketing:",
            description:
              "We develop and distribute valuable, relevant content (blogs, articles, videos) to attract and engage your target audience, driving website traffic and improving SEO performance.",
          },
          {
            title: "Email Marketing:",
            description:
              "We create and manage high-quality email campaigns to reach your target audience, generate leads, and drive engagement with your website.",
          },
          {
            title: "Analytics and Insights:",
            description:
              "We provide comprehensive analytics and insights to help you optimize your marketing efforts and make data-driven decisions.",
          }
        ]}
      />
    </div>
  );
};

export default DigitalMarketingPage;
