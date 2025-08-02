// src/pages/trainers/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { allTrainers, Trainer } from '@/data/trainer'; // Import allTrainers data
import TrainerProfile from '@/components/TrainerProfile'; // Re-use the component we made earlier

interface TrainerPageProps {
  trainer: Trainer;
}

export default function TrainerDetailsPage({ trainer }: TrainerPageProps) {
  if (!trainer) {
    // This case should ideally not be hit with fallback: false,
    // but good for type safety or if fallback: true is used later.
    return (
      <div className="min-h-screen bg-primary-black text-white flex items-center justify-center">
        <p>Trainer not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 via-primary-black to-neutral-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <TrainerProfile trainer={trainer} />
      </div>
    </div>
  );
}

// getStaticPaths tells Next.js which paths to pre-render at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allTrainers.map((trainer) => ({
    params: { slug: trainer.slug }, // 'slug' must match the filename '[slug]'
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' or true if you want to generate pages on demand
  };
};

// getStaticProps fetches the data for each individual page
export const getStaticProps: GetStaticProps<TrainerPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const trainer = allTrainers.find((t) => t.slug === slug);

  if (!trainer) {
    return {
      notFound: true, // Show a 404 page if the trainer is not found
    };
  }

  return {
    props: {
      trainer,
    },
  };
};