import Link from 'next/link';

const InforSolutionsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Seamless ERP Solutions. Strategic Partnership.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We provide expert-level Infor consulting, implementation, and support to optimize your business operations and drive efficiency.
          </p>
          <Link href="#contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Request a Consultation
            </button>
          </Link>
        </div>
      </header>

      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Infor Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">⚙️</span>
              <h3 className="mt-4 text-xl font-semibold">Implementation & Integration</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">From initial setup to complex integrations, we ensure your Infor solution is perfectly aligned with your business needs.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🛠️</span>
              <h3 className="mt-4 text-xl font-semibold">Customization & Optimization</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We tailor Infor's powerful tools to your specific workflows, optimizing performance and user adoption.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤝</span>
              <h3 className="mt-4 text-xl font-semibold">Managed Services & Support</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our dedicated support team provides continuous monitoring, maintenance, and expert assistance to keep you running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Key Infor Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🏭</span>
              <h3 className="mt-4 text-xl font-semibold">Infor ERP</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Streamline your entire business with industry-specific ERP solutions for manufacturing, distribution, and more.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📦</span>
              <h3 className="mt-4 text-xl font-semibold">Infor SCM</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Optimize your supply chain with powerful tools for inventory, logistics, and demand planning.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🏗️</span>
              <h3 className="mt-4 text-xl font-semibold">Infor EAM</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Manage your physical assets and maintenance with a robust Enterprise Asset Management system.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📊</span>
              <h3 className="mt-4 text-xl font-semibold">Infor Birst</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Unlock valuable insights with business intelligence and data visualization solutions.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">☁️</span>
              <h3 className="mt-4 text-xl font-semibold">CloudSuite Solutions</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Leverage the full power of Infor's industry-specific cloud suites for agility and innovation.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💼</span>
              <h3 className="mt-4 text-xl font-semibold">Consulting & Training</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Empower your team with expert guidance and tailored training programs to maximize your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-400 mb-8">Our team is ready to help you unlock the full potential of your Infor software.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default InforSolutionsPage;