"use client"; // Mark as a Client Component to use useState, useEffect, localStorage
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
// Removed imported Button as we define a custom one below
// import { Button } from "@/components/ui/button"; 
import { courseList, Course } from "@/data/courses";
import {
  FaChalkboardTeacher,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";
import { toast, Toaster } from 'sonner'; // Updated to import Toaster from sonner
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import { Send } from "lucide-react"; // Import Send icon for the button

// --- NEW CONSTANTS FOR FORM SELECTS ---
const inforModules = [
  "Infor M3 Full Program",
  "Product Data & General Settings (PDG)",
  "Customer Order Management (COM)",
  "Warehouse Management (WHM)",
  "Purchase Order Management (POM)",
  "Manufacturing Order Management (MOM)",
  "Others",
];
const trainingLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];
const trainingModes = [
  "Online"
];

// --- Reusable UI Components (for consistency) ---
// NOTE: Added 'name={id}' attribute to ensure form data is captured correctly.
const Input = ({ label, id, type = "text", placeholder, required = false }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      name={id} // Crucial for form data
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

const Select = ({ label, id, options, required = false }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id} // Crucial for form data
      required={required}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    >
      {options.map((option: string) => (
        <option key={option} value={option.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label, id, placeholder, required = false }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id} // Crucial for form data
      rows={4}
      placeholder={placeholder}
      required={required}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

// Renaming this to CustomButton to match the old naming convention for UI component clarity
const CustomButton = ({ children, onClick, className = "", type = "button", disabled = false }: any) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`button-primary-gradient px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-primary-pink/50 transition-all duration-300 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);
// --------------------------------------------------------------------------


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
  // Removed unused userName and userEmail states

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

  // --- NEW FUNCTION TO HANDLE FORM SUBMISSION ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // Start loading state

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    // Basic client-side validation
    const userEmail = formObject.email;
    if (!userEmail || typeof userEmail !== 'string' || !userEmail.includes('@') || !userEmail.includes('.')) {
      toast.error("Please enter a valid email address.");
      setIsSending(false);
      return;
    }
    
    // Check for "Select Module" or "Select Level" placeholder values
    if (formObject.preferredModule === 'select-module') {
      toast.error("Please select a Preferred Infor Module.");
      setIsSending(false);
      return;
    }
    if (formObject.trainingLevel === 'select-level') {
      toast.error("Please select a Training Level.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'enquiry', // Updated type for full form submission
          courseTitle: course.title,
          courseSlug: course.slug,
          durationInHours: course.durationInHours,
          selectedRegion: currentRegion,
          hourlyRate: hourlyRate,
          currency: currency,
          totalFee: totalFee, // Include calculated fee

          // Form Data Fields
          fullName: formObject.fullName,
          userEmail: formObject.email,
          phone: formObject.phone,
          role: formObject.role,
          preferredModule: formObject.preferredModule,
          trainingLevel: formObject.trainingLevel,
          topics: formObject.topics,
          trainingMode: formObject.trainingMode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Training enquiry sent successfully! We'll be in touch.");
        e.currentTarget.reset(); // Clear form on successful submission
      } else {
        toast.error(data.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending inquiry email:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSending(false); // End loading state
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      {/* Add Toaster for sonner messages */}
      <Toaster position="top-center" richColors />
      
      {/* Decorative background elements (same as CourseList) */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <NavbarComponent></NavbarComponent>
      <div className="max-w-5xl mx-auto space-y-16 py-8 relative">

        {/* Workshop Header */}
        <header className="text-center space-y-4 animate-fade-in-down">
          <p className="text-lg font-extrabold tracking-widest uppercase text-primary-pink">
            Specialized Training
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            🚀 <span className="gradient-text">ERP Infor M3 Training Workshop</span>
          </h1>
          <p className="text-xl text-primary-blue dark:text-neutral-300 font-semibold mt-2 animate-fade-in delay-200">
            Modular • Hands-on • Expert-led
          </p>
          <p className="italic text-neutral-800 dark:text-neutral-400 text-base animate-fade-in delay-300">
            Trainer with 24 yrs of experience
          </p>
          <p className="text-neutral-500 text-sm font-medium animate-fade-in delay-400">
            Powered by Nexainnov Academy
          </p>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center bg-orange-400 dark:bg-neutral-800 rounded-3xl p-8 shadow-2xl hover:shadow-primary-blue/40 transition-shadow duration-300 transform hover:-translate-y-2 animate-slide-in-bottom">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary-blue">{course.title}</h2>
            <p className="text-white dark:text-neutral-300 text-lg">{course.subtitle}</p>
            <p className="text-neutral-800 sark:text-neutral-400 leading-relaxed text-base">{course.description}</p>

            <ul className="space-y-3 text-white dark:text-neutral-400 text-base">
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
              <span className="text-neutral-800 dark:text-neutral-500 text-base font-normal ml-2">
                Scroll down to the enquiry form for regional pricing and customization options.
              </span>
            </div>

            {/* Replaced old button with scroll-to-form action */}
            <CustomButton
              className="w-full md:w-auto flex items-center justify-center gap-2"
              onClick={() => {
                document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Enquiry Below! <Send size={20} />
            </CustomButton>
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
                  className="bg-primary-blue dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-secondary-neon/40 transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden group animate-slide-in-bottom"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <FaBookOpen className="absolute -right-4 -bottom-4 text-white dark:text-neutral-700 opacity-30 text-6xl group-hover:opacity-60 transition-opacity duration-300 z-0" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white dark:text-neutral-200 group-hover:text-secondary-neon transition-colors duration-300">{lesson.title}</h3>
                    <p className="text-white dark:text-neutral-400 mt-2">{lesson.objective}</p>
                    <p className="text-white dark:text-neutral-500 italic mt-4 flex items-center gap-2">
                      <FaClock className="text-secondary-neon" /> {lesson.time}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Important Notes */}
        <section className="bg-orange-400 dark:bg-neutral-800 rounded-3xl p-8 shadow-xl border border-secondary-purple/30 animate-fade-in delay-600">
          <h2 className="text-2xl font-semibold text-primary-pink mb-4 flex items-center gap-2">
            <span className="text-secondary-neon">⚠️</span> Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white dark:text-neutral-400 text-base">
            <li>Test database access must be arranged at least 3 days before training starts.</li>
            <li>Nexainnov Academy does not claim ownership of the Infor M3 brand, software, or content.</li>
          </ul>
        </section>
        
        {/* --- NEW: ENQUIRY FORM SECTION --- */}
        <section id="enquiry-form" className="py-20 bg-gray-100 dark:bg-neutral-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 md:p-12 border-t-4 border-primary-pink">
              <h3 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
                Infor Training Enquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Full Name" id="fullName" placeholder="Alice Smith" required />
                  <Input label="Email Address" id="email" type="email" placeholder="alice.smith@example.com" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Phone Number" id="phone" type="tel" placeholder="(123) 456-7890" required />
                  <Input label="Current Role / Experience Level" id="role" placeholder="M3 Consultant, 3 years" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Preferred Infor Module"
                    id="preferredModule"
                    options={["Select Module", ...inforModules]}
                    required
                  />
                  <Select
                    label="Training Level"
                    id="trainingLevel"
                    options={["Select Level", ...trainingLevels]}
                    required
                  />
                </div>
                <Textarea
                  label="Specific Issues or Topics You’d Like Covered"
                  id="topics"
                  placeholder="E.g., M3 CloudSuite migration, advanced POM configuration, MOM variant handling..."
                />

                <Select
                  label="Preferred Training Mode"
                  id="trainingMode"
                  options={["Select Mode", ...trainingModes]}
                  required
                />

                <div className="pt-4 text-center">
                  <CustomButton 
                    type="submit" 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending Enquiry...' : <>Submit Enquiry <Send size={20} /></>}
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* --- END: NEW ENQUIRY FORM SECTION --- */}
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

// Section with icon and NexaInnov style bullet points (unchanged)
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-5 animate-fade-in delay-500">
      <h2 className="text-3xl font-bold text-primary-blue">{title}</h2>
      <ul className="space-y-3 pl-5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-neutral-800 dark:text-neutral-300 text-base sm:text-lg group"
          >
            <FaCheckCircle className="mt-1 text-primary-pink group-hover:text-secondary-neon transition-colors duration-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// The static generation functions remain unchanged
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: courseList.map((c) => ({ params: { slug: c.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const course = courseList.find((c) => c.slug === params?.slug);
  if (!course) return { notFound: true };
  return { props: { course } };
};