import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function CSRActivities() {
  return (
    // 1. Replaced bg-gray-900 with bg-primary-black (your background color)
    // 2. Replaced text-gray-100 with text-neutral-200 (your general foreground text color)
    <div className="min-h-screen bg-white dark:bg-primary-black text-neutral-200">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>CSR Activities - Nexainnov Solutions</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Replaced text-white with text-neutral-200 (or text-white, but neutral-200 is safer for dark mode foreground) */}
        <h1 className="text-5xl font-extrabold text-primary-blue dark:text-neutral-200 text-center mb-4">CSR Activities 🌍</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">
          Our Commitment to a Better Tomorrow
        </p>

        <section className="mb-12">
          {/* Replaced text-gray-300 with text-neutral-300 (your lighter/muted text) */}
          <p className="text-lg text-neutral-800 text-neutral-800 dark:text-neutral-300 text-center leading-relaxed">
            At Nexainnov Solutions, we believe technology and business should go hand in hand with responsibility toward society, the environment, and the communities we serve. While our CSR journey is just beginning, our vision is clear — to create meaningful impact through sustainable initiatives.
          </p>
        </section>

        <section className="mb-12">
          {/* Replaced text-white with text-neutral-200 */}
          <h2 className="text-3xl font-bold text-primary-blue dark:text-neutral-200 text-center mb-6">Our CSR Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Replaced bg-gray-800 with bg-neutral-800 (your card/raised element color) */}
            <div className="bg-orange-400 dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-neutral-800 dark:text-primary-pink">Responsibility</h3>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-white dark:text-neutral-300">We view CSR as a duty to give back to society, while driving innovation in technology.</p>
            </div>
            {/* Replaced bg-gray-800 with bg-neutral-800 */}
            <div className="bg-orange-400 dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-neutral-800 dark:text-primary-pink">Collaboration</h3>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-white dark:text-neutral-300">We plan to work with NGOs, communities, and educational institutions to maximize impact.</p>
            </div>
            {/* Replaced bg-gray-800 with bg-neutral-800 */}
            <div className="bg-orange-400 dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-neutral-800 dark:text-primary-pink">Sustainability</h3>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-white dark:text-neutral-300">Every CSR initiative will align with values of inclusivity, ethics, and long-term sustainability.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          {/* Replaced text-white with text-neutral-200 */}
          <h2 className="text-3xl font-bold text-primary-blue dark:text-neutral-200 text-center mb-6">Future Roadmap</h2>
          <div className="relative border-l-4 border-primary-pink pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-lg text-neutral-800 dark:text-neutral-300 font-semibold">[2025] Planning & Identifying CSR focus areas</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-lg text-neutral-800 dark:text-neutral-300 font-semibold">[2026] Launch of first community/education initiative</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-lg text-neutral-800 dark:text-neutral-300 font-semibold">[2027] Expanding CSR partnerships with NGOs & Institutions</p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1 bg-primary-pink w-4 h-4 rounded-full"></div>
              {/* Replaced text-gray-300 with text-neutral-300 */}
              <p className="text-lg text-neutral-800 dark:text-neutral-300 font-semibold">[2028] Scaling sustainable impact projects globally</p>
            </div>
          </div>
        </section>

        {/* Since primary-pink is a dark background, we change text-white to text-neutral-200 for consistency */}
        <section className="bg-primary-blue dark:bg-primary-pink p-8 rounded-lg text-center text-neutral-200 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Let’s Create Impact Together</h2>
          <p className="text-xl mb-6">
            We welcome ideas, partnerships, and collaborations from individuals, institutions, and organizations who share our vision of responsible growth. If you’re interested in working with us on CSR initiatives, we’d love to hear from you.
          </p>
          {/* 1. Replaced bg-gray-900 with bg-primary-black (your dark button background) */}
          {/* 2. Replaced text-white with text-neutral-200 */}
          {/* 3. Replaced hover:bg-gray-700 with hover:bg-neutral-700 (your dark button hover color) */}
          <Link className="bg-orange-400 dark:bg-primary-black text-neutral-200 font-bold py-3 px-6 rounded-md hover:bg-neutral-700 transition duration-300" href="/contact">
            📩 Get in Touch
          </Link>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}