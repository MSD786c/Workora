'use client';

import { motion } from 'framer-motion';

const Testimonials = ({ backgroundImage = '/images/home/testimonial-bg.jpg' }) => {
  return (
    <div 
      className="relative py-20 md:py-28"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center">  
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            We're not just filling roles — we're building lasting partnerships.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-[#d4af62] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 