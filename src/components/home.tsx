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
  onConsultationClick = () => console.log("Consultation requested"),
  onContactSubmit = (data) => console.log("Contact form submitted:", data),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onConsultationClick={onConsultationClick} />

      {/* Add top margin to account for fixed navbar */}
      <main className="pt-20">
        <HeroSection onCtaClick={onConsultationClick} />

        <ServicesGrid />

        <WhyChooseUs />

        <SocialProof />

        <ContactSection onSubmit={onContactSubmit} />
      </main>

      {/* Simple footer */}
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
