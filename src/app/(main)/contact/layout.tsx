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
        <div className="dark:line-divider line-divider-light my-[4rem]"></div>
        <FooterComponent />
      </>
    </div>
  );
};

export default ContactLayout;
