import NavbarComponent from "@/components/global/navbar";
import GetStartedComponent from "./_components/get-started";
import FooterComponent from "@/components/global/footer";
import TestimonialComponent from "./_components/testimonial";
import ArticlesComponent from "./_components/articles";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-4">
      <div className="h-screen flex flex-col">
        <NavbarComponent className="flex-[15%]" />
        <GetStartedComponent className="flex-[85%]"/>
      </div>
      <TestimonialComponent />
      <ArticlesComponent />
      <>
        <div className="line-divider"></div>
        <FooterComponent />
      </>
    </main>
  );
}
