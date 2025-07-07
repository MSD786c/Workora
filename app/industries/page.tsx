'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Industries() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to services page after a short delay
    const timer = setTimeout(() => {
      router.push('/services');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div 
        className="text-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-[#d4af62] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Redirecting...
        </motion.h1>
        <motion.p 
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our industry expertise has been moved to the Services page.
        </motion.p>
        <motion.div 
          className="w-16 h-1 bg-[#d4af62] mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
}
