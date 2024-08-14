"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  className?: string;
};

const NavbarComponent = ({ className }: Props) => {
  const pathName = usePathname();

  return (
    <div
      className={`w-full flex text-white items-center justify-between p-8 ${className}`}
    >
      <div className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide">
        <Image
          src={
            "https://assets-global.website-files.com/61113c4e9f23df1e7f554117/612bc71c644420792634e5a4_logo-dark-template.svg"
          }
          height={105}
          width={105}
          alt="logo"
        />
        {/* <div className="text-xl font-serif">NexaInnov</div> */}
      </div>
      <div className="flex items-center gap-8 tracking-wide">
        <a
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="#"
        >
          <p className={clsx(pathName === "/" ? "text-primary-pink" : "")}>
            Home
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/" ? "" : "hidden"
              )}
            ></span>
          </p>
        </a>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/service"
        >
          <p
            className={clsx(pathName === "/service" ? "text-primary-pink" : "")}
          >
            Service
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/service" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/training"
        >
          <p
            className={clsx(
              pathName === "/training" ? "text-primary-pink" : ""
            )}
          >
            Training
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/training" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/products"
        >
          <p
            className={clsx(
              pathName === "/products" ? "text-primary-pink" : ""
            )}
          >
            Products
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/products" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/aboutUs"
        >
          <p
            className={clsx(pathName === "/aboutUs" ? "text-primary-pink" : "")}
          >
            About Us
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/aboutUs" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="clients"
        >
          <p
            className={clsx(pathName === "/clients" ? "text-primary-pink" : "")}
          >
            Clients
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/clients" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/contactUs"
        >
          <p
            className={clsx(
              pathName === "/contactUs" ? "text-primary-pink" : ""
            )}
          >
            Contact Us
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/contactUs" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <a
          className="transition-transform transform duration-300 hover:text-primary-pink"
          href="#"
        >
          Sign In
        </a>

        <Button className="button-primary-gradient rounded-full transform transition-transform duration:300 hover:scale-105 tracking-wide">
          <p className=" w-full h-full p-2 font-bold flex items-center justify-center rounded-full">
            Get Started
          </p>
        </Button>
      </div>
    </div>
  );
};

export default NavbarComponent;
