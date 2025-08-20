'use client';

import { motion } from 'framer-motion';
import { 
  HardHat, 
  Utensils, 
  Sparkles, 
  Truck, 
  Users, 
  ShieldCheck, 
  Clock, 
  BadgeCheck, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import HeroBanner from "../components/HeroBanner";
import SectionTitle from "../components/SectionTitle";
import CallToAction from "../components/CallToAction";
import FeaturedSection from "../components/FeaturedSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  const previewServices = [
    {
      title: "Construction Labor",
      description: "Skilled and unskilled workers for site operations, masonry, carpentry, and more.",
      icon: <HardHat size={24} />,
      imageUrl: "/images/services/construction-worker.jpg",
    },
    {
      title: "Hospitality Staff",
      description: "Waiters, housekeeping, receptionists, and kitchen helpers for hotels and restaurants.",
      icon: <Utensils size={24} />,
      imageUrl: "/images/services/receptionist.jpg",
    },
    {
      title: "Cleaning Services",
      description: "Professional cleaning staff for commercial, residential, and industrial properties.",
      icon: <Sparkles size={24} />,
      imageUrl: "/images/services/cleaning.jpg",
    },
  ];

  const whyChooseUs = [
    "Fully licensed and compliant with UAE labor laws",
    "Rigorous screening and training process",
    "Flexible short-term and long-term contracts",
    "24/7 support and rapid response team",
    "Competitive rates with transparent pricing",
    "Comprehensive insurance coverage"
  ];

  return (
    <main className="bg-white text-black relative">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title={
          <>
            Empowering Industries Through Reliable{' '}
            <span className="text-[#d4af62]">Manpower</span>
          </>
        }
        backgroundImage="/images/home/hero.jpg"
        includeCarousel={true}
        showMarquee={true}
      />

      {/* Featured Section */}
      <FeaturedSection 
        title="Your Trusted Manpower Partner in the UAE"
        subtitle="ABOUT WORKORA"
        description="Workora Manpower Supply L.L.C. delivers reliable workforce solutions across multiple industries. With over a decade of experience, we've become the go-to provider for businesses seeking dependable, skilled, and compliant manpower."
        features={whyChooseUs}
        image="/images/home/about-preview.jpg"
        buttonText="Learn More About Us"
        buttonLink="/about"
        imagePosition="right"
      />

      {/* Services Preview */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="We provide specialized manpower solutions tailored to your industry needs."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {previewServices.map((service, index) => (
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

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <motion.button
                className="inline-flex items-center text-[#d4af62] font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                View all services
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Why Choose Workora" 
            subtitle="We pride ourselves on delivering exceptional service and value to our clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Clock size={32} />,
                title: "Rapid Deployment",
                description: "We can mobilize workers within 24-48 hours to meet urgent requirements."
              },
              {
                icon: <BadgeCheck size={32} />,
                title: "Verified Workers",
                description: "All our staff undergo thorough background checks and skill assessments."
              },
              {
                icon: <Briefcase size={32} />,
                title: "Industry Expertise",
                description: "Specialized knowledge across construction, hospitality, and more."
              },
              {
                icon: <Users size={32} />,
                title: "Dedicated Support",
                description: "A dedicated account manager for each client to ensure satisfaction."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Legal Compliance",
                description: "Full adherence to UAE labor laws and visa regulations."
              },
              {
                icon: <Truck size={32} />,
                title: "Transportation",
                description: "We handle worker transportation to and from your site."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
              >
                <div className="text-[#d4af62] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to solve your manpower needs?"
        description="Contact us today to discuss how we can support your business with reliable workforce solutions."
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage="/images/home/hero.jpg"
      />

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
