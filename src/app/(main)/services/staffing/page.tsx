"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Example image path. PLEASE REPLACE WITH YOUR ACTUAL IMAGE PATH.
const STAFFING_IMAGE_PATH = "/images/staffing.jpg"; // Example: public/staffing.jpg

// --- Card component for the core offerings to improve readability ---
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center text-center p-6 bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 hover:scale-105 transition-transform duration-300"
    >
      <div className="mb-4 text-primary-pink">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

export default function StaffingPage() {
  return (
    <main className="min-h-screen bg-[#161616] text-neutral-400 font-inter py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mb-12"
        >
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={STAFFING_IMAGE_PATH}
              alt="Talent Acquisition and Staffing by Nexainnov Solutions"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl border border-neutral-700/50 object-cover w-full h-auto max-w-lg transition-transform duration-300 hover:scale-105"
              layout="responsive"
              priority
            />
          </div>

          {/* Right Side: Introduction & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-pink mb-6 leading-tight">
              Talent Acquisition Solutions
            </h1>
            <p className="mb-6 text-lg">
              At Nexainnov Solutions, we offer end-to-end talent acquisition services rooted in our strong domain expertise
              and a deep understanding of the technology and innovation landscape. As your strategic recruitment partner, we
              focus on delivering future-ready talent that aligns with your business goals and culture. We believe hiring
              is more than matching skillsets—it's about finding individuals who can grow with your organization.
            </p>
            <p className="text-xl font-semibold text-[#48e895]">
              Partner with Nexainnov to build a workforce that powers innovation and drives growth.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Core Offerings Section (card-based) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-8">Our Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              title="Permanent Hiring"
              description="Find long-term team members who will grow with your company and contribute to its future success."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 12 0"/><circle cx="8" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="16" x2="22" y1="11" y2="11"/></svg>}
            />
            <ServiceCard
              title="Contract / Temporary Staffing"
              description="Quickly scale your workforce for specific projects or short-term needs with skilled, vetted professionals."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="16" x2="22" y1="11" y2="11"/><line x1="19" x2="19" y1="8" y2="14"/></svg>}
            />
            <ServiceCard
              title="Executive & Leadership"
              description="Identify and recruit top-tier executives to guide your company and drive strategic growth."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown"><path d="m22 10-2-4-3-4-3 4-2 4-2-4-3-4-3 4-2 4h20z"/><path d="M12 15s-1.5 0-2-2"/></svg>}
            />
          </div>
        </motion.div>

        {/* --- Why Choose Us Section (simplified) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-12 p-8 bg-neutral-900 rounded-xl border border-neutral-800"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
            Why Choose Nexainnov?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-lg leading-relaxed">
                We recognize the challenges of sourcing the right talent at the right time. That’s why Nexainnov offers
                flexible pricing models, dedicated HR campaign managers, and a customized hiring approach tailored
                to your business needs.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                As one of the emerging recruitment partners in Mangalore, India, we know that collaboration is key to
                securing top-tier talent in any niche. Our scalable recruitment process is designed to help you source,
                assess, and onboard the most suitable candidates.
              </p>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed">
                In addition to staffing services, we offer research-driven talent consulting—leveraging our industry
                knowledge, network strength, and operational capabilities to help you make smarter hiring decisions, faster.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-lg">
                <li className="text-white">Agile & Consultative Approach</li>
                <li className="text-white">Quality-Driven & Efficient</li>
                <li className="text-white">Scalable Recruitment Process</li>
                <li className="text-white">Flexible Pricing Models</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
