// src/data/trainers.ts

export interface Trainer {
  slug: string; // Unique identifier for the URL (e.g., 'rasika-jayathilake')
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

export const allTrainers: Trainer[] = [
  {
    slug: "rasika-jayathilake",
    name: "Rasika Jayathilake",
    title: "Lead ERP Consultant (Sales, Logistics, Distribution, Purchasing, Manufacturing)",
    education: "MSc, BSc Engineer & Infor M3-Certified Functional Consultant",
    experienceYears: 17,
    expertiseAreas: [
      "Expertise in Infor M3: gather requirements, develop innovative solutions and produce designs that meet and exceed Customer’s expectations.",
      "Worked extensively with small- to mid-sized global organizations and has experience in various industry types: manufacturing, distribution, fashion, food & beverages.",
      "Worked in various roles in Infor M3 project and interacted with clients effectively to understand the business needs and addressed their requirements."
    ],
    m3Modules: [
      "Sales Management",
      "Logistics",
      "Purchasing",
      "Warehousing",
      "Manufacturing"
    ],
    projectExperience: [
      "Mowi", "Galderma", "Aalberts IPS", "Orkla Group", "Formfin", "EA Smith",
      "Byggern", "Meira", "Biomar", "Brandix Group", "Prima Group", "MTB-USA",
      "Enchante-USA", "AGS-UK", "ESAB-UK", "Sutton Tools-Australia"
    ],
    email: "kraeyglobe@gmail.com",
    imageUrl: "/images/trainer.jpg", // Make sure this image exists in your /public directory
  },
  // Add more trainers here in the future
  // {
  //   slug: "john-doe",
  //   name: "John Doe",
  //   title: "Senior M3 Financial Consultant",
  //   education: "BBA in Finance",
  //   experienceYears: 10,
  //   expertiseAreas: [
  //     "Specialized in Infor M3 Financials, including GL, AP, AR.",
  //     "Helped numerous clients optimize financial processes."
  //   ],
  //   m3Modules: ["Financials", "Project Accounting"],
  //   projectExperience: ["ClientA", "ClientB"],
  //   email: "john.doe@example.com",
  //   imageUrl: "/images/john-doe.jpg",
  // },
];