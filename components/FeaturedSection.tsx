'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: 'left' | 'right';
}

const FeaturedSection = ({
  title,
  subtitle,
  description,
  features,
  image,
  buttonText,
  buttonLink,
  imagePosition = 'right'
}: FeaturedSectionProps) => {
  const isImageRight = imagePosition === 'right';

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {subtitle && (
              <motion.p 
                className="text-[#d4af62] font-medium mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            <motion.ul 
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-[#d4af62] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href={buttonLink}>
                <motion.button
                  className="bg-[#d4af62] text-white font-medium py-3 px-8 rounded-md hover:bg-[#c9a458] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {buttonText}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#d4af62]/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src={image} 
                alt={title}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection; 