import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContactLayout = ({ children }: Props) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <>
        <div className="line-divider my-[4rem]"></div>
        <FooterComponent />
      </>
    </div>
  );
};

export default ContactLayout;
