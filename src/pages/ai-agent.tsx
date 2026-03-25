
import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function AIAgent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-100">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>AI Agent</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-primary-blue dark:text-white text-center mb-4">AI Agent</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">Smarter AI, Made Simple.</p>

        <section className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white text-center mb-12">
    Your AI Journey: Simplified
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {/* Subscribe Card */}
    <div className="bg-orange-400 dark:bg-neutral-900/50 p-8 rounded-3xl shadow-lg border border-neutral-800/50 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
      <div className="text-5xl text-blue-400 mb-4">
        {/* Lock or checkmark icon */}
        🔒
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">Subscribe</h3>
      <p className="text-neutral-800 dark:text-neutral-400">
        Gain instant access to a suite of powerful, bundled AI applications with flexible subscription plans.
      </p>
    </div>

    {/* Deploy Card */}
    <div className="bg-orange-400 dark:bg-neutral-900/50 p-8 rounded-3xl shadow-lg border border-neutral-800/50 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
      <div className="text-5xl text-purple-400 mb-4">
        {/* Rocket or gear icon */}
        🚀
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">Deploy</h3>
      <p className="text-neutral-800 dark:text-neutral-400">
        Quickly deploy and customize AI chatbots and automation agents to fit your specific business needs.
      </p>
    </div>

    {/* Grow Card */}
    <div className="bg-orange-400 dark:bg-neutral-900/50 p-8 rounded-3xl shadow-lg border border-neutral-800/50 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
      <div className="text-5xl text-teal-400 mb-4">
        {/* Chart or plant icon */}
        📈
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">Grow</h3>
      <p className="text-neutral-800 dark:text-neutral-400">
        Leverage our AI tools to automate workflows, optimize tasks, and drive exponential growth.
      </p>
    </div>
  </div>
</section>
        <section className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Why Choose Us Section */}
  <section className="mb-20">
    <h2 className="text-3xl md:text-4xl font-bold text-primary-blue dark:text-white text-center mb-12">
      💡 Why Choose Our AI Ecosystem?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Benefit Card: Unified Ecosystem */}
      <div className="flex flex-col items-center text-center p-6 bg-orange-400 dark:bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
        <div className="text-6xl text-primary-pink mb-4">✨</div>
        <h3 className="text-xl font-semibold text-white mb-2">Unified AI Ecosystem</h3>
        <p className="text-neutral-800 dark:text-neutral-400 text-sm">
          All apps under one platform for seamless integration and management.
        </p>
      </div>
      {/* Benefit Card: Flexible Subscriptions */}
      <div className="flex flex-col items-center text-center p-6 bg-orange-400 dark:bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
        <div className="text-6xl text-primary-pink mb-4">💳</div>
        <h3 className="text-xl font-semibold text-white mb-2">Flexible Subscriptions</h3>
        <p className="text-neutral-800 dark:text-neutral-400 text-sm">
          Pay only for what you use with plans that scale with your needs.
        </p>
      </div>
      {/* Benefit Card: Enterprise-Ready */}
      <div className="flex flex-col items-center text-center p-6 bg-orange-400 dark:bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
        <div className="text-6xl text-primary-pink mb-4">🔒</div>
        <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Ready</h3>
        <p className="text-neutral-800 dark:text-neutral-400 text-sm">
          Secure, scalable, and reliable apps built for business environments.
        </p>
      </div>
      {/* Benefit Card: Future-Driven */}
      <div className="flex flex-col items-center text-center p-6 bg-orange-400 dark:bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
        <div className="text-6xl text-primary-pink mb-4">🔮</div>
        <h3 className="text-xl font-semibold text-white mb-2">Future-Driven</h3>
        <p className="text-neutral-800 dark:text-neutral-400 text-sm">
          Our apps continuously evolve, keeping you at the cutting edge of AI.
        </p>
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="mb-12 bg-primary-blue dark:bg-neutral-900/50 p-8 rounded-3xl text-center shadow-lg backdrop-blur-md border border-neutral-800/50">
    <h2 className="text-3xl font-bold mb-4 text-white">
      Ready to simplify your workflow? ✨
    </h2>
    <p className="text-xl mb-6 text-white dark:text-neutral-400">
      Choose a bundle and start your 7-day free trial today!
    </p>
    <Link 
      href="/contact" 
      className="px-8 py-4 rounded-full font-bold text-white text-lg
                 shadow-lg transition-transform hover:scale-105
                 bg-orange-400 dark:bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500">
      Start Free Trial
    </Link>
  </section>
</section>
      </div>
      <FooterComponent></FooterComponent> 
    </div>
  );
}