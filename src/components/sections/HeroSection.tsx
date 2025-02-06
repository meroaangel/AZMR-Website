import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Empowering Your IT Infrastructure",
  subtitle = "Women-owned IT consulting firm delivering innovative solutions for your business technology needs",
  ctaText = "Book a Consultation",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[600px] bg-[#C7C1D8] text-[#1a365d] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")`,
          }}
        />
        <div className="absolute inset-0 bg-[#C7C1D8] bg-opacity-90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-[#1a365d] font-medium max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-[#A8D1C8] hover:bg-[#97beb6] text-[#1a365d] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute left-0 bottom-0 w-32 h-32 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-full h-full rounded-full bg-[#319795] opacity-10" />
        </div>
        <div className="absolute right-0 top-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-[#718096] opacity-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
