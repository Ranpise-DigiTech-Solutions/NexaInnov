// src/components/TrainerProfile.tsx
import React from "react";
import Image from "next/image";
// Importing icons from react-icons/fa. Make sure you have react-icons installed.
// npm install react-icons or yarn add react-icons
import { FaGraduationCap, FaBriefcase, FaBuilding, FaEnvelope, FaLink } from "react-icons/fa";


// Define the interface for the Trainer data structure
// This should match the Trainer interface in src/data/trainers.ts
interface TrainerDetails {
  slug: string;
  name: string;
  title: string;
  education: string;
  experienceYears: number;
  expertiseAreas: string[];
  m3Modules: string[];
  projectExperience: string[];
  email: string;
  imageUrl: string; // Path to the trainer's image in public folder
}

interface TrainerProfileProps {
  trainer: TrainerDetails;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  return (
    
    <div className="bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-secondary-purple/30 text-white animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Trainer Image/Avatar */}
        {trainer.imageUrl && (
          <div className="flex-shrink-0">
            <Image
              src={trainer.imageUrl}
              alt={trainer.name}
              width={180} // Adjust size as needed
              height={180} // Adjust size as needed
              className="rounded-full object-cover border-4 border-primary-pink shadow-lg"
              quality={90}
            />
          </div>
        )}

        {/* Trainer Basic Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text leading-tight mb-2">
            {trainer.name}
          </h2>
          <p className="text-xl lg:text-2xl font-semibold text-neutral-300 mb-4">
            {trainer.title}
          </p>

          <div className="space-y-2 text-lg text-neutral-400">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaGraduationCap className="text-secondary-neon" /> {trainer.education}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaBriefcase className="text-secondary-neon" /> Over {trainer.experienceYears} years of M3 suite experience
            </p>
            {trainer.email && (
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-secondary-neon" /> <a href={`mailto:${trainer.email}`} className="hover:underline">{trainer.email}</a>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Expertise */}
      <div className="mt-10 space-y-8">
        <section>
          <h3 className="text-2xl font-bold text-primary-blue mb-4 flex items-center gap-2">
            <FaBuilding className="text-secondary-neon" /> About My Expertise
          </h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-lg">
            {trainer.expertiseAreas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-primary-blue mb-4 flex items-center gap-2">
            <FaLink className="text-secondary-neon" /> Strong Understanding in M3 Modules
          </h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-lg">
            {trainer.m3Modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-primary-blue mb-4 flex items-center gap-2">
            <FaBriefcase className="text-secondary-neon" /> Key Project Experience
          </h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-lg">
            {trainer.projectExperience.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TrainerProfile;