"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight, Send, Briefcase, BookOpen, TrendingUp } from "lucide-react";
import { Toaster, toast } from 'react-hot-toast'; 
import NavbarComponent from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import CourseListComponent from "@/app/(main)/training/_components/course-list";

// --- Data & Constants ---
const COURSE_TITLE = "Infor M3 Technical & Functional Training";
const COURSE_SLUG = "infor-m3-full-track";
const DURATION_IN_HOURS = 168; // Based on the "Full Track" description in the HTML

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

const availableRegions = [
  "Select Region",
  "USA",
  "Canada",
  "UK",
  "Europe",
  "UAE",
  "Asia",
];

// Reusing the price logic structure from CourseDetailsPage for consistency
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
      // Use a default region like 'Europe' if none is selected, but not for display
      return { price: 64, currency: "USD" };
  }
};

// --- Reusable UI Components (for consistency) ---
const Input = ({ label, id, type = "text", placeholder, required = false, value, onChange }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      name={id} 
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

const Select = ({ label, id, options, required = false, value, onChange }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id} 
      required={required}
      value={value}
      onChange={onChange}
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

const Textarea = ({ label, id, placeholder, required = false, value, onChange }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id} 
      rows={4}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

const CheckboxGroup = ({ label, id, options, values, onChange, required = false }: any) => (
  <div className="flex flex-col space-y-3">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((option: string) => (
        <label
          key={option}
          className="flex items-center gap-2 p-2 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-700"
        >
          <input
            type="checkbox"
            value={option}
            checked={values.includes(option)}
            onChange={onChange}
            className="accent-pink-500"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

const Button = ({ children, onClick, className = "", type = "button", disabled = false }: any) => (
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


const InforTrainingPage = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [currentRegion, setCurrentRegion] = useState<string>("Select Region");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  // Load region from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRegion = localStorage.getItem('userSelectedRegion');
      // Format stored region to match the display options (e.g., 'usa' -> 'USA')
      const formattedStoredRegion = storedRegion ? availableRegions.find(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-") === storedRegion.toLowerCase()) || 'Select Region' : 'Select Region';
      const validRegions = availableRegions.map(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-"));

      if (storedRegion && validRegions.includes(formattedStoredRegion.toLowerCase().replace(/[^a-z0-9]/g, "-"))) {
        setCurrentRegion(formattedStoredRegion);
      }
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModuleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedModules((prev) =>
      checked ? [...prev, value] : prev.filter((module) => module !== value)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const formObject: Record<string, FormDataEntryValue> = Object.fromEntries(formData.entries());

    // Client-side validation
    const userEmail = formObject.email;
    if (!userEmail || typeof userEmail !== 'string' || !userEmail.includes('@') || !userEmail.includes('.')) {
      toast.error("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    // Validation for dropdowns
    if (selectedModules.length === 0) {
      toast.error("Please select at least one Infor module.");
      setIsSending(false);
      return;
    }
    if (formObject.trainingLevel.toString().includes('select-level')) {
      toast.error("Please select a Training Level.");
      setIsSending(false);
      return;
    }
    const selectedRegionSlug = formObject.region.toString();
    if (selectedRegionSlug.includes('select-region')) {
      toast.error("Please select your Preferred Region.");
      setIsSending(false);
      return;
    }
    if (formObject.trainingMode.toString().includes('select-mode')) {
      toast.error("Please select your Preferred Training Mode.");
      setIsSending(false);
      return;
    }

    // Get price details based on selected region slug
    const selectedRegionName = availableRegions.find(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-") === selectedRegionSlug)?.toString() || 'Unknown';
    const { price: hourlyRate, currency } = getRegionPrice(selectedRegionName);
    const totalFee = DURATION_IN_HOURS * hourlyRate; // Calculate total fee

    try {
      // Construct the payload matching the 'enquiry' schema in route.ts
      const payload = {
        type: 'enquiry', 
        // Course/Pricing details
        courseTitle: COURSE_TITLE,
        courseSlug: COURSE_SLUG,
        durationInHours: DURATION_IN_HOURS,
        selectedRegion: selectedRegionName,
        hourlyRate: hourlyRate,
        currency: currency,
        totalFee: totalFee,
        fullName: formObject.fullName,
        userEmail: formObject.email, 
        phone: formObject.phone,
        role: formObject.role,
        preferredModule: selectedModules.join(", "),
        trainingLevel: availableRegions.find(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-") === formObject.trainingLevel)?.toString() || formObject.trainingLevel,
        trainingMode: availableRegions.find(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-") === formObject.trainingMode)?.toString() || formObject.trainingMode,
        topics: formObject.topics || '',
      };
      
      console.log("Sending Payload:", payload); // Log for debugging

      // ACTUAL API CALL
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Training enquiry sent successfully! We will contact you shortly.");
        e.currentTarget.reset(); 
        setCurrentRegion('Select Region'); 
        localStorage.setItem('userSelectedRegion', selectedRegionSlug); 
      } else {
        console.error("API Error Response:", data.errors || data.message);
        toast.error(data.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending inquiry email:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Finds the display name of the selected region
    const selectedValue = availableRegions.find(r => r.toLowerCase().replace(/[^a-z0-9]/g, "-") === e.target.value) || 'Select Region';
    setCurrentRegion(selectedValue);
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      {/* ADDED TOASTER COMPONENT */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* ----------------------- */}

      <NavbarComponent />

      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-primary-blue dark:bg-neutral-800">
        <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title & Description */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Infor M3 Technical & Functional Training
            </h1>
            <h2 className="text-2xl font-semibold text-primary-pink">
              Role-Based, Real-Time, and Industry-Driven Learning
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Master Infor M3 with Practical, Hands-On Training: Gain deep expertise in Infor's leading ERP, M3. Our programs are designed around live business scenarios, covering functional and technical modules to prepare you for real-world implementation and support.
            </p>
            <div className="pt-4">
              <Link href="#enquiry-form" onClick={handleScroll}>
                <Button className="flex items-center gap-2">
                  Enquire Now <ChevronRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
          {/* Right Column: ERP Image */}
          <div className="flex justify-center xl:justify-end">
            <div className="bg-white dark:bg-neutral-700 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                <Image 
                    src="/images/course_5.jpg" 
                    alt="Infor M3 Platform" 
                    width={500} 
                    height={350} 
                    className="w-full h-auto object-cover" 
                />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description / CTA */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-serif italic mb-8">
              Begin Your Infor M3 Journey with Nexainnov Academy: Master M3 through immersive, real-time learning led by certified Infor consultants. Our curriculum focuses on bridging module knowledge to cross-functional business execution.
            </p>
            <Link href="#enquiry-form" onClick={handleScroll}>
                <Button>
                    Enquire Now
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Enquiry Form Section */}
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
                <CheckboxGroup
                  label="Preferred Infor Modules"
                  id="preferredModule"
                  options={inforModules}
                  values={selectedModules}
                  onChange={handleModuleChange}
                  required
                />
                <Select
                  label="Training Level"
                  id="trainingLevel"
                  options={["Select Level", ...trainingLevels]}
                  required
                />
              </div>

              {/* --- ADDED REGION SELECT --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                    label="Preferred Training Mode"
                    id="trainingMode"
                    options={["Select Mode", ...trainingModes]}
                    required
                />
                <Select
                    label="Preferred Region (for Pricing)"
                    id="region"
                    options={availableRegions}
                    value={currentRegion.toLowerCase().replace(/[^a-z0-9]/g, "-")} 
                    onChange={handleRegionChange}
                    required
                />
              </div>
              {/* --- END REGION SELECT --- */}

              <Textarea
                label="Specific Issues or Topics You’d Like Covered"
                id="topics"
                placeholder="E.g., M3 CloudSuite migration, advanced POM configuration, MOM variant handling..."
              />

              <div className="pt-4 text-center">
                <Button type="submit" className="w-full md:w-auto flex items-center justify-center gap-2" disabled={isSending}>
                  {isSending ? 'Sending Enquiry...' : <>Submit Enquiry <Send size={20} /></>}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Training Coverage & Real-Time Focus (Customized for Infor M3) */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* Left Column: Training Coverage */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Training Coverage: Infor M3 Modules
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Comprehensive M3 Functional & Technical Tracks
              </p>
              
              {/* Module Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 PDG</h4>
                    <p className="text-sm">Product Data, General Settings, Customer & Supplier Masters</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 COM</h4>
                    <p className="text-sm">Customer Order Management, Pricing, Discounts, Order Processing</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 WHM</h4>
                    <p className="text-sm">Warehouse Management, Picking, Packing, Dispatch, Inventory Structure</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 POM</h4>
                    <p className="text-sm">Purchase Order Management, Receiving, Inspections, Procurement Statistics</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 MOM</h4>
                    <p className="text-sm">Manufacturing Order Management, Production Statistics, Variant Handling</p>
                </div>
                   <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                    <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">Infor M3 Full Track</h4>
                    <p className="text-sm">Comprehensive M3 Implementation and Support Program (168 hours)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Real-Time Focus */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Focus on Practical M3 Mastery
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Hands-On Scenarios for Real-World M3 Deployment
              </p>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Briefcase className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Live M3 Environments: Practice configuration and transaction flows directly on dedicated M3 systems.
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Cross-Module Integration: Understand the dependencies between COM, WHM, POM, and MOM.
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Production Troubleshooting: Simulated scenarios for bug resolution and handling support tickets.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Master data setup best practices for Item, Customer, and Supplier masters (PDG).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Levels of Training & Highlights */}
      <section className="py-20 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          
          {/* Levels of Training */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block mb-10">
              Levels of Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Beginner Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Fundamentals of Infor M3 navigation, system architecture, and basic transaction flows within one module (e.g., COM or POM).
                </p>
              </div>

              {/* Intermediate Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Intermediate Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Master module configuration, customize output forms, and handle common cross-module integration points.
                </p>
              </div>

              {/* Advanced Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Advanced / Production Support Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus on performance tuning, variant management (MOM), complex customizations, and full-scale production support.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block mb-10">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Infor M3 v13.4+ compatible and CloudSuite relevant content.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Expert trainers with 20+ years of M3 implementation experience.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Small batch format (4–6 participants) for dedicated attention.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Post-course support and Q&A (up to 4 hours) for full-track students.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Certificate of Completion issued by Nexainnov Academy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseListComponent />
      <Footer />
    </div>
  );
};

export default InforTrainingPage;