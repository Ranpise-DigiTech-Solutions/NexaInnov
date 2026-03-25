import Link from 'next/link';

const ProductDevelopmentPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/images/development.png')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            From Idea to Market. A Partner in Innovation.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We provide end-to-end product development services, turning your innovative concepts into successful, market-ready products.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Begin Your Project
            </button>
          </Link>
        </div>
      </header>

      

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Product Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💡</span>
              <h3 className="mt-4 text-xl font-semibold">Discovery & Strategy</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We work with you to validate your idea, define a clear strategy, and create a solid product roadmap.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🎨</span>
              <h3 className="mt-4 text-xl font-semibold">Design & Prototyping</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our designers create intuitive and beautiful user experiences, followed by interactive prototypes for testing.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🚀</span>
              <h3 className="mt-4 text-xl font-semibold">Development & Launch</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our engineers build a robust, scalable, and secure product ready for market launch.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Solutions Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Core Product Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📱</span>
              <h3 className="mt-4 text-xl font-semibold">Mobile App Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Building native and cross-platform mobile applications for iOS and Android with a focus on user experience.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💻</span>
              <h3 className="mt-4 text-xl font-semibold">Web Product Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Creating scalable and high-performance web applications and SaaS platforms.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📊</span>
              <h3 className="mt-4 text-xl font-semibold">MVP Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Launching a Minimum Viable Product quickly to test the market and gather user feedback.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📈</span>
              <h3 className="mt-4 text-xl font-semibold">Post-Launch Support</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Providing ongoing maintenance, feature updates, and performance optimization to ensure long-term success.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🔍</span>
              <h3 className="mt-4 text-xl font-semibold">Product Strategy Consulting</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Expert guidance to refine your product strategy and align it with your business goals.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🤖</span>
              <h3 className="mt-4 text-xl font-semibold">AI & Machine Learning Integration</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Integrating cutting-edge AI functionalities to make your product smarter and more powerful.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Next Big Idea?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Our team is ready to partner with you to bring your vision to life.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Let's Talk Product
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default ProductDevelopmentPage;