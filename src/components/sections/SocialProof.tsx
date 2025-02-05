import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

interface Achievement {
  metric: string;
  value: string;
}

interface Props {
  testimonials?: Testimonial[];
  clientLogos?: string[];
  achievements?: Achievement[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "AZMR Consulting transformed our IT infrastructure with their expert guidance.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "IT Director",
    company: "Global Systems",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "Their strategic approach to IT solutions helped us achieve our business goals.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Innovate Inc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "Professional, knowledgeable, and dedicated to delivering results.",
  },
];

const defaultAchievements: Achievement[] = [
  { metric: "Projects Completed", value: "200+" },
  { metric: "Client Satisfaction", value: "98%" },
  { metric: "Years Experience", value: "15+" },
];

const defaultClientLogos: string[] = [
  "https://via.placeholder.com/150x50?text=Client+1",
  "https://via.placeholder.com/150x50?text=Client+2",
  "https://via.placeholder.com/150x50?text=Client+3",
  "https://via.placeholder.com/150x50?text=Client+4",
];

const SocialProof = ({
  testimonials = defaultTestimonials,
  clientLogos = defaultClientLogos,
  achievements = defaultAchievements,
}: Props) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            What Our Clients Say
          </h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700">"{testimonial.content}"</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Our Achievements
          </h3>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#A8D1C8] mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600">{achievement.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
