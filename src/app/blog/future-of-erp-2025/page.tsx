import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

const ErpArticlePage = () => {
  return (
    <div className="bg-neutral-900 text-neutral-200 min-h-screen">
      <NavbarComponent></NavbarComponent>
      <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[16/6] rounded-b-3xl overflow-hidden">
        <Image
          src="/images/blog2.png"
          alt="The Future of ERP: Key Trends for 2025"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary-pink">
          The Future of ERP: Key Trends for 2025
        </h1>
        
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          The ERP market is set for substantial growth, projected to expand from <strong className="font-bold text-neutral-100">$81.15 billion in 2024 to $238.79 billion by 2032</strong>, with a CAGR of 14.4%. The demand for ERP is rising due to increasing business complexity, the need for global operational continuity, stricter regulatory requirements, and shifting customer expectations. AI, machine learning, and cloud technologies serve as enablers, allowing ERP vendors to improve automation, scalability, and adaptability in response to these market pressures.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">AI and ML Integration</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          AI and ML were key themes for leading ERP products in 2024. <strong className="font-bold text-neutral-100">Oracle Cloud ERP</strong> introduced AI-powered tools for real-time financial planning, project management, and procurement optimization. <strong className="font-bold text-neutral-100">SAP S/4HANA</strong> leveraged machine learning for demand forecasting and production scheduling, while the company’s RISE and GROW with SAP program provided a unique approach to cloud migrations.
        </p>
        
        <h2 className="text-3xl font-semibold mt-10 mb-4">Joule AI Copilot</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          At the Sapphire conference, SAP shared updated AI capabilities such as the <strong className="font-bold text-neutral-100">Joule AI copilot</strong>, which offers real-time recommendations in ERP areas ranging from supply chain management to cash collection to analytics. SAP says that Joule may be able to influence as much as 80% of common user tasks, potentially increasing productivity by 20%.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Conclusion</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          As the ERP market continues to evolve, these technological advancements will be crucial for businesses seeking to streamline operations and enhance productivity. The integration of AI and machine learning is not just a trend but a fundamental shift that will redefine how enterprises manage their resources.
        </p>
        
        <div className="mt-12 flex justify-center">
          <Button asChild className="transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 xl:p-8 px-6 py-8 rounded-full">
            <Link href="/contact" className="w-full h-full xl:text-xl text-lg tracking-wide text-neutral-200 rounded-full flex items-center justify-center gap-2">
              <p>Contact us for a personalized ERP strategy</p>
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ErpArticlePage;