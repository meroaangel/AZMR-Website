import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Network,
  Server,
  Code,
  LineChart,
  Shield,
  Database,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  title = "Service Title",
  description = "Service description goes here",
}: ServiceCardProps) => {
  return (
    <Card className="h-full transition-transform hover:scale-105">
      <CardContent className="flex flex-col items-center p-6 text-center h-full bg-white">
        <div className="mb-4 text-[#A8D1C8]">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-navy-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface ServicesGridProps {
  services?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  const defaultServices = [
    {
      icon: <Network size={40} />,
      title: "Network Infrastructure",
      description:
        "Design and implementation of robust network solutions for your business needs",
    },
    {
      icon: <Server size={40} />,
      title: "Hardware Solutions",
      description: "Expert hardware consulting and deployment services",
    },
    {
      icon: <Code size={40} />,
      title: "Software Consulting",
      description: "Custom software solutions and integration services",
    },
    {
      icon: <LineChart size={40} />,
      title: "IT Strategy",
      description: "Strategic technology planning and digital transformation",
    },
    {
      icon: <Shield size={40} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
    },
    {
      icon: <Database size={40} />,
      title: "Data Management",
      description: "Efficient data storage and management solutions",
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <section id="services" className="py-16 px-4 bg-[#F7D4D4] bg-opacity-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT consulting solutions tailored to your business
            needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase().replace(/ /g, "-")}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
