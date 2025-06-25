'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CallToAction = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  backgroundImage = '/images/cta-background.jpg'
}: CallToActionProps) => {
  return (
    <div 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p 
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href={buttonLink}
            className="inline-block bg-[#d4af62] text-black font-medium py-3 px-8 rounded-md hover:bg-[#c9a458] transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction; 