import NavbarComponent from "@/components/common/navbar";
import GetStartedComponent from "./_components/get-started";
import FooterComponent from "@/components/common/footer";
import TestimonialComponent from "./_components/testimonial";
import ArticlesComponent from "./_components/articles";
import OurClientsComponent from "./_components/our-clients";
import CustomerSupportComponent from "./_components/customer-support";
import TechnologyPartnersComponent from "./_components/technology-partners";
import WhyUsComponent from "./_components/why-us";
import TrustOurExpertiseComponent from "./_components/trust-expertise";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-[4rem]">
      <div className="min-h-screen flex flex-col">
        <NavbarComponent className="h-[15%]" />
        <GetStartedComponent className="flex-1"/>
      </div>
      <div className="min-h-screen w-full flex flex-col text-neutral-200 gap-[5rem]">
        <WhyUsComponent />
        <OurClientsComponent />
        {/* <TechnologyPartnersComponent /> */}
        <TrustOurExpertiseComponent />
        <TestimonialComponent />
        <CustomerSupportComponent />
        <ArticlesComponent />
      </div>
      <>
        <div className="line-divider"></div>
        <FooterComponent />
      </>
    </main>
  );
}
