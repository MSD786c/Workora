'use client';

import { 
  Building2, 
  HardHat, 
  Wrench, 
  Hotel, 
  Warehouse, 
  Truck, 
  Stethoscope, 
  Factory, 
  Ship 
} from 'lucide-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IndustryCard from "../../components/IndustryCard";
import HeroBanner from "../../components/HeroBanner";
import SectionTitle from "../../components/SectionTitle";
import CallToAction from "../../components/CallToAction";
import SectorCard from "../../components/SectorCard";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { motion } from 'framer-motion';

export default function Industries() {
  // Industry cards data
  const industries = [
    {
      title: "Oil & Gas",
      description: "Specialized workforce for upstream, midstream, and downstream operations in the oil and gas industry.",
      icon: <Building2 size={24} />,
      imageUrl: "/images/industries/oil-gas.jpg"
    },
    {
      title: "Construction & Civil",
      description: "Skilled and unskilled labor for construction projects, including steel fixers, masons, carpenters, and general labor.",
      icon: <HardHat size={24} />,
      imageUrl: "/images/industries/construction.jpg"
    },
    {
      title: "MEP",
      description: "Specialized technicians for mechanical, electrical, and plumbing projects across residential and commercial sectors.",
      icon: <Wrench size={24} />,
      imageUrl: "/images/industries/mep.jpg"
    },
    {
      title: "Hospitality",
      description: "Professional staff for hotels, restaurants, and events, including waiters, housekeeping, and kitchen staff.",
      icon: <Hotel size={24} />,
      imageUrl: "/images/industries/hospitality.jpg"
    },
    {
      title: "Facility Management",
      description: "Comprehensive manpower solutions for building maintenance, security, and cleaning services.",
      icon: <Warehouse size={24} />,
      imageUrl: "/images/industries/facility.jpg"
    },
    {
      title: "Logistics & Transport",
      description: "Skilled personnel for warehouse operations, inventory management, and transportation services.",
      icon: <Truck size={24} />,
      imageUrl: "/images/industries/logistics.jpg"
    },
    {
      title: "Healthcare",
      description: "Support staff for healthcare facilities, including orderlies, cleaners, and administrative personnel.",
      icon: <Stethoscope size={24} />,
      imageUrl: "/images/industries/healthcare.jpg"
    },
    {
      title: "Manufacturing & Engineering",
      description: "Skilled workers for production lines, quality control, and engineering support across manufacturing sectors.",
      icon: <Factory size={24} />,
      imageUrl: "/images/industries/manufacturing.jpg"
    },
    {
      title: "Marine & Offshore",
      description: "Specialized workforce for shipyards, ports, and offshore operations requiring maritime expertise.",
      icon: <Ship size={24} />,
      imageUrl: "/images/industries/marine.jpg"
    },
  ];

  // Sector details
  const sectors = [
    {
      title: "Oil & Gas",
      items: [
        "Rig workers and operators",
        "Pipeline technicians",
        "Refinery workers",
        "HSE specialists",
        "Maintenance technicians"
      ]
    },
    {
      title: "Construction & Civil",
      items: [
        "Masons and carpenters",
        "Steel fixers and fabricators",
        "Painters and plasterers",
        "General laborers",
        "Site supervisors"
      ]
    },
    {
      title: "MEP",
      items: [
        "Electricians",
        "HVAC technicians",
        "Plumbers",
        "Fire system technicians",
        "BMS operators"
      ]
    },
    {
      title: "Hospitality",
      items: [
        "Housekeeping staff",
        "Food & beverage servers",
        "Kitchen helpers",
        "Front desk personnel",
        "Event staff"
      ]
    },
    {
      title: "Facility Management",
      items: [
        "Building maintenance",
        "Security personnel",
        "Cleaning staff",
        "Landscaping workers",
        "Property administrators"
      ]
    },
    {
      title: "Logistics & Transport",
      items: [
        "Warehouse workers",
        "Forklift operators",
        "Packers and loaders",
        "Inventory clerks",
        "Delivery drivers"
      ]
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title="Areas of Expertise" 
        backgroundImage="/images/industries/hero-banner.jpg" 
      />

      {/* Industries Section */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Industry Expertise" 
            subtitle="Workora provides specialized manpower solutions across multiple industries, ensuring your business has access to the right talent when needed." 
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                imageUrl={industry.imageUrl}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Specialized Sectors" 
            subtitle="We provide skilled workers across various specialized sectors to meet your specific project requirements." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                title={sector.title}
                items={sector.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Looking for specialized manpower?"
        description="Contact our team today to discuss your specific requirements and how we can support your business needs."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="/images/industries/cta-background.jpg"
      />

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
