import { MediaInquiryForm } from '@/components/MediaInquiryForm';
import Head from 'next/head';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";
import Image from 'next/image';
import { useState } from 'react';

export default function Newsroom() {
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('All'); // Initial state is 'All'

  // Define the list of categories for navigation
  const categories = [
    'All',
    'Press Releases',
    'In the Media',
    'Company Updates',
    'Events & Conferences',
    'Founder\'s Desk',
  ];

  const articles = [
    {
      id: 'ai-chatbots-launch',
      image: '/images/ai-chatbot-thumbnail.png', // Placeholder image path
      headline: 'Nexainnov Solutions to Launch AI-Powered Chatbots and AI agents',
      category: 'Press Releases (Product Launch)',
      filterCategory: 'Press Releases',
      date: 'September 24, 2025',
      content: `AI chatbots and AI agents are transforming digital experiences, but they serve different roles in how organizations engage with users:
      <br/><br/>
      <b>Chatbots</b><br/>
      Modern AI chatbots use generative AI and natural language processing, enabling conversational interfaces that mimic human dialogue. They’re widely deployed in customer service, FAQs, and support systems, delivering fast, round-the-clock assistance for common queries. 
      <br/><br/>
      <b>AI Agents</b><br/>
      AI agents go beyond simple conversations. These autonomous systems are designed to perceive their environment, make decisions, take actions, and handle tasks without constant human direction. They can adapt to new information, manage workflows across systems, and offer a proactive, intelligent experience.`,
    },
    {
      id: 'erp-training-expansion',
      image: '/images/erp-training-thumbnail.png', // Placeholder image path
      headline: 'Nexainnov Academy Expands ERP Niche technologies Training Across Colleges in India',
      category: 'Company Updates (Education & Training)',
      filterCategory: 'Company Updates',
      date: 'August 15, 2025',
      content: `At Nexainnov Solutions, we are excited to introduce our specialized ERP Niche Technologies Training program. This training is designed for professionals and aspiring consultants who want to build expertise in cutting-edge ERP domains that are in high demand across industries.
      <br/><br/>
      Our program covers advanced ERP modules, integration techniques, real-world case studies, and hands-on practice to ensure participants gain both technical knowledge and practical skills. With guidance from industry experts, learners will be equipped to take on ERP implementation, customization, and consulting roles confidently.
      <br/><br/>
      Whether you are looking to upskill, switch careers, or strengthen your ERP foundation, this training provides the right platform to excel in niche ERP technologies.`,
    },
    {
      id: 'tie-mangaluru-podcast',
      image: '/images/tie-mangaluru-podcast.png', // Placeholder image path
      headline: 'TIE Mangaluru event - Pod cast session with Founder of house of Bindus Mr. Sathya Shankar',
      category: 'Events & Conferences',
      filterCategory: 'Events & Conferences',
      date: 'August 20, 2025',
      content: `<b>Founder Series Podcast – A Journey of Inspiration</b><br/>
      We recently tuned into the Founder Series event featuring Mr. Sathya Shankar, Founder & CMD of House of Bindu, titled “The Brand that Bubbled Up.”
      <br/><br/>
      The session highlighted his remarkable journey built on grit, resilience, and patience, showcasing how determination and vision can transform challenges into lasting success. His story continues to inspire entrepreneurs across the region, offering valuable lessons on building brands with purpose and persistence.`,
    },
    {
      id: 'mite-st-joseph-collaboration',
      image: '/images/mite-st-joseph-collaboration.png', // Placeholder image path
      headline: 'Collaboration with MITE and St Joseph Engg college',
      category: 'Company Updates (Education & Training)',
      filterCategory: 'Company Updates',
      date: 'August 12, 2025',
      content: `Nexainnov Solutions is proud to announce its strategic collaboration with MITE (Mangalore Institute of Technology & Engineering) and St. Joseph Engineering College, Mangaluru. This partnership aims to foster innovation and industry–academia synergy by facilitating technology exchange, specialized training programs, and internship opportunities for students.
      <br/><br/>
      Through this collaboration, students will gain hands-on exposure to the latest technologies and industry practices, equipping them with skills that bridge the gap between academic learning and real-world applications. Nexainnov Solutions is committed to empowering young talent and nurturing future-ready professionals who can contribute to the evolving tech ecosystem.`,
    },
    {
      id: 'canara-college-mou',
      image: '/images/canara-college-mou.png', // Placeholder image path
      headline: 'MOU signing with Canara college of Engg on future collaboration',
      category: 'In the Media (MOU updates)',
      filterCategory: 'In the Media',
      date: 'July 30, 2025',
      content: `This collaboration focuses on upskilling students and faculty, fostering innovation, providing internships & employment opportunities, and establishing a center of excellence, bridging the gap between academia and industry.`,
    },
  ];

  const toggleContent = (id: string) => {
    setExpandedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  // Filter articles based on the activeCategory state
  const filteredArticles = articles.filter(article => 
    activeCategory === 'All' || article.filterCategory === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <NavbarComponent />
      <Head>
        <title>Nexainnov Newsroom</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4">Nexainnov Newsroom 📰</h1>
        <p className="text-xl font-medium text-center text-primary-pink mb-12">
          Stay updated with the latest news, press releases, media coverage, and stories from Nexainnov Solutions.
        </p>

        {/* Dynamic Navigation Tabs / Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`font-semibold py-2 px-6 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary-pink text-white hover:bg-pink-600'
                  : 'bg-gray-800 text-gray-300 hover:bg-primary-pink hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Section (Static, based on your reference) */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Press Releases</h3>
              <p className="text-gray-300">
                Official announcements from Nexainnov Solutions, including product launches and CSR updates.
              </p>
              <p className="text-sm italic mt-2 text-gray-400">Coming Soon</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">In the Media</h3>
              <p className="text-gray-300">
                Watch this space for Nexainnov’s features in leading tech and business publications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Company Updates</h3>
              <p className="text-gray-300">
                Updates on new solutions like EventifyConnect, DragBlitz, and Nexainnov Academy.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Events & Conferences</h3>
              <p className="text-gray-300">
                Stay tuned for our participation in Mangaluru Technovanza 2025 and other upcoming events.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-primary-pink">Founder’s Desk</h3>
              <p className="text-gray-300">
                Insights from our leadership team on innovation, sustainability, and technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Article Cards Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-start shadow-lg">
                  <div className="w-full h-48 relative rounded-md mb-4 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.headline}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{article.headline}</h3>
                  <p className="text-sm text-gray-400 mb-4">{article.category} | {article.date}</p>
                  <div className="text-gray-300 text-sm flex-grow">
                    {expandedArticles[article.id] ? (
                      <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: article.content.substring(0, 150) + '...' }} />
                    )}
                  </div>
                  <button 
                    onClick={() => toggleContent(article.id)}
                    className="text-primary-pink font-semibold mt-4 transition-transform duration-200 hover:translate-x-1"
                  >
                    {expandedArticles[article.id] ? 'Read Less' : 'Read More'} →
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-400">No articles found in this category.</p>
            )}
          </div>
        </section>

        <section className="bg-primary-pink p-8 rounded-lg text-center text-white shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">For Media Inquiries & Collaborations</h2>
          <p className="text-xl mb-6">
            If you are a journalist, editor, or content creator and would like to connect with us, please reach out to our media team.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-lg mx-auto">
              <MediaInquiryForm />
            </div>
            
            <p className="text-lg font-semibold mt-4">
              <span className="font-bold">📞 Phone:</span> +91-97669919222
            </p>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
}