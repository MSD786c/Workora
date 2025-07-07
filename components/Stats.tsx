'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const Stats = ({ backgroundImage = '/images/home/stats-bg.jpg' }) => {
  const slogans = [
    "Manpower that Moves Nations",
    "Precision People for Every Project", 
    "Where Industry Meets Human Power"
  ];

  return (
    <div 
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <Marquee
            gradient={false}
            speed={40}
            direction="right"
            pauseOnHover={true}
            className="py-4"
          >
            {slogans.map((slogan, index) => (
              <div key={index} className="mx-12 whitespace-nowrap">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  {slogan}
                </span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#d4af62] mx-6">
                  ◆
                </span>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Centered call-to-action text */}
        <motion.div 
          className="text-center mt-8 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Connecting skilled professionals with opportunities that drive success across every industry
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats; 