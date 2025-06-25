'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
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
          <h3 className="text-2xl font-bold text-[#d4af62] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Workora
            </Link>
          </h3>
          <p className="text-gray-300 mb-6">
            Manpower Supply L.L.C. S.O.C – Providing skilled & unskilled labor across the UAE.
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
              <span className="text-gray-300">P.O. Box 62575, Dubai, UAE</span>
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

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Workora Manpower Supply L.L.C. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
