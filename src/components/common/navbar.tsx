"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type Props = {
  className?: string;
};

const NavbarComponent = ({ className }: Props) => {
  const pathName = usePathname();
  const [menuDropdown, setMenuDropdown] = useState<{
    activeMenu: string;
    status: boolean;
  }>({ activeMenu: "", status: false });
  const [menuAnimation, setMenuAnimation] = useState<{
    top: string;
    bottom: string;
  }>({ top: "", bottom: "" });
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleMenuAnimation = () => {
    setToggleMenu(!toggleMenu);
    if (menuAnimation.top) {
      setMenuAnimation({ top: "translate-y-1", bottom: "-translate-y-1" });

      setTimeout(() => {
        setMenuAnimation({ top: "", bottom: "" });
      }, 700);
      return;
    }

    setMenuAnimation({ top: "translate-y-1", bottom: "-translate-y-1" });

    setTimeout(() => {
      setMenuAnimation({
        top: "translate-y-1 rotate-45",
        bottom: "-translate-y-1 -rotate-45",
      });
    }, 700);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleMenu]);

  return (
    <>
      <div
        className={`relative w-full max-h-[75px] xl:max-h-fit xl:px-8 px-4 py-4 ${className} bg-neutral-800 shadow-md shadow-neutral-700 z-50 `}
      >
        <div className="w-full flex text-white items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer tracking-wide gap-2">
              <Image
                src={"/images/logo.png"}
                height={0}
                width={0}
                alt="logo"
                unoptimized
                quality={100}
                draggable="false"
                className="xl:h-[45px] xl:w-[45px] w-[40px] h-[40px] opacity-80"
              />
              <p className="text-2xl italic font-serif text-white">
                NexaInnov
              </p>
            </div>
          </Link>
          <div className="hidden xl:flex items-center gap-8 tracking-wide">
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative"
              href="/"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Home", status: true });
              }}
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
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "About Us", status: true });
              }}
            >
              <p
                className={clsx(
                  pathName === "/about" ? "text-primary-pink" : ""
                )}
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
            <div
              className="group hover:text-primary-pink transition-all transform duration-300 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Services", status: true });
              }}
            >
              <p
                className={clsx(
                  "transition-transform duration-500 ease-in-out flex flex-row gap-1 items-center justify-center",
                  pathName === "/service" ? "text-primary-pink" : ""
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                />
              </p>
            </div>
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative"
              href="/training"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Training", status: true });
              }}
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
            <div
              className="group hover:text-primary-pink transition-all transform duration-500 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Products", status: true });
              }}
            >
              <p
                className={clsx(
                  "flex flex-row items-center justify-center gap-1 transition-transform duration-500 ease-in-out",
                  pathName === "/products" ? "text-primary-pink" : ""
                )}
              >
                <span>Products</span>
                <ChevronDown
                  size={18}
                  className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                />
              </p>
            </div>
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative"
              href="/contact"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Contact Us", status: true });
              }}
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
          <div className="hidden xl:flex items-center gap-6">
            <Link
              className="transition-transform transform duration-300 hover:text-primary-pink"
              href="/api/auth/login"
            >
              Sign In
            </Link>

            <Button className="button-primary-gradient rounded-full transform transition-transform duration:300 hover:scale-105 tracking-wide">
              <p className=" w-full h-full p-2 font-bold flex items-center justify-center rounded-full">
                Get Started
              </p>
            </Button>
          </div>
          <div className="xl:hidden inline-block">
            <Button
              className="group max-h-[40px] max-w-[30px] flex flex-col items-center justify-center gap-1.5 overflow-clip cursor-pointer transform transform-all duration-500"
              onClick={handleMenuAnimation}
            >
              <div
                className={`h-[1.5px] w-[25px] bg-primary-pink transform transition-transform duration-500 ${menuAnimation.top}`}
              ></div>
              <div
                className={`h-[1px] w-[25px] bg-primary-pink ${
                  menuAnimation.top && "hidden"
                }`}
              ></div>
              <div
                className={`h-[1.5px] w-[25px] bg-primary-pink transform transition-transform duration-500 ${menuAnimation.bottom}`}
              ></div>
            </Button>
          </div>
        </div>
        {/* menu options for small and medium screens */}
        <div
          className={`absolute top-20 left-0 right-0 min-h-screen w-[100vw] bg-primary-black opacity-95 xl:hidden transform transition-all duration-1000 text-neutral-200 z-10 py-8 px-6 ${
            toggleMenu ? "scale-x-100" : "scale-x-0"
          }`}
        >
          <div className="h-full w-full flex flex-col items-center justify-center gap-12 tracking-wide overflow-y-scroll">
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative text-lg"
              href="/"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Home", status: true });
              }}
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
              className="hover:text-primary-pink transition-all transform duration-300 relative text-lg"
              href="/about"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "About Us", status: true });
              }}
            >
              <p
                className={clsx(
                  pathName === "/about" ? "text-primary-pink" : ""
                )}
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
            <div
              className="group hover:text-primary-pink transition-all transform duration-300 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Services", status: true });
              }}
            >
              <p
                className={clsx(
                  "transition-transform duration-500 ease-in-out flex flex-row gap-1 items-center justify-center text-lg",
                  pathName === "/service" ? "text-primary-pink" : ""
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={20}
                  className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                />
              </p>
            </div>
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative text-lg"
              href="/training"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Training", status: true });
              }}
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
            <div
              className="group hover:text-primary-pink transition-all transform duration-500 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Products", status: true });
              }}
            >
              <p
                className={clsx(
                  "flex flex-row items-center justify-center gap-1 transition-transform duration-500 ease-in-out text-lg",
                  pathName === "/products" ? "text-primary-pink" : ""
                )}
              >
                <span>Products</span>
                <ChevronDown
                  size={20}
                  className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                />
              </p>
            </div>
            {/* Products Dropdown */}
            {/* <div
              className={`transform transition-all duration-700 ease-in-out ${
                menuDropdown.status && menuDropdown.activeMenu === "Products"
                  ? "max-h-[100px]"
                  : "max-h-0"
              }`}
            >
            </div> */}
              {menuDropdown.activeMenu === "Products" && (
                <div
                  className="w-full h-fit flex flex-row flex-wrap items-stretch justify-between gap-8"
                  onMouseLeave={() => {
                    setMenuDropdown({ activeMenu: "", status: false });
                  }}
                >
                  <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
                    <p className="text-xl font-semibold text-neutral-500 text-start">
                      DragBlitz
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        For Everyone
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        For Teams
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        For Enterprises
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        For Education
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        Pricing
                      </p>
                      <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                        <span className="group-hover:text-primary-pink">
                          DragBlitz login
                        </span>
                        <ArrowUpRight
                          fontSize={16}
                          className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
                    <p className="text-xl font-semibold text-neutral-500 text-start">
                      API
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        Platform Overview
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        Pricing
                      </p>
                      <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                        <span className="group-hover:text-primary-pink">
                          Documentation
                        </span>
                        <ArrowUpRight
                          fontSize={16}
                          className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                        />
                      </p>
                      <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                        <span className="group-hover:text-primary-pink">
                          API Login
                        </span>
                        <ArrowUpRight
                          fontSize={16}
                          className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
                    <p className="text-xl font-semibold text-neutral-500 text-start">
                      Explore More
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        NexaInnov for business
                      </p>
                      <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                        Stories
                      </p>
                    </div>
                  </div>
                </div>
              )}
            <Link
              className="hover:text-primary-pink transition-all transform duration-300 relative text-lg"
              href="/contact"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Contact Us", status: true });
              }}
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
        </div>
      </div>
      <div
        className={`absolute flex-[85%] w-full transform transition-all duration-700 ease-in-out top-[5rem] left-0 right-0 bg-neutral-800 backdrop-blur-md hidden xl:flex items-start justify-center ${
          menuDropdown.status &&
          (menuDropdown.activeMenu === "Services" ||
            menuDropdown.activeMenu === "Products")
            ? "bottom-0 opacity-95 z-10"
            : "bottom-full opacity-0 -z-10"
        }`}
      >
        {menuDropdown.activeMenu === "Products" && (
          <div
            className="w-[80%] h-fit flex flex-row items-stretch justify-between gap-4 py-[4rem]"
            onMouseLeave={() => {
              setMenuDropdown({ activeMenu: "", status: false });
            }}
          >
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                DragBlitz
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  For Everyone
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  For Teams
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  For Enterprises
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  For Education
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Pricing
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    DragBlitz login
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                API
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Platform Overview
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Pricing
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    Documentation
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    API Login
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                Explore More
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  NexaInnov for business
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Stories
                </p>
              </div>
            </div>
          </div>
        )}
        {menuDropdown.activeMenu === "Services" && (
          <div
            className="w-[80%] h-fit flex flex-row items-stretch justify-between gap-4 py-[4rem]"
            onMouseLeave={() => {
              setMenuDropdown({ activeMenu: "", status: false });
            }}
          >
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                General
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Automation
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Digital Marketing
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Software Developer
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Website and Mobile App Development
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Advisory and OutSourcing Services
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    IBM I (AS/400) and JD Edwards ERP Consulting
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                IT and DT Consulting
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Internet of Thing (IOT)
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Augmented reality (AR)
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    Virtual Reality (VR)
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
                <p className="group text-lg font-neutral text-neutral-200 transform transition-all duration-300 cursor-pointer flex flex-row gap-1 items-center justify-center">
                  <span className="group-hover:text-primary-pink">
                    Robotics
                  </span>
                  <ArrowUpRight
                    fontSize={16}
                    className="transfrom transition-all duration-300 group-hover:text-primary-pink group-hover:-translate-y-0.5"
                  />
                </p>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-6 tracking-wide">
              <p className="text-xl font-semibold text-neutral-500 text-start">
                Others
              </p>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  NexaInnov for business
                </p>
                <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                  Stories
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
