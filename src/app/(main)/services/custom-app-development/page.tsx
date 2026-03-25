import Link from 'next/link';

// Assuming you have a global CSS file for base styles or
// using Tailwind CSS which handles this.
// import './globals.css';

const CustomAppDevelopmentPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-200">
      
      {/* Hero Section */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Vision, Our Expertise.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            We build beautiful, high-performance web and mobile applications that drive business growth and user delight.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-8 py-3 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </Link>
        </div>
      </header>

      {/* Why Us? Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">✨</span>
              <h3 className="mt-4 text-xl font-semibold">Seamless Process</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We guide you through every step, from concept to launch, with clear communication and transparency.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🧠</span>
              <h3 className="mt-4 text-xl font-semibold">Expertise You Can Trust</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Our team of seasoned developers and designers delivers robust, secure, and scalable solutions.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🚀</span>
              <h3 className="mt-4 text-xl font-semibold">Future-Proof Technology</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We use the latest technologies and best practices to build applications that stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">💻</span>
              <h3 className="mt-4 text-xl font-semibold">Web App Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">From complex enterprise systems to elegant e-commerce platforms, we build web apps that perform.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">📱</span>
              <h3 className="mt-4 text-xl font-semibold">Mobile App Development</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">Crafting intuitive and engaging mobile experiences for iOS and Android that users love.</p>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-4xl text-pink-500">🎨</span>
              <h3 className="mt-4 text-xl font-semibold">UI/UX Design</h3>
              <p className="mt-2 text-neutral-800 dark:text-gray-400">We focus on creating interfaces that are not only beautiful but also intuitive and easy to navigate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white mb-12">Our Process</h2>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center bg-orange-400 dark:bg-gray-800 p-6 rounded-xl w-full max-w-3xl hover:translate-x-2 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary-blue dark:text-pink-500 min-w-[3rem] text-center md:text-left">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Discovery & Strategy</h3>
                <p className="text-neutral-800 dark:text-gray-400">We listen to your ideas and work with you to define a clear project roadmap.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-orange-400 dark:bg-gray-800 p-6 rounded-xl w-full max-w-3xl hover:translate-x-2 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary-blue dark:text-pink-500 min-w-[3rem] text-center md:text-left">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Design & Prototyping</h3>
                <p className="text-neutral-800 dark:text-gray-400">We create wireframes and designs, ensuring a flawless user experience.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-orange-400 dark:bg-gray-800 p-6 rounded-xl w-full max-w-3xl hover:translate-x-2 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary-blue dark:text-pink-500 min-w-[3rem] text-center md:text-left">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Development & Testing</h3>
                <p className="text-neutral-800 dark:text-gray-400">Our developers bring the designs to life, with rigorous testing to ensure quality and performance.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-orange-400 dark:bg-gray-800 p-6 rounded-xl w-full max-w-3xl hover:translate-x-2 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary-blue dark:text-pink-500 min-w-[3rem] text-center md:text-left">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Launch & Support</h3>
                <p className="text-neutral-800 dark:text-gray-400">We handle deployment and provide ongoing support to keep your app running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-primary-blue dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-white dark:text-gray-400 mb-8">Let's discuss your project and turn your ideas into reality.</p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-orange-400 dark:bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default CustomAppDevelopmentPage;