import Link from 'next/link';

const AiSolutionsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/aisolutions.png')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Innovate with AI. Transform Your Business.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We build intelligent, AI-powered solutions that automate workflows, predict trends, and enhance decision-making.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Request a Consultation
            </button>
          </Link>
        </div>
      </header>

      

      {/* Why Choose Us? Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our AI Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧠</span>
              <h3 className="mt-4 text-xl font-semibold">Custom AI Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We design and build bespoke AI models tailored to your unique business challenges and data sets.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔗</span>
              <h3 className="mt-4 text-xl font-semibold">Seamless Integration</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our solutions integrate effortlessly with your existing systems, ensuring a smooth transition and rapid value delivery.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💡</span>
              <h3 className="mt-4 text-xl font-semibold">Strategic Consulting</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We help you identify key opportunities to leverage AI, defining a clear roadmap for success.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Solutions Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our AI-Powered Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤖</span>
              <h3 className="mt-4 text-xl font-semibold">AI & Automation</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Automate repetitive tasks, streamline workflows, and boost productivity across your organization.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📈</span>
              <h3 className="mt-4 text-xl font-semibold">Predictive Analytics</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Leverage historical data to forecast trends and make informed, proactive business decisions.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💬</span>
              <h3 className="mt-4 text-xl font-semibold">Intelligent Chatbots</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Enhance customer service and lead generation with conversational AI that understands and responds to user queries.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔍</span>
              <h3 className="mt-4 text-xl font-semibold">Computer Vision</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Utilize AI to analyze and interpret visual data for applications in security, quality control, and more.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🗣️</span>
              <h3 className="mt-4 text-xl font-semibold">Natural Language Processing (NLP)</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Process and understand human language to derive insights from text and speech data.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔒</span>
              <h3 className="mt-4 text-xl font-semibold">AI-Powered Security</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Implement advanced security systems that use AI to detect and respond to threats in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Unlock the Power of AI?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Our AI specialists are ready to help you innovate and stay ahead of the competition.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Contact an AI Expert
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default AiSolutionsPage;