import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-[4rem]">
      <NavbarComponent />
      {children}
      <div className="line-divider"></div>
      <FooterComponent />
    </div>
  );
};

export default AboutLayout;
