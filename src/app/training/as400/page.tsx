"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight, Send, Loader2 } from "lucide-react";

// Assuming these imports are correct based on your previous message
import NavbarComponent from "@/components/common/navbar";
import Footer from "@/components/common/footer";

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
          value={option === "Select Track" || option === "Select Level" || option === "Select Mode" || option === "Select Region" ? "" : option}
          disabled={option.startsWith("Select")}
        >
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

// --- Configuration Data ---
const TRAINING_HOURS = 40; // Example fixed duration for a standard course

const trainingTracks = [
  "RPG Development",
  "CL Programming",
  "DB2 for i",
  "System Administration",
  "Modernization",
  "Integration",
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

// Reusing the price logic structure for consistency
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
      // Default to a middle price if region is unselected/unknown
      return { price: 64, currency: "USD" };
  }
};

const AS400TrainingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userEmail: "", // Changed from 'email' to 'userEmail' for consistency with the API schema
    phone: "",
    role: "",
    trainingTrack: [] as string[],
    trainingLevel: "",
    trainingMode: "",
    selectedRegion: "", // New field for region
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
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Reset status on change
    if (status !== 'idle') setStatus('idle');
  };

  const handleTrackChange = (track: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.trainingTrack.includes(track);

      return {
        ...prev,
        trainingTrack: alreadySelected
          ? prev.trainingTrack.filter((t) => t !== track)
          : [...prev.trainingTrack, track],
      };
    });

    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Calculate total fee based on selected region
    const { price, currency } = getRegionPrice(formData.selectedRegion);
    const totalFee = price * TRAINING_HOURS; // Total fee calculation

    const payload = {
      type: 'enquiry', // Matches the type in your API route
      courseTitle: 'IBM i (AS/400) Technical & Functional Training', // Static title
      courseSlug: 'as400-training-comprehensive', // Static slug
      durationInHours: TRAINING_HOURS,
      hourlyRate: price,
      currency: currency,
      totalFee: totalFee,
      preferredModule: formData.trainingTrack.join(", "), // Renamed to preferredModule for API
      // Spread the rest of the form data
      ...formData,
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
          userEmail: "",
          phone: "",
          role: "",
          trainingTrack: [] as string[],
          trainingLevel: "",
          trainingMode: "",
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

  const isFormValid = Object.values(formData).every(value => value.length > 0) && formData.selectedRegion.length > 0;
  
  const currentRegionPricing = getRegionPrice(formData.selectedRegion);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      <NavbarComponent />

      {/* 1. Hero Section (Unchanged) */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-primary-blue dark:bg-neutral-800">
        {/* ... Hero Content ... */}
        <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              IBM i (AS/400) Technical & Functional Training
            </h1>
            <h2 className="text-2xl font-semibold text-primary-pink">
              Real-World, Enterprise-Grade Learning
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Master the IBM i (AS/400) Platform with Practical, Hands-On Training: Gain expertise in one of the most reliable enterprise systems still powering global business operations. Learn IBM i (AS/400) through real-time exercises, project-based learning, and troubleshooting scenarios derived from actual production environments.
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
                src="/images/as_400.jpg" // Placeholder image for IBM i
                alt="IBM i AS/400 Platform" 
                width={500} 
                height={350} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Enquiry Form Section (Updated) */}
      <section id="enquiry-form" className="py-20 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-2xl rounded-xl p-8 md:p-12 border-t-4 border-primary-pink">
            <h3 className="text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
              AS/400 Training Enquiry
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
                <Input label="Email Address" id="userEmail" type="email" placeholder="john.doe@example.com" required value={formData.userEmail} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Phone Number" id="phone" type="tel" placeholder="(123) 456-7890" required value={formData.phone} onChange={handleChange} />
                <Input label="Current Role / Experience Level" id="role" placeholder="AS/400 Developer, 5 years" required value={formData.role} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Preferred Training Tracks <span className="text-red-500">*</span>
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {trainingTracks.map((track) => (
                      <label key={track} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={formData.trainingTrack.includes(track)}
                          onChange={() => handleTrackChange(track)}
                          className="accent-primary-pink"
                        />
                        {track}
                      </label>
                    ))}
                  </div>
                </div>
                <Select
                  label="Training Level"
                  id="trainingLevel"
                  options={["Select Level", ...trainingLevels]}
                  required
                  value={formData.trainingLevel}
                  onChange={handleChange}
                />
              </div>
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
                label="Specific Topics or Issues You’d Like Covered"
                id="topics"
                placeholder="E.g., ILE concepts, integrating RPG with REST APIs, SQL Query optimization..."
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

      {/* 3. Why Learn & Training Coverage (Unchanged) */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        {/* ... Section 3 Content ... */}
         <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* Left Column: Why Learn Section */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Why Learn IBM i (AS/400) at Nexainnov Academy?
              </h3>
              <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <li className="space-y-1">
                  <h4 className="font-bold text-primary-blue dark:text-primary-pink text-xl">Enterprise-Focused Learning</h4>
                  <p>Learn from industry professionals with real-world AS/400 project experience. Understand system operations, RPGLE development, and modernization workflows.</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-bold text-primary-blue dark:text-primary-pink text-xl">Hands-On Troubleshooting</h4>
                  <p>Gain exposure to actual production issues, job logs, message queues, and debugging — building confidence to handle real-time environments.</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-bold text-primary-blue dark:text-primary-pink text-xl">Cross-Domain Understanding</h4>
                  <p>Understand integration with open systems, APIs, and modernization strategies that keep IBM i relevant in today’s hybrid IT ecosystems.</p>
                </li>
              </ul>
            </div>

            {/* Right Column: Training Coverage */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold border-b-2 pb-2 border-primary-pink inline-block">
                Training Coverage
              </h3>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Comprehensive & Customizable Modules
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-pink">
                  <h4 className="font-bold mb-1">AS/400 Fundamentals</h4>
                  <p className="text-sm">System Overview, Object Architecture, Library Structures</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-pink">
                  <h4 className="font-bold mb-1">RPGLE & CL Programming</h4>
                  <p className="text-sm">Coding Standards, Error Handling, Subfiles, Service Programs</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-pink">
                  <h4 className="font-bold mb-1">DB2 for i</h4>
                  <p className="text-sm">SQL/400, Query Optimization, Database Design</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-pink">
                  <h4 className="font-bold mb-1">System Administration</h4>
                  <p className="text-sm">User Profiles, Job Scheduling, Backup & Restore, Security</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-primary-pink md:col-span-2">
                  <h4 className="font-bold mb-1">Modernization & Integration</h4>
                  <p className="text-sm">REST APIs, Node.js on IBM i, Open Source Tools Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Levels of Training & Highlights (Unchanged) */}
      <section className="py-20 bg-gray-100 dark:bg-neutral-800">
        {/* ... Section 4 Content ... */}
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
                  Get started with IBM i fundamentals, navigation (like PDM/SEU/RDi), and basic programming concepts.
                </p>
              </div>

              {/* Intermediate Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Intermediate Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Work with business process automation, advanced database design, and integrated program logic (ILE concepts).
                </p>
              </div>

              {/* Advanced Card */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-pink">
                <h4 className="text-xl font-bold mb-3 text-primary-blue dark:text-primary-pink">Advanced / Production Support Level</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Handle real-world performance tuning, complex debugging, production troubleshooting, and modernization tasks.
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
                <span>Real-time practice with IBM i systems.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Trainers with 20+ years of AS/400 experience.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Custom corporate training available.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Modernization projects & open system integration exposure.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 text-primary-pink mt-1" size={24} />
                <span>Certificate of Completion by Nexainnov Academy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AS400TrainingPage;