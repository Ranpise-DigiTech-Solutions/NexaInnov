// src/pages/trainers/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allTrainers, Trainer } from '@/data/trainer'; // Corrected import path from '@/data/trainer' to '@/data/trainers'

interface TrainersListPageProps {
  trainers: Trainer[];
}

export default function TrainersListPage({ trainers }: TrainersListPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 via-primary-black to-neutral-800 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-center animate-fade-in-down">
          Meet Our <span className="gradient-text">Expert Trainers</span>
        </h1>
        <p className="text-neutral-300 text-center text-lg max-w-2xl mx-auto animate-fade-in delay-200">
          Learn from industry veterans with extensive real-world experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {trainers.map((trainer, index) => (
            <Link key={trainer.slug} href={`/trainers/${trainer.slug}`} passHref>
              <div
                className="bg-neutral-800 rounded-3xl p-6 shadow-xl hover:shadow-primary-blue/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-primary-pink"
                  />
                </div>
                <h2 className="text-2xl font-bold text-neutral-200 group-hover:text-primary-blue transition-colors duration-300">
                  {trainer.name}
                </h2>
                {/* Apply line-clamp for the title */}
                <p className="text-neutral-400 text-base mt-1 line-clamp-2">
                  {trainer.title}
                </p>
                <p className="text-neutral-500 text-sm mt-2">
                  {trainer.experienceYears} Years of Experience
                </p>
                {/* Optional: If you want to show a short summary of expertise,
                  you might add a 'shortDescription' field to your Trainer interface
                  and display it here with line-clamp as well.
                  For now, we'll keep it concise to avoid overflow.
                */}
                <button className="mt-4 bg-gradient-to-r from-secondary-blue to-primary-pink text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Profile
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// getStaticProps to fetch all trainers for this listing page
export async function getStaticProps() {
  return {
    props: {
      trainers: allTrainers, // Pass all trainers data to the component
    },
  };
}