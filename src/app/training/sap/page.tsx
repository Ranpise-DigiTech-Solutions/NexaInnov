"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight, Send, Loader2 } from "lucide-react";
import NavbarComponent from "@/components/common/navbar"; 
import Footer from "@/components/common/footer";

// --- Placeholder UI Components (Updated Select component from AS/400 for consistency) ---
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
      name={id}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

// REPLACED: Using the Select component logic from the AS/400 file to handle disabled placeholders correctly
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
      name={id}
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
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <div className="grid grid-cols-2 gap-3">
      {options.map((option: string) => (
        <label key={option} className="flex items-center gap-2 text-sm">
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
      name={id}
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-50 focus:ring-primary-pink focus:border-primary-pink transition-colors"
    />
  </div>
);

// Updated Button to include a loading state and disable logic
const Button = ({ children, onClick, className = "", type = "button", isLoading = false, disabled = false }: any) => (
  <button
    type={type}
    onClick={onClick}
    // Combine loading and explicit disabled prop
    disabled={isLoading || disabled} 
    className={`button-primary-gradient px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 ${
      isLoading || disabled
        ? 'opacity-50 cursor-not-allowed' 
        : 'hover:shadow-primary-pink/50'
    } ${className}`}
  >
    {isLoading ? (
      <span className="flex items-center gap-2">
        <Loader2 size={20} className="animate-spin" /> Submitting...
      </span>
    ) : (
      children
    )}
  </button>
);
// --------------------------------------------------------------------------

// --- Configuration Data (COPIED from AS/400 and ADJUSTED for SAP) ---
const TRAINING_HOURS = 40; 
const sapModules = [
  "FI (Finance)",
  "CO (Controlling)",
  "MM (Materials Management)",
  "SD (Sales & Distribution)",
  "PP (Production Planning)",
  "HCM",
  "ABAP (Technical)",
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
  "USA",
  "Canada",
  "UK",
  "Europe",
  "UAE",
  "Asia",
];

// Reusing the price logic structure with unique SAP-specific rates
const getRegionPrice = (region: string) => {
  switch (region.toLowerCase()) {
    case "usa":
    case "canada":
      return { price: 75, currency: "USD" }; // SAP hourly rate 1
    case "uk":
    case "europe":
      return { price: 69, currency: "USD" }; // SAP hourly rate 2
    case "uae":
    case "asia":
      return { price: 63, currency: "USD" }; // SAP hourly rate 3
    default:
      // Default to a middle price if region is unselected/unknown
      return { price: 69, currency: "USD" };
  }
};
// --------------------------------------------------------------------------

const SAPTrainingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "", 
    phone: "",
    role: "",
    preferredModule: [] as string[], 
    trainingLevel: "", 
    topics: "",
    trainingMode: "", 
    selectedRegion: "", 
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev: any) => ({
        ...prev,
        preferredModule: checked
          ? [...prev.preferredModule, value]
          : prev.preferredModule.filter((module: string) => module !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // NEW LOGIC: Calculate total fee based on selected region
    const { price, currency } = getRegionPrice(formData.selectedRegion);
    const totalFee = price * TRAINING_HOURS; 

    const payload = {
      type: 'enquiry', 
      courseTitle: 'SAP Functional & Technical Training', 
      courseSlug: 'sap-training-comprehensive', 
      durationInHours: TRAINING_HOURS,
      hourlyRate: price,
      currency: currency,
      totalFee: totalFee,

      ...formData,
      preferredModule: formData.preferredModule.join(", "),
      userEmail: formData.email,
      email: undefined, 
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
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            role: "",
            preferredModule: [] as string[],
            trainingLevel: "",
            topics: "",
            trainingMode: "",
            selectedRegion: "", 
        });
      } else {
        setStatus('error');
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
      }
    } catch (error) {
      setStatus('error');
      console.error("An unexpected error occurred:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Disable button if any required field is empty ("")
  const isFormValid =
  formData.fullName &&
  formData.email &&
  formData.phone &&
  formData.role &&
  formData.trainingLevel &&
  formData.trainingMode &&
  formData.selectedRegion &&
  formData.preferredModule.length > 0;
  
  // Optional: Display current pricing based on region
  const currentRegionPricing = formData.selectedRegion 
    ? getRegionPrice(formData.selectedRegion) 
    : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"> 
        <NavbarComponent />
      
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-primary-blue dark:bg-neutral-800">
        <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title & Description */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              SAP Functional & Technical Training
            </h1>
            <h2 className="text-2xl font-semibold text-primary-pink">
              Role-Based, Real-Time, and Industry-Driven Learning
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Empower Your SAP Expertise with Practical, Hands-On Training: Learn SAP not from theory — but from real-world business scenarios. Get trained on functional and technical modules, production issues, and everyday challenges faced by SAP professionals across industries.
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
                    src="/images/sap.jpg" 
                    alt="SAP Training" 
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
              Begin Your SAP Journey with Nexainnov Academy: Master SAP through immersive, real-time learning led by certified SAP consultants. Our curriculum bridges functional understanding with practical execution — empowering you to handle live systems, production tickets, and cross-module integrations confidently.
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
              SAP Training Enquiry
            </h3>
            
            {/* Submission Status Message (Updated to use AS/400 styles) */}
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
                <Input label="Full Name" id="fullName" placeholder="Jane Doe" required value={formData.fullName} onChange={handleChange} />
                <Input label="Email Address" id="email" type="email" placeholder="jane.doe@example.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Phone Number" id="phone" type="tel" placeholder="(123) 456-7890" required value={formData.phone} onChange={handleChange} />
                <Input label="Current Role / Experience Level" id="role" placeholder="SAP End User, 2 years" required value={formData.role} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CheckboxGroup
                  label="Preferred SAP Module"
                  id="preferredModule"
                  options={sapModules}
                  values={formData.preferredModule}
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
              
              {/* NEW REGION SELECTOR ADDED */}
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

              <Textarea
                label="Specific Issues or Topics You’d Like Covered"
                id="topics"
                placeholder="E.g., S/4HANA migration differences, advanced PP configuration, developing custom Fiori apps..."
                value={formData.topics}
                onChange={handleChange}
              />
              

              <div className="pt-4 text-center">
                <Button 
                    type="submit" 
                    isLoading={loading} 
                    disabled={!isFormValid} 
                    className="w-full md:w-auto"
                >
                  Submit Enquiry <Send size={20} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Training Coverage & Real-Time Focus (content unchanged) */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* Left Column: Training Coverage */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Training Coverage
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Comprehensive & Customizable Modules
              </p>
              
              {/* Module Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP FI (Financial Accounting)</h4>
                  <p className="text-sm">General Ledger, Accounts Payable/Receivable, Asset Accounting, Closing & Reporting</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP CO (Controlling)</h4>
                  <p className="text-sm">Cost Centers, Profit Centers, Internal Orders, Product Costing</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP MM (Materials Management)</h4>
                  <p className="text-sm">Procurement, Inventory Management, Vendor Evaluation</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP SD (Sales & Distribution)</h4>
                  <p className="text-sm">Order Processing, Pricing, Billing, Delivery</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP PP (Production Planning)</h4>
                  <p className="text-sm">BOM, Work Centers, MRP, Shop Floor Control</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP HCM (Human Capital Management)</h4>
                  <p className="text-sm">Organizational Management, Payroll, Time Management</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-blue sm:col-span-2">
                  <h4 className="font-bold mb-1 text-primary-blue dark:text-primary-pink">SAP ABAP (Technical Track)</h4>
                  <p className="text-sm">Reports, Interfaces, Enhancements, Forms, Debugging</p>
                </div>
              </div>
            </div>

            {/* Right Column: Real-Time Focus (content unchanged) */}
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
                  Functional flows mapped to real business processes.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Hands-on simulations of production issues and incident resolution.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Data setup, integration scenarios, and troubleshooting practice.
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="mt-1 flex-shrink-0 text-primary-pink" size={20} />
                  Cross-functional understanding between finance, materials, sales, and production modules.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Levels of Training & Highlights (content unchanged) */}
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
                  Understand SAP architecture, module overviews, and business process navigation within the GUI and Fiori Launchpad.
                </p>
              </div>

              {/* Intermediate Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Intermediate Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Master end-to-end transaction flows, data configuration, and cross-module integration required for complex processes.
                </p>
              </div>

              {/* Advanced Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Advanced / Production Support Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Handle real-time tickets, issue debugging, performance optimization, and advanced configuration changes.
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
                <span>Real-time case studies from SAP industry projects.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Trainers with 20+ years of SAP consulting experience.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Customized learning paths for corporate teams.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Guidance for SAP certification achievement.</span>
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

export default SAPTrainingPage;