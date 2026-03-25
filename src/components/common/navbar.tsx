"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Laptop,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
} from "lucide-react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useToast } from "../ui/use-toast";
import LoadingScreen from "./loading-screen";
import { ToastAction } from "@/components/ui/toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

const NavbarComponent = ({ className }: Props) => {
  const pathName = usePathname();
  const { setTheme } = useTheme();
  const { user, error, isLoading } = useUser();
  const { toast } = useToast();
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

  if (!isLoading) {
    <LoadingScreen />;
  }

  if (error) {
    toast({
      title: "Error",
      description: "Some error occured during sign in.",
      action: <ToastAction altText="Goto schedule to undo">Okay</ToastAction>,
    });
  }

  return (
    <>
      <div
        className={`relative w-full xl:max-h-fit xl:px-8 px-4 py-8 ${className} bg-white dark:bg-neutral-800 shadow-2xl shadow-orange-400 dark:shadow-neutral-700 z-50 `}
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
      // Adjusted logo size for smaller screens for more room (from 40px to 36px)
      className="xl:h-[45px] xl:w-[45px] w-[36px] h-[36px]"
    />
    {/* The gap should NOT be on the <p> tag itself */}
    <p className="text-xl sm:text-2xl italic font-serif text-neutral-800 dark:text-white">
      NexaInnov Solutions
    </p>
  </div>
          </Link>
          <nav className="text-[#111827] dark:text-white hidden xl:flex items-center gap-8 tracking-wide">
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
            {/* START OF UPDATED TRAINING LINK FOR LARGE SCREENS */}
            <div
              className="group hover:text-primary-pink transition-all transform duration-300 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Training", status: true });
              }}
            >
              {/* Wrapped the text and icon in Link to make the entire clickable area navigate to /training */}
              <Link href="/training" className="flex flex-row gap-1 items-center justify-center">
                <p
                  className={clsx(
                    "transition-transform duration-500 ease-in-out flex flex-row gap-1 items-center justify-center",
                    pathName === "/training" ? "text-primary-pink" : ""
                  )}
                >
                  <span>Training</span>
                  <ChevronDown
                    size={18}
                    className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                  />
                </p>
              </Link>
            </div>
            {/* END OF UPDATED TRAINING LINK FOR LARGE SCREENS */}
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
          </nav>
          
          {/* START: Unified Sign-in/Theme/Hamburger Container */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* 1. Sign In/Out/Avatar for DESKTOP (XL and up) */}
            <div className="hidden xl:flex items-center gap-6">
              {user ? (
                <Avatar>
                  <AvatarImage
                    src={user.picture || "https://github.com/shadcn.png"}
                    alt={user.name || "@shadcn"}
                  />
                  <AvatarFallback>{user.name?.substring(0, 2)}</AvatarFallback>
                </Avatar>
              ) : (
                <Link
      // ADDED ml-3 to create left-side buffer on mobile
      className="transition-transform transform duration-300 text-neutral-800 dark:text-white hover:text-primary-pink text-sm font-medium ml-5"
      href="/api/auth/login"
    >
      Sign In
    </Link>
              )}
            </div>

            {/* 2. Sign In/Out/Avatar for MOBILE/TABLET (L and below) */}
            <div className="flex items-center xl:hidden"> 
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer h-8 w-8">
                      <AvatarImage 
                        src={user.picture || "https://github.com/shadcn.png"} 
                        alt={user.name || "User"}
                      />
                      <AvatarFallback className="text-xs">{user.name?.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-neutral-700 text-neutral-200">
                    <DropdownMenuItem asChild>
                      <Link href="/api/auth/logout" className="w-full flex items-center justify-start gap-2 cursor-pointer transform transition-all duration-300 hover:bg-neutral-600">
                        <ArrowUpRight className="w-[20px] h-[20px] rotate-90" />
                        <span>Sign Out</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  className="transition-transform transform duration-300 text-neutral-800 dark:text-white hover:text-primary-pink text-sm font-medium"
                  href="/api/auth/login"
                >
                  Sign In
                </Link>
              )}
            </div>
            
            {/* 3. Theme Toggle (Visible on all screens) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="dark:bg-neutral-800 bg-primary-blue">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-neutral-700 text-neutral-200"
              >
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer transform transition-all duration-300 hover:bg-neutral-600"
                >
                  <Sun className="w-[20px] h-[20px]" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer transform transition-all duration-300 hover:bg-neutral-600"
                >
                  <Moon className="w-[20px] h-[20px]" />
                  <span>Dark</span>
                </DropdownMenuItem>
                {/* <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer transform transition-all duration-300 hover:bg-neutral-600"
                >
                  <Laptop className="w-[20px] h-[20px]" />
                  <span>System</span>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. Get Started Button (Desktop Only) */}
            <Button className="button-primary-gradient rounded-full transform transition-transform duration:300 hover:scale-105 tracking-wide hidden xl:flex">
              <Link href={"/#why-us"} className=" w-full h-full p-2 font-bold flex items-center justify-center rounded-full">
                Get Started
              </Link>
            </Button>
            
            {/* 5. Hamburger Icon (Mobile Only) */}
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
          {/* END: Unified Sign-in/Theme/Hamburger Container */}
          
        </div>
        
        {/* menu options for small and medium screens (The hidden full-screen mobile menu) */}
        <div
          className={`fixed top-19 left-0 right-0 max-h-[95vh] w-screen bg-[#ffffff] dark:bg-primary-black opacity-95 xl:hidden transform transition-all duration-1000 text-neutral-200 z-10 py-8 px-6 overflow-y-auto ${
            toggleMenu ? "scale-x-100" : "scale-x-0"
          }`}
        >
          <div className="h-full w-full flex flex-col items-center justify-center !gap-[3rem] tracking-wide">

            {/* Existing Mobile Menu Links start here */}
            <Link
              className="dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-300 relative text-lg"
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
              className="dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-300 relative text-lg"
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
              className="group dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-300 relative cursor-pointer"
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
            {menuDropdown.activeMenu === "Services" && (
  <div
    className="w-full h-fit flex flex-row flex-wrap items-stretch justify-between gap-8"
    onMouseLeave={() => {
      setMenuDropdown({ activeMenu: "", status: false });
    }}
  >
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Digital Experience Solutions
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/custom-app-development"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Custom Application Development (Web & Mobile)
          </p>
        </Link>
        <Link href={"/services/digital-marketing"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Digital Marketing & Growth
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Enterprise Application Services
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/infor-solutions"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Infor Solutions Practice
          </p>
        </Link>
        <Link href={"/services/sap-solutions"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            SAP Solutions Practice
          </p>
        </Link>
        <Link href={"/services/jd-edwards-solutions"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            JD Edwards Solutions
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Talent Development & IT Staffing
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/corporate-it-training"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Corporate IT Training Programs
          </p>
        </Link>
        <Link href={"/services/staffing"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Specialized Staffing Solutions
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        AI, Data & Intelligent Automation
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/ai-solutions"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            AI powered solutions
          </p>
        </Link>
        <Link href={"/services/workflow-automation"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Work flow Automation Solutions
          </p>
        </Link>
      </div>
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start mt-4">
        Product Development
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/product-development"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Product Development
          </p>
        </Link>
      </div>
    </div>
  </div>
)}
            {/* START OF UPDATED TRAINING LINK FOR MOBILE SCREENS */}
            <div
              className="group dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-300 relative cursor-pointer"
              onMouseEnter={() => {
                setMenuDropdown({ activeMenu: "Training", status: true });
              }}
            >
              <Link href="/training" className="flex flex-row gap-1 items-center justify-center text-lg">
                <p
                  className={clsx(
                    "transition-transform duration-500 ease-in-out flex flex-row gap-1 items-center justify-center text-lg",
                    pathName === "/training" ? "text-primary-pink" : ""
                  )}
                >
                  <span>Training</span>
                  <ChevronDown
                    size={20}
                    className="transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                  />
                </p>
              </Link>
            </div>
            {menuDropdown.activeMenu === "Training" && (
              <div
                className="w-full h-fit flex flex-col items-start justify-start gap-4 tracking-wide px-4 py-2"
                onMouseLeave={() => {
                  setMenuDropdown({ activeMenu: "", status: false });
                }}
              >
                {/* Training Options */}
                <Link href="/training/infor">
                  <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                    Infor
                  </p>
                </Link>
                <Link href="/training/jd-edwards">
                  <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                    JD Edwards
                  </p>
                </Link>
                <Link href="/training/as400">
                  <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                    IBM i (AS/400)
                  </p>
                </Link>
                <Link href="/training/sap">
                  <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                    SAP
                  </p>
                </Link>
              </div>
            )}
            {/* END OF UPDATED TRAINING LINK FOR MOBILE SCREENS */}
            <div
              className="group dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-500 relative cursor-pointer"
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
                  <div className="flex flex-col items-start justify-center gap-2">

        {/* Eventify Connect Link */}
        <Link 
          href="/eventify-connect"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">✨</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">Eventify Connect</span>
        </Link>

        {/* Restaurant Management System Link */}
        <Link 
          href="/restaurant-management-system"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">🍽️</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">Restaurant Management system</span>
        </Link>

        {/* PPF Cutting Software Link */}
        <Link 
          href="/ppf-cutting-software"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">✂️</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">PPF cutting Software</span>
        </Link>
        <Link 
          href="/ai-agent"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">🤖</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">AI Agent</span>
        </Link>
        </div>
                </div>
              </div>
            )}
            <Link
              className="dark:text-neutral-200 text-[#1a1a1a] hover:text-primary-pink transition-all transform duration-300 relative text-lg"
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
      {/* for bigger screens */}
      <div
        className={`absolute flex-[85%] w-full transform transition-all duration-700 ease-in-out top-[7rem] left-0 right-0 bg-[#ffffff] dark:bg-neutral-800 backdrop-blur-md hidden xl:flex items-start justify-center ${
          menuDropdown.status &&
          (menuDropdown.activeMenu === "Services" ||
            menuDropdown.activeMenu === "Products" ||
            menuDropdown.activeMenu === "Training")
            ? "bottom-0 opacity-95 z-10"
            : "bottom-full opacity-0 -z-10"
        }`}
      >
        {menuDropdown.activeMenu === "Training" && (
          <div
            className="w-[80%] h-fit flex flex-row items-start justify-start gap-4 py-[4rem]"
            onMouseLeave={() => {
              setMenuDropdown({ activeMenu: "", status: false });
            }}
          >
            <div className="flex flex-col items-start justify-start gap-4 tracking-wide">
                <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
                  Specialized Technical Training
                </p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <Link href="/training/infor">
                    <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      Infor
                    </p>
                  </Link>
                  <Link href="/training/jd-edwards">
                    <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      JD Edwards
                    </p>
                  </Link>
                  <Link href="/training/as400">
                    <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      IBM i (AS/400)
                    </p>
                  </Link>
                  <Link href="/training/sap">
                    <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      SAP
                    </p>
                  </Link>
                </div>
            </div>
          </div>
        )}
        {menuDropdown.activeMenu === "Products" && (
          <div
            className="w-[80%] h-fit flex flex-row items-start justify-start gap-4 py-[4rem]"
            onMouseLeave={() => {
              setMenuDropdown({ activeMenu: "", status: false });
            }}
          >
            <div className="flex flex-col items-start justify-center gap-2">

        {/* Eventify Connect Link */}
        <Link 
          href="/eventify-connect"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">✨</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">Eventify Connect</span>
        </Link>

        {/* Restaurant Management System Link */}
        <Link 
          href="/restaurant-management-system"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">🍽️</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">Restaurant Management system</span>
        </Link>

        {/* PPF Cutting Software Link */}
        <Link 
          href="/ppf-cutting-software"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">✂️</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">PPF cutting Software</span>
        </Link>
        <Link 
          href="/ai-agent"
          className="group flex items-center gap-3 w-full p-2 rounded-lg text-lg font-medium text-[#1a1a1a] dark:text-neutral-200 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 transform transition-all duration-300 hover:text-primary-pink cursor-pointer"
        >
          <span className="text-2xl text-primary-pink group-hover:animate-pulse">🤖</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">AI Agent</span>
        </Link>
                </div>
          </div>
        )}
        {menuDropdown.activeMenu === "Services" && (
  <div
    className="w-[80%] h-fit flex flex-row flex-wrap items-stretch justify-between gap-8"
    onMouseLeave={() => {
      setMenuDropdown({ activeMenu: "", status: false });
    }}
  >
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Digital Experience Solutions
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/custom-app-development"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Custom Application Development (Web & Mobile)
          </p>
        </Link>
        <Link href={"/services/digital-marketing"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Digital Marketing & Growth
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Enterprise Application Services
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/infor-solutions"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Infor Solutions Practice
          </p>
        </Link>
        <Link href={"/services/sap-solutions"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            SAP Solutions Practice
          </p>
        </Link>
        <Link href={"/services/jd-edwards-solutions"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            JD Edwards Solutions
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        Talent Development & IT Staffing
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/corporate-it-training"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Corporate IT Training Programs
          </p>
        </Link>
        <Link href={"/services/staffing"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Specialized Staffing Solutions
          </p>
        </Link>
      </div>
    </div>
    <div className="min-w-[200px] flex flex-col items-stretch justify-start gap-4 tracking-wide">
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start">
        AI, Data & Intelligent Automation
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/ai-solutions"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            AI powered solutions
          </p>
        </Link>
        <Link href={"/services/workflow-automation"}>
          <p className="text-lg font-neutral text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Work flow Automation Solutions
          </p>
        </Link>
      </div>
      <p className="text-xl font-semibold text-[#e63946] dark:text-neutral-500 text-start mt-4">
        Product Development
      </p>
      <div className="flex flex-col items-start justify-center gap-2">
        <Link href={"/services/product-development"}>
          <p className="text-lg text-[#1a1a1a] dark:text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
            Product Development
          </p>
        </Link>
      </div>
    </div>
    
    {/* Others Column */}
    <div className="w-full sm:min-w-[200px] flex flex-col items-start justify-start gap-4 tracking-wide">
      {/*<p className="text-xl font-semibold text-neutral-500">Others</p>
      <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      NexaInnov for business
                    </p>
                    <p className="text-lg font-neutral text-neutral-200 transform transition-all duration-300 hover:text-primary-pink cursor-pointer">
                      Stories
                    </p>
      </div>*/}
    </div>
  </div>
)}
      </div>
    </>
  );
};

export default NavbarComponent;