import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function PPFCuttingSoftware() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>PPF Cutting Software</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4">🛡️ PPF Cutting Software</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">Precision. Speed. Protection.</p>

        <section className="mb-12">
          <p className="text-center text-lg text-gray-300 mb-8">Take your automotive detailing business to the next level with our advanced Paint Protection Film Cutting Software—designed for accuracy, efficiency, and ease of use.</p>
          <h2 className="text-3xl font-bold text-white mb-4">🌟 Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">✂️</span> Precision Cutting</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Access a vast pattern library for cars, bikes, and more.</li>
                <li>Achieve perfect fits with millimeter-level accuracy.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">📂</span> Extensive Database</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Regularly updated vehicle templates.</li>
                <li>Cover multiple makes, models, and years.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">⚡</span> Fast & Easy Workflow</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Intuitive interface—minimal learning curve.</li>
                <li>Quick search & selection of vehicle patterns.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">🛠️</span> Customization Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Adjust, resize, and edit patterns before cutting.</li>
                <li>Save custom templates for repeat use.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">🔗</span> Seamless Plotter Integration</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Works with popular plotter machines.</li>
                <li>Smooth data transfer for error-free cutting.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">📊</span> Business Efficiency</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Reduce film wastage with optimized cutting.</li>
                <li>Deliver faster installations and boost profitability.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Cut smarter. Protect better. 🚀</h2>
          <p className="text-xl mb-6">Get started with our PPF Cutting Software today!</p>
          <form className="max-w-md mx-auto space-y-4">
            <Link href="/contact" className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">Get Started</Link>
          </form>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}