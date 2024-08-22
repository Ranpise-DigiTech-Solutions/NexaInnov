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
      className={`w-full flex text-white items-center justify-between px-8 py-4 ${className} bg-neutral-800 shadow-md shadow-neutral-700`}
    >
      <Link href={"/"}>
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide">
          <Image
            src={
              "/images/logo.png"
            }
            height={75}
            width={75}
            alt="logo"
          />
          <p className="text-2xl italic font-serif text-logo-text">NexaInnov</p>
        </div>
      </Link>
      <div className="flex items-center gap-8 tracking-wide">
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/"
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
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/about"
        >
          <p
            className={clsx(pathName === "/about" ? "text-primary-pink" : "")}
          >
            About Us
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/about" ? "" : "hidden"
              )}
            ></span>
          </p>
        </Link>
        <Link
          className="hover:text-primary-pink transition-all transform duration-300 relative"
          href="/service"
        >
          <p
            className={clsx(pathName === "/service" ? "text-primary-pink" : "")}
          >
            Services
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
          href="/contact"
        >
          <p
            className={clsx(
              pathName === "/contact" ? "text-primary-pink" : ""
            )}
          >
            Contact Us
          </p>
          <p className="absolute -bottom-4 h-2 w-full flex items-center justify-center">
            <span
              className={clsx(
                "h-full w-2 bg-primary-pink rounded-full",
                pathName === "/contact" ? "" : "hidden"
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
