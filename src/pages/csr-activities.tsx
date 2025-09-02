
import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function CSRActivities() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>CSR Activities - Nexainnov Solutions</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4">CSR Activities 🌍</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">
          Our Commitment to a Better Tomorrow
        </p>

        <section className="mb-12">
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            At Nexainnov Solutions, we believe technology and business should go hand in hand with responsibility toward society, the environment, and the communities we serve. While our CSR journey is just beginning, our vision is clear — to create meaningful impact through sustainable initiatives.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Our CSR Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Responsibility</h3>
              <p className="text-gray-300">We view CSR as a duty to give back to society, while driving innovation in technology.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Collaboration</h3>
              <p className="text-gray-300">We plan to work with NGOs, communities, and educational institutions to maximize impact.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Sustainability</h3>
              <p className="text-gray-300">Every CSR initiative will align with values of inclusivity, ethics, and long-term sustainability.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Future Roadmap</h2>
          <div className="relative border-l-4 border-primary-pink pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              <p className="text-lg text-gray-300 font-semibold">[2025] Planning & Identifying CSR focus areas</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              <p className="text-lg text-gray-300 font-semibold">[2026] Launch of first community/education initiative</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              <p className="text-lg text-gray-300 font-semibold">[2027] Expanding CSR partnerships with NGOs & Institutions</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              <p className="text-lg text-gray-300 font-semibold">[2028] Scaling sustainable impact projects globally</p>
            </div>
          </div>
        </section>

        <section className="bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Let’s Create Impact Together</h2>
          <p className="text-xl mb-6">
            We welcome ideas, partnerships, and collaborations from individuals, institutions, and organizations who share our vision of responsible growth. If you’re interested in working with us on CSR initiatives, we’d love to hear from you.
          </p>
          <Link className="bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300" href="/contact">
            📩 Get in Touch
          </Link>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}