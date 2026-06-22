import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutOwner from "@/components/AboutOwner";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Brands from "@/components/Brands";
import WhyChooseMe from "@/components/WhyChooseMe";
import ServiceArea from "@/components/ServiceArea";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Reviews / Testimonials */}
        <Testimonials />
        
        {/* 3. About The Owner */}
        <AboutOwner />
        
        {/* 4. Services Section */}
        <Services />
        
        {/* 5. Industries I Can Help */}
        <Industries />
        
        {/* 6. Brands I'm Working With */}
        <Brands />
        
        {/* 7. Why Choose Me */}
        <WhyChooseMe />
        
        {/* 8. Service Area */}
        <ServiceArea />
        
        {/* 9. Blog Section */}
        <Blog />
        
        {/* 10. FAQ Section */}
        <FAQ />
        
        {/* 11. CTA Contact Form */}
        <ContactForm />
      </main>
      {/* 12. Footer */}
      <Footer />
    </>
  );
}
