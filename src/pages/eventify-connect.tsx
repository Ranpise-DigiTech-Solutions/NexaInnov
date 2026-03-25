
import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function EventifyConnect() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-100">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>Eventify Connect</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-primary-blue dark:text-white text-center mb-2">Eventify Connect</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">Plan Smarter. Celebrate Better.</p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-4">🚀 Core Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-400 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center dark:text-white text-neutral-800"><span className="text-4xl mr-2">🏛</span> Venue Booking</h3>
              <ul className="list-disc list-inside space-y-1 text-white dark:text-gray-300">
                <li>Real-time availability – book halls and spaces instantly.</li>
              </ul>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center dark:text-white text-neutral-800"><span className="text-4xl mr-2">📸</span> Photography & Videography</h3>
              <ul className="list-disc list-inside space-y-1 text-white dark:text-gray-300">
                <li>Capture every moment with verified professionals.</li>
              </ul>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center dark:text-white text-neutral-800"><span className="text-4xl mr-2">🍽</span> Catering Services</h3>
              <ul className="list-disc list-inside space-y-1 text-white dark:text-gray-300">
                <li>Delicious menus, flexible packages for any crowd size.</li>
              </ul>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center dark:text-white text-neutral-800"><span className="text-4xl mr-2">🌸</span> Decor & Themes</h3>
              <ul className="list-disc list-inside space-y-1 text-white dark:text-gray-300">
                <li>Floral, stage & custom designs to match your style.</li>
              </ul>
            </div>
            <div className="bg-orange-400 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center dark:text-white text-neutral-800"><span className="text-4xl mr-2">🎤</span> DJs & Entertainment</h3>
              <ul className="list-disc list-inside space-y-1 text-white dark:text-gray-300">
                <li>Set the vibe with DJs, live bands, and performers.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-4">🎯 Smart Tools</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-gray-300">
            <li><span className="font-semibold text-neutral-800 dark:text-white">📊 All-in-one dashboard</span> – manage vendors & timelines</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">💰 Budget tracker</span> – stay on top of expenses</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">📨 Digital invites & RSVP</span> – manage guest lists effortlessly</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">🏨 Guest room bookings</span> – seamless accommodation planning</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-4">💡 Why Choose Eventify Connect?</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-gray-300">
            <li><span className="font-semibold text-neutral-800 dark:text-white">✅ One platform</span>, all services</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">✅ Verified vendors</span> you can trust</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">✅ Transparent pricing</span> & availability</li>
            <li><span className="font-semibold text-neutral-800 dark:text-white">✅ Time-saving tools</span> for stress-free planning</li>
          </ul>
        </section>

        <section className="bg-primary-blue  mb-12 dark:bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your dream event? ✨</h2>
          <p className="text-xl mb-6">Start now with EventifyConnect – it’s just a few clicks away!</p>
          <form className="max-w-md mx-auto space-y-4">
            <Link href="/contact" className="w-full bg-orange-400 dark:bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">Get Started</Link>
          </form>
        </section>
      </div>
      <FooterComponent></FooterComponent> 
    </div>
  );
}