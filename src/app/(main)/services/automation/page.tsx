import React from "react";
import HeaderComponent from "../_components/header";
import OverviewComponent from "../_components/overview";

type Props = {};

const AutomationPage = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[5rem]">
      <HeaderComponent
        bgImageUrl="/images/services-automation-bg.jpg"
        title="Streamline your operations with smart automation"
      />
      <OverviewComponent
        imageUrl="/images/services-automation-overview.jpg"
        description="Our automation solutions are designed to streamline business
          processes, improve efficiency, and reduce human error. We leverage
          cutting-edge technologies like robotic process automation (RPA),
          AI-driven workflows, and custom scripting to automate repetitive
          tasks, optimize operations, and enhance overall productivity. From
          automating data entry and processing to integrating complex systems,
          our solutions are tailored to meet your unique business needs,
          allowing you to focus on growth and innovation."
      />
    </div>
  );
};

export default AutomationPage;
