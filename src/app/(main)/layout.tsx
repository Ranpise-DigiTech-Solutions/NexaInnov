import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-clip bg-primary-black font-helvetica select-none">
      {children}
    </div>
  );
};

export default MainLayout;
