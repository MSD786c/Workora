'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Shield, 
  Globe,
  HeartHandshake
} from 'lucide-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import SectionTitle from "../../components/SectionTitle";
import CallToAction from "../../components/CallToAction";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function About() {
  const values = [
    {
      icon: <Users size={28} />,
      title: "People First",
      description: "We value our workers and clients alike, treating everyone with respect and dignity."
    },
    {
      icon: <Award size={28} />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and operations."
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and transparency."
    },
    {
      icon: <Clock size={28} />,
      title: "Reliability",
      description: "We are committed to delivering on our promises, every time."
    }
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title="About Workora" 
        backgroundImage="/images/about/hero.jpg" 
      />

      {/* About Section */}
      <section className="py-20 px-4">
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
                Your Trusted Manpower Partner
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Workora Manpower Supply L.L.C. is a leading provider of skilled and unskilled labor across the United Arab Emirates. Established with a vision to bridge the workforce gap in the region, we&apos;ve grown to become a trusted partner for businesses across multiple industries.
              </motion.p>
              <motion.p 
                className="text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                From construction sites to hotel lobbies, we deliver reliable manpower where and when you need it. Our commitment to quality, compliance, and customer satisfaction has earned us a reputation as one of the most dependable manpower suppliers in the UAE.
              </motion.p>
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
                  src="/images/about/office.jpg" 
                  alt="Workora Office" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Mission & Vision" 
            subtitle="Driving excellence in manpower solutions across the UAE"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <div className="text-[#d4af62] mb-4">
                <Briefcase size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To bridge the workforce gap by supplying reliable, skilled labor that adds value to every business and project we support. We aim to be the link that connects qualified workers with companies that need their skills, creating opportunities for growth and success for both.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)" }}
            >
              <div className="text-[#d4af62] mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading manpower supply company in the UAE, known for integrity, quality, and unmatched service delivery. We envision a future where Workora is synonymous with excellence in workforce solutions, setting the industry standard for professionalism and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
              >
                <motion.div 
                  className="text-[#d4af62] mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/images/about/values.jpg" 
                  alt="Legal Compliance" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                Legal & Compliance
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Workora is fully licensed under UAE laws to provide manpower supply services. We ensure all laborers are documented and compliant with MOHRE regulations.
              </motion.p>
              
              <ul className="space-y-4">
                {[
                  "Valid trade license for manpower supply",
                  "Proper visa and work permit documentation",
                  "Comprehensive insurance coverage",
                  "Regular health and safety training",
                  "Strict adherence to labor laws and regulations"
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
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Why Choose Workora?" 
            subtitle="What sets us apart from other manpower suppliers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="bg-[#f7f7f7] p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#d4af62] mb-6">Our Advantages</h3>
              <ul className="space-y-4">
                {[
                  "Reliable workforce on short notice",
                  "Strict documentation & visa compliance",
                  "Multi-industry coverage",
                  "UAE-wide service with dedicated support",
                  "Competitive pricing with no hidden fees",
                  "Flexible contract terms tailored to your needs"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <HeartHandshake className="text-[#d4af62] mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#f7f7f7] p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#d4af62] mb-6">Our Commitment</h3>
              <p className="text-gray-700 mb-6">
                At Workora, we&apos;re committed to:
              </p>
              <ul className="space-y-4">
                {[
                  "Providing only qualified and vetted workers",
                  "Ensuring punctuality and reliability",
                  "Maintaining clear communication channels",
                  "Resolving issues promptly and effectively",
                  "Building long-term relationships with clients",
                  "Continuously improving our services"
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
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to work with us?"
        description="Contact our team today to discuss your manpower requirements."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="/images/about/team.jpg"
      />

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
