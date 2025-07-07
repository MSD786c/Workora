'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import HeroBanner from "../../components/HeroBanner";
import SectionTitle from "../../components/SectionTitle";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: [
        "+971 4 221 2833",
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: [
        "info@workora.ae",
      ]
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: [
        "Sultan Business Centre",
        "Al Wasl Building, Office 511",
        "Oud Metha Road, Oud Metha",
        "Dubai, United Arab Emirates"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner 
        title="Contact Us" 
        backgroundImage="/images/contact/hero.jpg" 
      />

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Reach out to us with your inquiries. We&apos;re ready to assist you with your manpower needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {contactInfo.map((item, index) => (
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
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                Send Us a Message
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Fill out the form below and our team will get back to you within 24 hours. We&apos;re here to answer any questions about our manpower services.
              </motion.p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#d4af62] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Location
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Visit our office in Dubai to discuss your manpower requirements in person. We&apos;re conveniently located at Sultan Business Centre, Al Wasl Building in Oud Metha.
              </motion.p>
              
              <motion.div 
                className="flex-1 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6455833249743!2d55.30611531544294!3d25.233556184037034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42cc28ba49af%3A0x57bbd7cd1311987e!2sSultan%20Business%20Centre%2C%20Al%20Wasl%20Building%20-%20Oud%20Metha%20Rd%20-%20Oud%20Metha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1704123456789!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-lg"
                ></iframe>
              </motion.div>
              
              <motion.div 
                className="mt-8 p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
