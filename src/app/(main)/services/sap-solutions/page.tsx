import Link from 'next/link';

const SapSolutionsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Innovate with SAP. Drive Your Business Forward.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We deliver comprehensive SAP solutions and expert consulting to streamline your operations and unlock new business opportunities.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Request a Consultation
            </button>
          </Link>
        </div>
      </header>


      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Your Partner for SAP Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📈</span>
              <h3 className="mt-4 text-xl font-semibold">Strategic Implementation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We guide you through the entire implementation lifecycle, from planning to Go-Live, ensuring a seamless transition.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔗</span>
              <h3 className="mt-4 text-xl font-semibold">System Integration</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our experts integrate SAP with your existing systems to create a unified, efficient business ecosystem.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔄</span>
              <h3 className="mt-4 text-xl font-semibold">Ongoing Support & Upgrades</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We provide reliable post-implementation support and help you stay current with the latest SAP upgrades.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Solutions Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Core SAP Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">☁️</span>
              <h3 className="mt-4 text-xl font-semibold">SAP S/4HANA</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Lead your digital transformation with SAP's next-generation intelligent ERP platform, delivered on-premise or in the cloud.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📊</span>
              <h3 className="mt-4 text-xl font-semibold">SAP Analytics Cloud</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Gain real-time insights with business intelligence, planning, and predictive analytics in a single, cloud-based solution.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">⚙️</span>
              <h3 className="mt-4 text-xl font-semibold">SAP ECC Support</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We provide expert support for your existing SAP ERP Central Component (ECC) system and guide your transition to S/4HANA.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">✍️</span>
              <h3 className="mt-4 text-xl font-semibold">Custom Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Extend your SAP functionality with custom applications and integrations tailored to your unique business requirements.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧑‍🏫</span>
              <h3 className="mt-4 text-xl font-semibold">User Training & Adoption</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Ensure a successful SAP rollout with professional training to empower your team and maximize user adoption.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔒</span>
              <h3 className="mt-4 text-xl font-semibold">Security & Governance</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Implement robust security measures and governance policies to protect your critical business data.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Optimize Your Enterprise?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Our expert SAP team is ready to help you achieve your business goals.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Contact an SAP Expert
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default SapSolutionsPage;