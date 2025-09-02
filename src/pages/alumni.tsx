import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

const alumniData = [
  {
    name: "Adithya Rama",
    journey: "From Software Development Intern at Nexainnov → to Master at Australia",
    testimonial: "Nexainnov's hands-on approach and mentorship helped me develop the skills and confidence I needed to succeed in my career. I'm grateful for the experience and opportunities I had there.",
    currentRole: "Master at Australia",
    achievements: "Published author on machine learning applications",
    //imageUrl: "/images/adithya-rama.jpg" // Placeholder for an image
  },
  {
    name: "Chirag A.K",
    journey: "From Software Development Intern at Nexainnov → to Software Engineer at Amazon",
    testimonial: "The real-world projects and collaborative environment at Nexainnov were instrumental in preparing me for the challenges of working at a top-tier company like Amazon. The mentorship was invaluable.",
    currentRole: "Software Engineer at Amazon"
  },
  {
    name: "Keerthana Bhat",
    journey: "From Software Development Intern at Nexainnov → to Software Engineer at Elsevier",
    testimonial: "The training and support I received at Nexainnov were second to none. It gave me a strong technical foundation that directly contributed to my success in my current role.",
    currentRole: "Software Engineer at Elsevier"
  },
  {
    name: "Shraddha K",
    journey: "From Software Development Intern at Nexainnov → to Software Engineer at Infosys",
    testimonial: "I credit my internship at Nexainnov for my smooth transition into the corporate world. The skills I gained were directly applicable and set me apart from other candidates.",
    currentRole: "Software Engineer at Infosys"
  },
];

export default function Alumni() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>Nexainnov Alumni - Our Pride</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">Nexainnov Alumni - Our Pride ✨</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-12">
          Celebrating the journeys of our alumni who are now making an impact in leading companies.
        </p>

        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Alumni Have Made Their Mark At...</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">Masters at Australia</span>
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">Amazon</span>
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">Infosys</span>
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">EG Denmark</span>
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">Elsevier</span>
            <span className="bg-gray-800 text-lg py-2 px-4 rounded-full">GalaxE Solutions</span>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Alumni Stories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniData.map((alumnus, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                {/*{alumnus.imageUrl && (
                  <img
                    src={alumnus.imageUrl}
                    alt={alumnus.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                )}*/}
                <h3 className="text-2xl font-semibold text-center text-primary-pink mb-2">{alumnus.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-4">{alumnus.journey}</p>
                <blockquote className="italic border-l-4 border-primary-pink pl-4 text-gray-300 mb-4">
                  "{alumnus.testimonial}"
                </blockquote>
                {alumnus.currentRole && (
                  <p className="text-sm font-medium text-gray-200">
                    <span className="font-bold">Current Role:</span> {alumnus.currentRole}
                  </p>
                )}
                {alumnus.achievements && (
                  <p className="text-sm font-medium text-gray-200 mt-2">
                    <span className="font-bold">Achievements:</span> {alumnus.achievements}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Share Your Story!</h2>
          <p className="text-xl mb-6">
            Are you a Nexainnov alumnus with a story to tell? We'd love to hear it.
          </p>
          <Link href="/contact" className="bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">
            Submit Your Alumni Story
          </Link>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}