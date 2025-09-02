import Head from 'next/head';
import Link from 'next/link';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

export default function RestaurantManagementSystem() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <NavbarComponent></NavbarComponent>
      <Head>
        <title>Restaurant Management System</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4">🍽 Restaurant Management System</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-8">Smart, Simple & Scalable Software for Modern Restaurants</p>

        <section className="mb-12">
          <p className="text-center text-lg text-gray-300 mb-8">This system helps restaurants streamline daily operations, improve customer experience, and maximize efficiency—all in one powerful platform.</p>
          <h2 className="text-3xl font-bold text-white mb-4">🌟 Key Features & Functionalities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">🛒</span> Order Management</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Dine-in, Takeaway & Online Orders handled seamlessly.</li>
                <li>Digital menu display & ordering system.</li>
                <li>Real-time order tracking from kitchen to table.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">📋</span> Table & Reservation Management</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Interactive table layout with live occupancy status.</li>
                <li>Reservation booking system for walk-ins & online guests.</li>
                <li>Reduce wait times and optimize table turnover.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">🏷</span> Menu Control</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Easy-to-update digital menus via admin dashboard.</li>
                <li>Setting up of daily offers via admin dashboard.</li>
                <li>Big screen TV scrolling display of Menu items.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">💳</span> Billing & Payments</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Multiple payment options (UPI, cards, wallets, cash).</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 flex items-center"><span className="text-4xl mr-2">📊</span> Reports & Analytics</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Daily/weekly/monthly sales reports.</li>
                <li>Best-selling items & peak hours analysis.</li>
                <li>Staff performance & customer behavior insights.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your restaurant operations? 🚀</h2>
          <p className="text-xl mb-6">Get started with our Restaurant Management System today!</p>
          <form className="max-w-md mx-auto space-y-4">
            <Link href="/contact" className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">Get Started</Link>
          </form>
        </section>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}