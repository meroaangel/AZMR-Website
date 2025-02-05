import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ReasonCardProps {
  title: string;
  description: string;
}

const ReasonCard = ({ title, description }: ReasonCardProps) => {
  return (
    <Card className="h-full bg-white">
      <CardContent className="flex flex-col items-center p-6 text-center h-full">
        <CheckCircle className="w-8 h-8 mb-4 text-[#A8D1C8]" />
        <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Women-Owned Business",
      description:
        "Proud to bring diversity and fresh perspectives to IT consulting.",
    },
    {
      title: "Proven Track Record",
      description:
        "Years of success helping businesses achieve their IT goals.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Tailored solutions that align with your business objectives.",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-12">
          Why Choose AZMR Consulting?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
