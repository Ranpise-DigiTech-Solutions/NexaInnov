import Link from 'next/link';

const WorkflowAutomationPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/automation.png')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Automate Your Workflows. Boost Your Productivity.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We build intelligent automation solutions that streamline processes, reduce manual effort, and unlock efficiency across your organization.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Request a Consultation
            </button>
          </Link>
        </div>
      </header>

      

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Automation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">⚙️</span>
              <h3 className="mt-4 text-xl font-semibold">Process Discovery</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We analyze your current workflows to identify opportunities for automation and efficiency gains.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔗</span>
              <h3 className="mt-4 text-xl font-semibold">Custom-Built Solutions</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We design and develop automation tools tailored to your unique business needs and technical environment.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📊</span>
              <h3 className="mt-4 text-xl font-semibold">Continuous Optimization</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We don't just set it and forget it. We continuously monitor and refine your automated processes for maximum performance.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Solutions Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Workflow Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📝</span>
              <h3 className="mt-4 text-xl font-semibold">Business Process Automation (BPA)</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Automate core business processes like invoicing, reporting, and data entry to reduce manual errors and save time.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤖</span>
              <h3 className="mt-4 text-xl font-semibold">Robotic Process Automation (RPA)</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Deploy software robots to handle repetitive, rule-based tasks across various applications without human intervention.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">☁️</span>
              <h3 className="mt-4 text-xl font-semibold">Cloud Integration</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Seamlessly connect your cloud-based applications and services to automate data flows and operations.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🌐</span>
              <h3 className="mt-4 text-xl font-semibold">API Automation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Automate communication and data transfer between different software systems using API-based solutions.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">✅</span>
              <h3 className="mt-4 text-xl font-semibold">Testing & QA Automation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Automate repetitive testing procedures to accelerate your development cycle and improve software quality.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📈</span>
              <h3 className="mt-4 text-xl font-semibold">Data & Reporting Automation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Automate the collection, transformation, and reporting of data to provide real-time business insights.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Streamline Your Operations?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Our automation experts are ready to help you save time, reduce costs, and focus on what matters most.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Begin Your Automation Journey
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default WorkflowAutomationPage;