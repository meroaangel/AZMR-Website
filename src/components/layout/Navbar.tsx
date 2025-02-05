import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    subItems?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  onConsultationClick?: () => void;
}

const defaultMenuItems = [
  {
    label: "Services",
    href: "#services",
    subItems: [
      {
        label: "Network Infrastructure",
        href: "#network-infrastructure",
        description:
          "Enterprise network solutions and infrastructure management",
      },
      {
        label: "Hardware Solutions",
        href: "#hardware-solutions",
        description: "Custom hardware configurations and maintenance",
      },
      {
        label: "Software Consulting",
        href: "#software-consulting",
        description: "Software development and integration services",
      },
      {
        label: "IT Strategy",
        href: "#it-strategy",
        description: "Strategic IT planning and digital transformation",
      },
    ],
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = ({
  logo = "AZMR Consulting",
  menuItems = defaultMenuItems,
  onConsultationClick = () => console.log("Book Consultation clicked"),
}: NavbarProps) => {
  return (
    <nav className="w-full h-20 px-4 md:px-6 bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-[#1a365d]">
          {logo}
        </a>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="text-[#718096] hover:text-[#1a365d]">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const sectionId = subItem.href.replace(
                                      "#",
                                      "",
                                    );
                                    const element =
                                      document.getElementById(sectionId);
                                    if (element) {
                                      element.scrollIntoView({
                                        behavior: "smooth",
                                      });
                                    }
                                  }}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none text-[#1a365d]">
                                    {subItem.label}
                                  </div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                                      {subItem.description}
                                    </p>
                                  )}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const sectionId = item.href.replace("#", "");
                          const element = document.getElementById(sectionId);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="text-[#718096] hover:text-[#1a365d] px-3 py-2 text-sm font-medium"
                      >
                        {item.label}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button
            onClick={onConsultationClick}
            className="bg-[#A8D1C8] hover:bg-[#97beb6] text-[#1a365d]"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
          <svg
            className="h-6 w-6 text-[#1a365d]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
