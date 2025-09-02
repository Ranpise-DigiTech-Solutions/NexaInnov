// src/app/(main)/training/_components/course-list.tsx
"use client";
import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import Link from "next/link";
import Image from "next/image";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Button } from "@/components/ui/button";
import { courseList, Course } from "@/data/courses";
import { FaArrowRight } from "react-icons/fa";

// Define all possible regions for the dropdown
const allRegions = [
  "USA",
  "Canada",
  "UK",
  "Europe",
  "UAE",
  "Asia"
];

const getRegionPrice = (region: string) => {
  switch (region.toLowerCase()) {
    case "usa":
    case "canada":
      return { price: 70, currency: "USD" };
    case "uk":
    case "europe":
      return { price: 64, currency: "USD" };
    case "uae":
    case "asia":
      return { price: 58, currency: "USD" };
    default:
      return { price: 64, currency: "USD" }; // Default to Europe/UK price
  }
};

const CourseListComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("USA");

  // This currently fetched price is for the cards below, not the dropdown
  const { price, currency } = getRegionPrice(selectedRegion);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    // Save the selected region to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('userSelectedRegion', newRegion);
    }
  };

  // Effect to load initial region from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRegion = localStorage.getItem('userSelectedRegion');
      if (storedRegion && allRegions.includes(storedRegion)) {
        setSelectedRegion(storedRegion);
      }
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-neutral-800 to-primary-black relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-12 z-10">
        <div className="w-full flex flex-col items-center text-center gap-4">
          <p className="text-lg lg:text-xl font-extrabold tracking-widest uppercase text-primary-pink animate-fade-in-down">
            Elevate Your Expertise
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in-up">
            Our <span className="gradient-text">Popular Training Courses</span>
          </h2>
          <p className="text-neutral-300 text-base lg:text-lg max-w-2xl mt-2 animate-fade-in delay-200">
            Immerse yourself in hands-on training through expert-led workshops, tailored to equip professionals and enterprises with practical, in-demand skills
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in delay-300">
          <div className="flex items-center gap-2 text-neutral-300">
            <label htmlFor="region-select" className="text-lg font-semibold">
              Your Region:
            </label>
            <div className="relative">
              <select
                id="region-select"
                value={selectedRegion}
                onChange={handleRegionChange}
                className="block appearance-none w-full bg-neutral-700 border border-neutral-600 hover:border-primary-blue px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-neutral-200 cursor-pointer transition-colors duration-300"
              >
                {allRegions.map((region) => {
                  const regionInfo = getRegionPrice(region); // Get price for THIS region
                  return (
                    <option key={region} value={region}>
                      {`${region} (${regionInfo.currency} $${regionInfo.price}/hr)`}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/*<Link href="/courses" className="inline-flex items-center gap-2 text-neutral-200 text-lg font-semibold hover:text-primary-blue transition-colors duration-300 group">
            Explore All Courses
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>*/}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courseList.map((course: Course, index: number) => (
            <div
              key={course.slug}
              className="bg-neutral-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl hover:shadow-primary-blue/40 transition-all duration-500 transform hover:-translate-y-3 group animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                  quality={90}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="bg-secondary-neon text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Trending
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-2xl font-bold text-neutral-200 line-clamp-2 group-hover:text-primary-blue transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-neutral-400 text-base italic truncate">
                  Trainer: {course.trainer}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-extrabold text-primary-pink text-xl">4.7</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <StarOutlinedIcon key={i} className="text-secondary-neon text-xl" />
                    ))}
                    <StarOutlinedIcon className="text-neutral-500 text-xl" />
                  </div>
                  <span className="text-neutral-400 text-sm">(398,530 Reviews)</span>
                </div>

                <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-neutral-700/50">
                  <div className="flex flex-col">
                    <span className="font-extrabold text-primary-blue text-xl leading-none">
                      {currency} ${price}/hr
                    </span>
                    <span className="text-neutral-500 text-sm line-through mt-1">
                      {currency} ${price + 20}/hr
                    </span>
                  </div>
                  <Link href={`/courses/${course.slug}`} passHref>
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-secondary-blue to-primary-pink text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-primary-pink/50 transform hover:scale-105 transition-all duration-300"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-bottom {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; animation-delay: 0.2s; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-slide-in-bottom { animation: slide-in-bottom 0.6s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1); }
        .animation-delay-2000 { animation-delay: 2s; }

        .gradient-text {
            background-image: linear-gradient(270deg, var(--secondary-blue), var(--secondary-pink));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
      `}</style>
    </div>
  );
};

export default CourseListComponent;