'use client';

import { motion } from 'framer-motion';
import { Users, Building, Clock, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, label, delay }: StatItemProps) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="text-[#d4af62] mb-3"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, delay: delay + 0.2 }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>
    <motion.h3 
      className="text-3xl md:text-4xl font-bold text-white mb-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.3 }}
      viewport={{ once: true }}
    >
      {value}
    </motion.h3>
    <motion.p 
      className="text-gray-300 text-sm md:text-base"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.4 }}
      viewport={{ once: true }}
    >
      {label}
    </motion.p>
  </motion.div>
);

const Stats = ({ backgroundImage = '/images/home/stats-bg.jpg' }) => {
  const stats = [
    { icon: <Users size={36} />, value: '500+', label: 'Workers Deployed', delay: 0 },
    { icon: <Building size={36} />, value: '100+', label: 'Client Companies', delay: 0.1 },
    { icon: <Clock size={36} />, value: '10+', label: 'Years Experience', delay: 0.2 },
    { icon: <Award size={36} />, value: '95%', label: 'Client Retention', delay: 0.3 },
  ];

  return (
    <div 
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
              delay={stat.delay} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats; 