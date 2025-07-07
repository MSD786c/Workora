'use client';

import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string | React.ReactNode;
  backgroundImage: string;
}

const HeroBanner = ({ title, backgroundImage }: HeroBannerProps) => {
  return (
    <div 
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="h-1 w-20 bg-[#d4af62] mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroBanner; 