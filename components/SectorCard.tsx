'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SectorCardProps {
  title: string;
  items: string[];
  index: number;
}

const SectorCard = ({ title, items, index }: SectorCardProps) => {
  return (
    <motion.div 
      className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
    >
      <h3 className="text-xl font-semibold text-[#d4af62] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li 
            key={i}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            viewport={{ once: true }}
          >
            <Check size={18} className="text-[#d4af62] mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SectorCard; 