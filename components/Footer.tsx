'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/workora-manpower-supply/', label: 'LinkedIn' },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#222] text-white py-16 px-4">
      
      <motion.div 
        className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Company Info */}
        <motion.div variants={itemVariants}>
          <div className="mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              <Image
                src="/logo10.png"
                alt="Workora Logo"
                width={180}
                height={60}
                className="h-26 w-auto md:h-34"
              />
            </Link>
          </div>
          <p className="text-gray-300 mb-6">
            Excellence in every Hire.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-[#333] p-2 rounded-full text-gray-300 hover:bg-[#d4af62] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6 text-[#d4af62]">Quick Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href={link.href} 
                  className="text-gray-300 hover:text-[#d4af62] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6 text-[#d4af62]">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone size={18} className="text-[#d4af62] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-300">+971 4 221 2833</span>
            </li>
            <li className="flex items-start">
              <Mail size={18} className="text-[#d4af62] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-300">info@workora.ae</span>
            </li>
            <li className="flex items-start">
              <MapPin size={18} className="text-[#d4af62] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-300">Sultan Business Centre, Oud Metha, Dubai, UAE</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-6 text-[#d4af62]">Newsletter</h4>
          <p className="text-gray-300 mb-4">Stay updated with our latest news and announcements.</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#333] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af62]"
            />
            <motion.button 
              type="submit"
              className="bg-[#d4af62] text-black font-medium py-2 px-4 rounded-md hover:bg-[#c9a458] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
        
      </motion.div>
      
      <div className="max-w-7xl mx-auto pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Workora Manpower Supply L.L.C. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
