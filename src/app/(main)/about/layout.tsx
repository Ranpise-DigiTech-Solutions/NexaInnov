import FooterComponent from "@/components/global/footer";
import NavbarComponent from "@/components/global/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <NavbarComponent />
      {children}
      <>
        <div className="line-divider"></div>
        <FooterComponent />
      </>
    </div>
  );
};

export default AboutLayout;
