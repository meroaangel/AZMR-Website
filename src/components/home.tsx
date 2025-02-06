import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesGrid from "./sections/ServicesGrid";
import SocialProof from "./sections/SocialProof";
import ContactSection from "./sections/ContactSection";
import WhyChooseUs from "./sections/WhyChooseUs";

interface HomeProps {
  onConsultationClick?: () => void;
  onContactSubmit?: (data: any) => void;
}

const Home = ({
  onContactSubmit = (data) => console.log("Contact form submitted:", data),
}: HomeProps) => {
  const handleConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onConsultationClick={handleConsultation} />

      <main className="pt-20">
        <HeroSection onCtaClick={handleConsultation} />
        <ServicesGrid />
        <WhyChooseUs />
        <SocialProof />
        <ContactSection onSubmit={onContactSubmit} />
      </main>

      <footer className="bg-[#C7C1D8] text-[#1a365d] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AZMR Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
