import React from "react";
import styles from './loading-screen.module.scss';

type Props = {};

const LoadingScreen = (props: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-1000 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
      <div className="w-10 h-10 rounded-full border-4 border-transparent border-t-white animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
