'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface HeroBannerProps {
  title: string | React.ReactNode;
  backgroundImage: string;
  includeCarousel?: boolean;
  showSlogans?: boolean;
}

const slogans = [
  "Manpower that Moves Nations",
  "Precision People for Every Project", 
  "Where Industry Meets Human Power"
];

const HeroBanner = ({
  title,
  backgroundImage,
  includeCarousel = false,
  showSlogans = true,
}: HeroBannerProps) => {
  return (
    <div 
      className={`relative ${includeCarousel ? 'h-[80vh] md:h-[90vh]' : 'h-[40vh] md:h-[50vh]'} flex flex-col justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4">
        {/* Hero Title Section */}
        <motion.div 
          className="mb-8"
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

        {/* Carousel Section - Directly under the title */}
        {includeCarousel && (
          <motion.div 
            className="max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We're not just filling roles — we're building lasting partnerships.
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-[#d4af62] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        )}

        {/* Marquee Slogans - Under the quote */}
        {showSlogans && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full mt-8"
          >
            <Marquee
              gradient={false}
              speed={40}
              direction="right"
              pauseOnHover={true}
              className="py-4"
            >
              {slogans.map((slogan, idx) => (
                <div key={idx} className="mx-12 whitespace-nowrap flex items-center">
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
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
