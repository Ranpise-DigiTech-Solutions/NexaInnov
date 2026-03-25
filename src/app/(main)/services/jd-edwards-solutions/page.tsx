import Link from 'next/link';

const JDEdwardsSolutionsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/enterprise.png')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Unlock the Full Potential of JD Edwards.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We deliver end-to-end JD Edwards solutions, from seamless implementation to ongoing support, to optimize your business processes.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Request a Free Consultation
            </button>
          </Link>
        </div>
      </header>

      

      {/* Why Choose Us? Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Why Partner with Us for JDE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">✅</span>
              <h3 className="mt-4 text-xl font-semibold">Deep Expertise</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our team has extensive experience in JD Edwards, providing solutions that are both effective and reliable.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🛠️</span>
              <h3 className="mt-4 text-xl font-semibold">Custom-Fit Solutions</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We don't believe in one-size-fits-all. We tailor every solution to meet your unique business requirements.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🚀</span>
              <h3 className="mt-4 text-xl font-semibold">Future-Ready Focus</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We help you modernize your JD Edwards environment, leveraging the latest features to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our JD Edwards Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧩</span>
              <h3 className="mt-4 text-xl font-semibold">JDE Implementation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">From project planning to Go-Live, we ensure a smooth, efficient implementation process.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔄</span>
              <h3 className="mt-4 text-xl font-semibold">System Upgrades</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Upgrade your system seamlessly to the latest JDE releases to gain new features and enhance performance.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💡</span>
              <h3 className="mt-4 text-xl font-semibold">Advisory & Consulting</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Receive expert guidance on best practices, system health checks, and strategic roadmaps.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔗</span>
              <h3 className="mt-4 text-xl font-semibold">Integrations & Customizations</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Build custom applications and integrate JD Edwards with other enterprise systems.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧑‍💻</span>
              <h3 className="mt-4 text-xl font-semibold">Managed Support</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Benefit from our reliable, 24/7 managed services to ensure your system is always running optimally.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🛡️</span>
              <h3 className="mt-4 text-xl font-semibold">Security & Auditing</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Protect your data with comprehensive security assessments and auditing services.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Optimize Your JD Edwards System?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Our expert team is ready to help you achieve your business objectives.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Contact a JDE Expert
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default JDEdwardsSolutionsPage;