"use client";

import { useModal } from "../providers/modal-provider";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type Props = {
  title: string;
  subHeading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ title, subHeading, children, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="overflow-auto md:max-h-[700px] md:h-fit h-screen bg-orange-400 dark:bg-neutral-800 border-neutral-700">
        <DialogHeader className="pt-6 text-left">
          <DialogTitle className="text-2xl font-bold text-primary-blue dark:text-neutral-200">{title}</DialogTitle>
          <DialogDescription className="text-neutral-800 dark:text-neutral-500 text-base">{subHeading}</DialogDescription>
          <div>
            {children}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
