"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight, Send, Loader2 } from "lucide-react";

// Assuming these imports are correct based on your project structure
import NavbarComponent from "@/components/common/navbar";
import Footer from "@/components/common/footer";

// --- Configuration Data ---
const TRAINING_HOURS = 40; // Fixed duration for a standard course

const functionalAreas = [
  "Finance (GL, AP, AR)",
  "Distribution (SO, PO, Inventory)",
  "Manufacturing (MRP, BOM)",
  "HR / Payroll",
  "Technical / Developer (CNC, C BSFN)",
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
const experienceLevels = [
  "0–1 years (Fresher)",
  "1–3 years",
  "3–5 years",
  "5–8 years",
  "8+ years (Expert)",
];
const trainingRequirements = [
  "Oracle Standards Training (Functional Only)",
  "Full-Scale Training (Standards + Production Support Focus)"
];
const availableRegions = [
  "USA",
  "Canada",
  "UK",
  "Europe",
  "UAE",
  "Asia",
];

// Reusing the AS/400 price logic structure for hourly rates
const getRegionPrice = (region: string) => {
  switch (region.toLowerCase()) {
    case "usa":
    case "canada":
      // Price and currency are for the HOURLY RATE, not the total fee
      return { price: 70, currency: "USD" };
    case "uk":
    case "europe":
      return { price: 64, currency: "USD" };
    case "uae":
    case "asia":
      return { price: 58, currency: "USD" };
    default:
      // Default to a middle price if region is unselected/unknown
      return { price: 64, currency: "USD" };
  }
};

// --- Placeholder UI Components (Updated to handle state) ---
const Input = ({ label, id, type = "text", placeholder, required = false, value, onChange }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
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
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    >
      {options.map((option: string) => (
        <option
          key={option}
          value={option.startsWith("Select") ? "" : option} 
          disabled={option.startsWith("Select")}
        >
          {option}
        </option>
      ))}
    </select>
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
            name={id}
            className="accent-pink-500"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

const Textarea = ({ label, id, placeholder, required = false, value, onChange }: any) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      rows={4}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

const Button = ({ children, onClick, className = "", type = "button", disabled = false }: any) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`button-primary-gradient px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-primary-pink/50 transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    {children}
  </button>
);
// --------------------------------------------------------------------------


const JDEdwardsTrainingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "", 
    phone: "",
    role: "",
    functionalArea: [] as string[], 
    trainingLevel: "",
    trainingMode: "",
    experienceYears: "", 
    trainingRequirement: "", 
    selectedRegion: "", 
    topics: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev: any) => ({
        ...prev,
        functionalArea: checked
          ? [...prev.functionalArea, value]
          : prev.functionalArea.filter((area: string) => area !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }

    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Calculate total fee based on selected region
    const { price: hourlyRate, currency } = getRegionPrice(formData.selectedRegion);
    const totalFee = hourlyRate * TRAINING_HOURS; // Total fee calculation

    const payload = {
      type: "enquiry",
      courseTitle: "JD Edwards Functional & Technical Training",
      courseSlug: "jde-training-comprehensive",

      durationInHours: TRAINING_HOURS,
      hourlyRate: hourlyRate,
      currency: currency,
      totalFee: totalFee,

      selectedRegion: formData.selectedRegion,

      fullName: formData.fullName,
      userEmail: formData.email,
      phone: formData.phone,
      role: formData.role,

      preferredModule: formData.functionalArea.join(", "),

      trainingLevel: formData.trainingLevel,
      trainingMode: formData.trainingMode,
      topics: formData.topics,
    };
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        // Optionally reset form fields
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          role: "",
          functionalArea: [] as string[],
          trainingLevel: "",
          trainingMode: "",
          experienceYears: "",
          trainingRequirement: "",
          selectedRegion: "",
          topics: "",
        });
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // Check if all required fields (including the new ones) have a value
  const isFormValid =
  formData.fullName &&
  formData.email &&
  formData.phone &&
  formData.role &&
  formData.trainingLevel &&
  formData.trainingMode &&
  formData.experienceYears &&
  formData.trainingRequirement &&
  formData.selectedRegion &&
  formData.functionalArea.length > 0;
  
  // Calculate and display the estimated fee in the form if a region is selected
  const estimatedPricing = useMemo(() => {
    if (formData.selectedRegion) {
      const { price: hourlyRate, currency } = getRegionPrice(formData.selectedRegion);
      const total = hourlyRate * TRAINING_HOURS;
      return `${currency} ${total.toLocaleString()}`;
    }
    return "Select Region for Estimate";
  }, [formData.selectedRegion]);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      <NavbarComponent />

      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-primary-blue dark:bg-neutral-800">
        <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              JD Edwards Functional & Technical Training
            </h1>
            <h2 className="text-2xl font-semibold text-primary-pink">
              Practical, Role-Based, and Issue-Focused Learning
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              <span className="font-bold">Master JD Edwards functional skills with training from an Oracle-certified expert:</span> Learn JD
              Edwards from real-time business scenarios, not just theory. Get trained on functional areas,
              production issues, and day-to-day challenges faced by professionals.
            </p>
            <div className="pt-4">
              <Link href="#enquiry-form" onClick={handleScroll}>
                <Button className="flex items-center gap-2">
                  Enquire Now <ChevronRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end">
            <div className="bg-white dark:bg-neutral-700 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
              <Image
                src="/images/jd_edwards.jpg"
                alt="JD Edwards Training"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Description */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-serif italic">
              Embark on your JD Edwards journey with immersive, hands-on functional training delivered by
              Oracle-certified consultants, designed to equip you for real-world business challenges using
              Oracle’s best practices and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form Section (Updated with state and API logic) */}
      <section id="enquiry-form" className="py-20 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 md:p-12 border-t-4 border-primary-pink">
            <h3 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
              Request Training Information
            </h3>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 mb-6 bg-green-100 dark:bg-green-900 border border-green-400 rounded-lg text-green-700 dark:text-green-200 flex items-center gap-3">
                <CheckCircle size={24} />
                <p className="font-semibold">Success! Your enquiry has been submitted. We will contact you shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 mb-6 bg-red-100 dark:bg-red-900 border border-red-400 rounded-lg text-red-700 dark:text-red-200 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">!</div>
                <p className="font-semibold">Error! Failed to send your enquiry. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full Name" id="fullName" placeholder="John Doe" required value={formData.fullName} onChange={handleChange} />
                <Input label="Email Address" id="email" type="email" placeholder="john.doe@example.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Phone Number" id="phone" type="tel" placeholder="(123) 456-7890" required value={formData.phone} onChange={handleChange} />
                <Input label="Current Role / Experience Level" id="role" placeholder="Functional Consultant" required value={formData.role} onChange={handleChange} />
              </div>

              {/* Functional Area and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CheckboxGroup
                  label="Preferred Functional Area"
                  id="functionalArea"
                  options={functionalAreas}
                  values={formData.functionalArea}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Training Level"
                  id="trainingLevel"
                  options={["Select Level", ...trainingLevels]}
                  required
                  value={formData.trainingLevel}
                  onChange={handleChange}
                />
              </div>

              {/* Experience & Training Requirement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Number of Years of Experience"
                  id="experienceYears"
                  options={["Select Experience", ...experienceLevels]}
                  required
                  value={formData.experienceYears}
                  onChange={handleChange}
                />
                <Select
                  label="Training Requirement"
                  id="trainingRequirement"
                  options={["Select Requirement", ...trainingRequirements]}
                  required
                  value={formData.trainingRequirement}
                  onChange={handleChange}
                />
              </div>

              {/* Mode and Region (For Pricing) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Select
                  label="Preferred Training Mode"
                  id="trainingMode"
                  options={["Select Mode", ...trainingModes]}
                  required
                  value={formData.trainingMode}
                  onChange={handleChange}
                />
                <Select
                  label="Training Region"
                  id="selectedRegion"
                  options={["Select Region", ...availableRegions]}
                  required
                  value={formData.selectedRegion}
                  onChange={handleChange}
                />
              </div>

              {/* Topics */}
              <Textarea
                label="Specific Issues or Topics You’d Like Covered"
                id="topics"
                placeholder="E.g., Troubleshooting R34A101 issues, Advanced fixed assets setup..."
                value={formData.topics}
                onChange={handleChange}
              />
              


              <div className="pt-4 text-center">
                <Button type="submit" className="w-full md:w-auto flex items-center justify-center gap-2" disabled={loading || !isFormValid}>
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry <Send size={20} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Training Coverage & Real-Time Focus (Rest of the page content remains the same) */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Training Coverage
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Comprehensive & Customizable Modules
              </p>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-primary-blue dark:text-primary-pink">
                  Distribution & Logistics
                </h4>
                <p className="text-lg">Modules: Sales, Procurement, Inventory Management</p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-lg text-gray-700 dark:text-gray-300">
                  <li>JD Edwards EnterpriseOne Inventory Management Rel 9.2</li>
                  <li>JD Edwards EnterpriseOne Procurement for SCM Rel 9.2</li>
                  <li>JD Edwards EnterpriseOne Sales Order Management Rel 9.2</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Real-Time Focus
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Learn to Solve What You’ll Actually Face
              </p>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Functional flows mapped to your organization’s process.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Real-time incident simulations (production tickets & issue analysis).
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Hands-on troubleshooting practice in a controlled environment.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Cross-functional understanding between finance, manufacturing, and distribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Levels of Training & Highlights */}
      <section className="py-20 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block mb-10">
              Levels of Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Beginner Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Understand core modules, basic business processes, and navigation within the JD Edwards EnterpriseOne system.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Intermediate Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Master transaction flows, in-depth business process mapping, and advanced system setups and configurations.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Advanced / Production Support Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus on live issue handling, advanced troubleshooting, performance optimization, and system administration.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block mb-10">
              Why Train With Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Real-time case studies from industry projects.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Trainers with 20+ years of JD Edwards experience.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Custom learning path for corporate teams.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Guidance for JD Edwards certification achievement.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Certificate of completion issued by Nexainnov Academy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JDEdwardsTrainingPage;