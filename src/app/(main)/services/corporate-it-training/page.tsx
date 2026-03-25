import Link from 'next/link';

const CorporateITTrainingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Empower Your Team. Transform Your Business.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We deliver tailored corporate IT training programs to upskill your workforce and drive innovation from within.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </header>

     
      {/* Why Choose Us? Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Training Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧑‍🎓</span>
              <h3 className="mt-4 text-xl font-semibold">Expert-Led Courses</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our courses are taught by industry veterans with hands-on experience, providing practical and relevant knowledge.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🎯</span>
              <h3 className="mt-4 text-xl font-semibold">Customizable Curriculum</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We tailor our training content to meet your team's specific skill gaps and business objectives.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤝</span>
              <h3 className="mt-4 text-xl font-semibold">Flexible Formats</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Choose from on-site, virtual, or blended learning formats to fit your team's schedule and preferences.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Training Programs Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Corporate IT Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">☁️</span>
              <h3 className="mt-4 text-xl font-semibold">Cloud Computing</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Training on AWS, Azure, and Google Cloud, covering architecture, security, and administration.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔒</span>
              <h3 className="mt-4 text-xl font-semibold">Cybersecurity</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Courses on network security, ethical hacking, and threat analysis to protect your enterprise.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤖</span>
              <h3 className="mt-4 text-xl font-semibold">AI & Machine Learning</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Introduce your team to the fundamentals and practical applications of artificial intelligence.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💻</span>
              <h3 className="mt-4 text-xl font-semibold">Software Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Train your developers in modern programming languages and frameworks (e.g., Python, JavaScript, React).</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📊</span>
              <h3 className="mt-4 text-xl font-semibold">Data Analytics</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Teach your team how to analyze data, build reports, and make data-driven decisions.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">⚙️</span>
              <h3 className="mt-4 text-xl font-semibold">IT Infrastructure</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Comprehensive training on network management, systems administration, and IT operations.</p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Invest in Your Team?</h2>
          <p className="text-lg text-gray-400 mb-8">Contact us to design a custom training program that meets your unique needs.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Contact Our Training Experts
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default CorporateITTrainingPage;