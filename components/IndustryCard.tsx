'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  index: number;
}

const IndustryCard = ({ title, description, icon, imageUrl, index }: IndustryCardProps) => {
  return (
    <motion.div 
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          {icon && <div className="text-[#d4af62] mr-3">{icon}</div>}
          <h3 className="text-xl font-semibold text-[#d4af62]">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <motion.div 
          className="flex items-center text-sm font-medium text-[#d4af62] cursor-pointer group"
          whileHover={{ x: 5 }}
        >
          <span className="mr-1">Learn more</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
