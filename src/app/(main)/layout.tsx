"use client";

// import CookieConsentBanner from "@/components/common/cookie-consent-banner";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-clip bg-primary-black font-helvetica select-none">
      {/* <AnimatePresence mode="wait">
        <motion.div
           key={typeof window !== 'undefined' ? window.location.pathname : ''}
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0 }}
           transition={{ duration: 0.5, ease: 'easeOut' }}
           style={{ transformOrigin: 'center' }} // or 'top left', 'bottom right', etc.
        > */}
      {children}
      <ScrollToTopButton />
      {/* <CookieConsentBanner /> */}
      {/* </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default MainLayout;
