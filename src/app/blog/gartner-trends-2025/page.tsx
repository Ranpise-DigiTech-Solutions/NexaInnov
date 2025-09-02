import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FooterComponent from "@/components/common/footer";
import NavbarComponent from "@/components/common/navbar";

const GartnerArticlePage = () => {
  return (
    <div className="bg-neutral-900 text-neutral-200 min-h-screen">
      <NavbarComponent></NavbarComponent>
      <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[16/6] rounded-b-3xl overflow-hidden">
        <Image
          src="/images/blog1.png"
          alt="Gartner's Top Technology Trends for 2025"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary-pink">
          Navigating the Future: Gartner’s Top Technology Trends for 2025 and What They Mean for Businesses
        </h1>
        
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          In an era defined by rapid innovation, staying ahead of the technology curve is not just a competitive advantage—it’s a necessity. At NexaInnov Solutions, we believe in empowering your business with strategic insights from leading analysts like Gartner. Here’s our breakdown of Gartner’s top technology trends for 2025 and how they can shape your future.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Trend Highlights</h2>
        <ul className="list-disc list-inside space-y-4 text-neutral-300 mb-8 leading-relaxed">
          <li>
            <strong className="font-bold text-neutral-100">Agentic AI:</strong> These are sophisticated AI systems that can act autonomously to achieve complex goals, significantly augmenting workforce productivity and streamlining operations.
          </li>
          <li>
            <strong className="font-bold text-neutral-100">AI Governance Platforms:</strong> As AI becomes more pervasive, platforms for ethical and transparent AI deployment are critical for ensuring accountability and trust.
          </li>
          <li>
            <strong className="font-bold text-neutral-100">Disinformation Security:</strong> With the rise of deepfakes and manipulated media, a new focus on security strategies is needed to protect against the malicious use of AI.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Business Implications</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          These trends are not just theoretical; they have tangible implications for your business. We can help you integrate Agentic AI responsibly, implement robust AI governance frameworks, and build resilient disinformation security strategies that align with your business goals. However, it's crucial to consider the risks, such as varying regulatory landscapes and ethical challenges, to ensure a smooth and responsible transition.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Action Steps for Technology Leaders</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          To successfully navigate this landscape, tech leaders should use these trends to shape their tech advisory roadmap. We encourage responsible experimentation with AI and aligning your solutions with the governance and security frameworks outlined by Gartner.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Conclusion</h2>
        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
          Staying ahead of tech disruption is key to long-term success. By embracing these trends strategically, you can position your business as a leader in innovation. Partner with NexaInnov Solutions to create a customized roadmap that harnesses these technologies responsibly and effectively.
        </p>

        <div className="mt-12 flex justify-center">
          <Button asChild className="transform transition-transform duration-300 hover:scale-105 hover:bg-primary-black bg-neutral-700 xl:p-8 px-6 py-8 rounded-full">
            <Link href="/contact" className="w-full h-full xl:text-xl text-lg tracking-wide text-neutral-200 rounded-full flex items-center justify-center gap-2">
              <p>Contact us for a personalized tech roadmap</p>
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default GartnerArticlePage;