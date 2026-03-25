import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import React from "react";
import { Toaster } from "react-hot-toast"; // Import the Toaster

type Props = {
  children: React.ReactNode;
};

const TrainingLayout = ({ children }: Props) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <>
        <div className="dark:line-divider line-divider-light my-[4rem]"></div>
        <FooterComponent />
      </>
      <Toaster /> {/* This is the correct placement */}
    </div>
  );
};

export default TrainingLayout;