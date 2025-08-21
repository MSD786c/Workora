'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface HeroBannerProps {
  title: string | React.ReactNode;
  backgroundImage: string;
  includeCarousel?: boolean;
  showSlogans?: boolean;
  showMarquee?: boolean;
}

const logoImages = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
  "/images/logos/logo11.png"
];

const HeroBanner = ({
  title,
  backgroundImage,
  includeCarousel = false,
  showSlogans = true,
  showMarquee = false,
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

        {/* Marquee Logo Images - Under the quote */}
        {showMarquee && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full mt-4"
          >
            <Marquee
              gradient={false}
              speed={50}
              direction="right"
              pauseOnHover={false}
              className="pt-6 pb-2"
            >
              {logoImages.map((logoSrc, idx) => (
                <div key={idx} className="mx-8 flex items-center">
                  <div className="relative h-42 w-52 md:h-38 md:w-54 lg:h-42 lg:w-62 xl:h-64 xl:w-80 flex items-center justify-center">
                    <img
                      src={logoSrc}
                      alt={`Workora logo ${idx + 1}`}
                      className="max-h-full max-w-full object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1)'
                      }}
                    />
                  </div>
                  {idx < logoImages.length - 1 && (
                    <div className="mx-6 text-[#d4af62]">
                      <span className="text-2xl font-bold">◆</span>
                    </div>
                  )}
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
