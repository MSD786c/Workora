'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = ({ backgroundImage = '/images/home/testimonial-bg.jpg' }) => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Workora has been instrumental in helping us scale our operations. Their manpower solutions are reliable and professional.",
      author: "Ahmed Al-Mansoori",
      position: "Operations Director",
      company: "Gulf Construction LLC"
    },
    {
      quote: "We've been working with Workora for over 5 years now. Their staff is always well-trained, punctual, and ready to work.",
      author: "Sarah Johnson",
      position: "HR Manager",
      company: "Luxury Hotels Group"
    },
    {
      quote: "The flexibility Workora offers is unmatched. Whether we need 5 or 50 workers, they deliver quality manpower on short notice.",
      author: "Rajiv Patel",
      position: "Project Manager",
      company: "Dubai Developers"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, nextTestimonial]);

  return (
    <div 
      className="relative py-20 md:py-28"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-[#d4af62] mx-auto" />
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={48} className="text-[#d4af62] mx-auto mb-6 opacity-60" />
              <motion.p 
                className="text-lg md:text-xl text-white mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-[#d4af62] font-semibold text-lg">{testimonials[current].author}</h4>
                <p className="text-gray-300">{testimonials[current].position}, {testimonials[current].company}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button 
              onClick={prevTestimonial}
              className="bg-[#d4af62]/20 hover:bg-[#d4af62]/40 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-[#d4af62] w-6' : 'bg-white/50'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button 
              onClick={nextTestimonial}
              className="bg-[#d4af62]/20 hover:bg-[#d4af62]/40 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 