'use client';

import { motion } from 'framer-motion';
import { 
  HardHat, 
  Utensils, 
  Sparkles, 
  Truck, 
  Users, 
  Shield, 
  Clock,
  CheckCircle
} from 'lucide-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import HeroBanner from "../../components/HeroBanner";
import SectionTitle from "../../components/SectionTitle";
import CallToAction from "../../components/CallToAction";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { metadata } from "./metadata";

export { metadata };

export default function Services() {
  const services = [
    {
      title: "Construction Labor",
      description: "Skilled and unskilled workers for site operations, masonry, carpentry, steel fixing, and more.",
      icon: <HardHat size={24} />,
      imageUrl: "/images/services/construction.jpg"
    },
    {
      title: "Hospitality Staff",
      description: "Waiters, housekeeping, receptionists, kitchen helpers, and hotel support staff.",
      icon: <Utensils size={24} />,
      imageUrl: "/images/services/hospitality.jpg"
    },
    {
      title: "Cleaning Services",
      description: "Commercial, residential, and industrial cleaning manpower.",
      icon: <Sparkles size={24} />,
      imageUrl: "/images/services/cleaning.jpg"
    },
    {
      title: "Logistics & Warehouse",
      description: "Pickers, packers, forklift operators, and inventory staff.",
      icon: <Truck size={24} />,
      imageUrl: "/images/services/logistics.jpg"
    },
    {
      title: "Event Crew",
      description: "Setup crews, ushers, stewards, and temporary manpower for events.",
      icon: <Users size={24} />,
      imageUrl: "/images/services/events.jpg"
    },
    {
      title: "Security Personnel",
      description: "Trained guards for residential, commercial, and event security.",
      icon: <Shield size={24} />,
      imageUrl: "/images/services/security.jpg"
    },
  ];

  const serviceProcess = [
    {
      title: "Initial Consultation",
      description: "We meet with you to understand your specific manpower requirements, timeline, and budget."
    },
    {
      title: "Custom Proposal",
      description: "We develop a tailored manpower solution based on your needs and industry requirements."
    },
    {
      title: "Worker Selection",
      description: "We select qualified workers from our database who match your specific requirements."
    },
    {
      title: "Deployment",
      description: "Workers are deployed to your site with all necessary documentation and safety training."
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and supervision to ensure optimal performance."
    }
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title="Our Services" 
        backgroundImage="/images/services/hero.jpg" 
      />

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Manpower Solutions" 
            subtitle="Workora provides skilled and semi-skilled manpower for key sectors across the UAE."
          />

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Service Process" 
            subtitle="How we deliver exceptional manpower solutions to our clients"
          />

          <div className="relative mt-16">
            {/* Progress Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {serviceProcess.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number - Left Side on Even, Right Side on Odd */}
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <motion.div 
                      className="relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#d4af62] flex items-center justify-center text-white text-2xl font-bold z-10 relative">
                        {index + 1}
                      </div>
                      <div className="absolute -inset-2 rounded-full bg-[#d4af62]/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  
                  {/* Content - Right Side on Even, Left Side on Odd */}
                  <div className="md:w-1/2">
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                    >
                      <h3 className="text-xl font-semibold text-[#d4af62] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#d4af62] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Benefits of Our Services
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Partnering with Workora for your manpower needs offers numerous advantages that help your business operate more efficiently and effectively.
              </motion.p>
              
              <ul className="space-y-4">
                {[
                  "Reduced administrative burden and HR costs",
                  "Flexible workforce scaling based on project demands",
                  "Access to pre-screened, qualified workers",
                  "Minimized legal and compliance risks",
                  "Quick replacement of workers when needed",
                  "Consistent quality and performance standards"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-[#d4af62] mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4af62]/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
                <img 
                  src="/images/services/construction.jpg" 
                  alt="Construction Workers" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need specialized manpower?"
        description="Contact us today to discuss your requirements and get a customized quote."
        buttonText="Request a Quote"
        buttonLink="/contact"
        backgroundImage="/images/services/hero.jpg"
      />

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
