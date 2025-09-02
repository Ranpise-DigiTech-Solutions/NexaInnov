"use client"; // Mark as a Client Component to use useState, useEffect, localStorage
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { courseList, Course } from "@/data/courses";
import {
  FaChalkboardTeacher,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from 'sonner'; // Assuming you have 'sonner' for toasts (optional, but good for UX)
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

// If you don't have 'sonner' installed, run:
// npm install sonner
// or
// yarn add sonner
// And ensure you have <Toaster /> component in your layout/root if using App Router.

// Same price function as before
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

type Props = { course: Course };

export default function CourseDetailsPage({ course }: Props) {
  const [currentRegion, setCurrentRegion] = useState<string>("USA");
  const [isSending, setIsSending] = useState<boolean>(false); // State for loading
  const [userName, setUserName] = useState<string>(''); // For optional user name
  const [userEmail, setUserEmail] = useState<string>(''); // For optional user email

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRegion = localStorage.getItem('userSelectedRegion');
      if (storedRegion) {
        const validRegions = ["USA", "Canada", "UK", "Europe", "UAE", "Asia"];
        if (validRegions.includes(storedRegion)) {
          setCurrentRegion(storedRegion);
        }
      }
    }
  }, []);

  const { price: hourlyRate, currency } = getRegionPrice(currentRegion);
  const totalFee = course.durationInHours * hourlyRate;

  // Function to handle the "Secure Your Spot Now!" button click
  const handleEnrollmentClick = async () => {
    // Basic client-side validation for contact info (you might want a modal for this)
    const enteredUserName = prompt("Please enter your name for the enrollment inquiry:");
    const enteredUserEmail = prompt("Please enter your email address for the enrollment inquiry:");

    if (!enteredUserEmail) {
      toast.error("Email address is required to submit the inquiry.");
      return;
    }
    if (!enteredUserEmail.includes('@') || !enteredUserEmail.includes('.')) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true); // Start loading state
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'enrollment', // This matches the schema in your API route
          courseTitle: course.title,
          courseSlug: course.slug,
          durationInHours: course.durationInHours,
          selectedRegion: currentRegion,
          hourlyRate: hourlyRate,
          currency: currency,
          totalFee: totalFee,
          userName: enteredUserName || undefined, // Send if provided, else undefined
          userEmail: enteredUserEmail, // User's email from prompt
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Enrollment inquiry sent successfully! We'll be in touch.");
        // Optionally clear form fields if you had them, or reset state
        setUserName('');
        setUserEmail('');
      } else {
        toast.error(data.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enrollment email:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSending(false); // End loading state
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-800 via-primary-black to-neutral-800 text-white p-6 sm:p-12 relative overflow-hidden">
      {/* Decorative background elements (same as CourseList) */}
      <NavbarComponent></NavbarComponent>
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto space-y-16 py-8 z-10 relative">

        {/* Workshop Header */}
        <header className="text-center space-y-4 animate-fade-in-down">
          <p className="text-lg font-extrabold tracking-widest uppercase text-primary-pink">
            Specialized Training
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            🚀 <span className="gradient-text">ERP Infor M3 Training Workshop</span>
          </h1>
          <p className="text-xl text-neutral-300 font-semibold mt-2 animate-fade-in delay-200">
            Modular • Hands-on • Expert-led
          </p>
          <p className="italic text-neutral-400 text-base animate-fade-in delay-300">
            Trainer: Rasika Jayathilake • 24 Years of ERP Expertise
          </p>
          <p className="text-neutral-500 text-sm font-medium animate-fade-in delay-400">
            Powered by Nexainnov Academy
          </p>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center bg-neutral-800 rounded-3xl p-8 shadow-2xl hover:shadow-primary-blue/40 transition-shadow duration-300 transform hover:-translate-y-2 animate-slide-in-bottom">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary-blue">{course.title}</h2>
            <p className="text-neutral-300 text-lg">{course.subtitle}</p>
            <p className="text-neutral-400 leading-relaxed text-base">{course.description}</p>

            <ul className="space-y-3 text-neutral-400 text-base">
              <li>
                <FaClock className="inline mr-2 text-secondary-neon" />
                <strong>{course.durationInHours} hours</strong> total duration
              </li>
              <li>
                <FaUsers className="inline mr-2 text-secondary-neon" />
                Small batch size (4–6 trainees)
              </li>
              <li>
                <FaChalkboardTeacher className="inline mr-2 text-secondary-neon" />
                Schedule: 6 hrs/day · 5 days/week
              </li>
            </ul>

            <div className="mt-6 text-3xl font-extrabold text-white">
              Investment:{" "}
              <span className="gradient-text">
                {currency} ${totalFee.toLocaleString()}
              </span>
              <span className="text-neutral-500 text-base font-normal ml-2">
                ({hourlyRate}/{currency}/hr)
              </span>
            </div>

            {/* Updated Button with onClick handler */}
            <Button
              className="bg-gradient-to-r from-secondary-blue to-primary-pink text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-primary-pink/50 transform hover:scale-105 transition-all duration-300 mt-6"
              onClick={handleEnrollmentClick}
              disabled={isSending} // Disable button while sending
            >
              {isSending ? 'Sending Inquiry...' : '📩 Secure Your Spot Now!'}
            </Button>
          </div>
        </section>

        {/* Content Sections */}
        <Section title="🎯 What You’ll Learn" items={course.objectives} />
        <Section title="📌 Learning Goals" items={course.goals} />
        <Section title="👥 Who Should Attend" items={course.audience} />

        {/* Lesson Plan */}
        {course.lessons.length > 0 && (
          <section className="space-y-8 animate-fade-in delay-500">
            <h2 className="text-3xl font-bold text-primary-blue">📚 Lesson Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.lessons.map((lesson, idx) => (
                <article
                  key={idx}
                  className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-secondary-neon/40 transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden group animate-slide-in-bottom"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Faded background icon */}
                  <FaBookOpen className="absolute -right-4 -bottom-4 text-neutral-700 opacity-30 text-6xl group-hover:opacity-60 transition-opacity duration-300 z-0" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-secondary-neon transition-colors duration-300">{lesson.title}</h3>
                    <p className="text-neutral-400 mt-2">{lesson.objective}</p>
                    <p className="text-neutral-500 italic mt-4 flex items-center gap-2">
                      <FaClock className="text-secondary-neon" /> {lesson.time}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Important Notes */}
        <section className="bg-neutral-800 rounded-3xl p-8 shadow-xl border border-secondary-purple/30 animate-fade-in delay-600">
          <h2 className="text-2xl font-semibold text-primary-pink mb-4 flex items-center gap-2">
            <span className="text-secondary-neon">⚠️</span> Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-3 text-neutral-400 text-base">
            <li>Test database access must be arranged at least 3 days before training starts.</li>
            <li>Nexainnov Academy does not claim ownership of the Infor M3 brand, software, or content.</li>
          </ul>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </main>
  );
}

// Section with icon and NexaInnov style bullet points
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-5 animate-fade-in delay-500">
      <h2 className="text-3xl font-bold text-primary-blue">{title}</h2>
      <ul className="space-y-3 pl-5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-neutral-300 text-base sm:text-lg group"
          >
            <FaCheckCircle className="mt-1 text-primary-pink group-hover:text-secondary-neon transition-colors duration-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: courseList.map((c) => ({ params: { slug: c.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const course = courseList.find((c) => c.slug === params?.slug);
  if (!course) return { notFound: true };
  return { props: { course } };
};