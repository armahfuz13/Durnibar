'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { AnimatedButton } from './AnimatedButton';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden" id="home">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e60046]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-4xl max-w-[90vw]"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white !leading-tight">
            University of Frontier Technology, Bangladesh
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-300 uppercase tracking-widest mt-2 lg:mt-4">
            Department of Educational Technology and Engineering
          </h2>
          <p className="text-base md:text-lg font-bold text-[#e60046] tracking-widest mt-6 bg-[#e60046]/10 px-6 py-2 rounded-full inline-block backdrop-blur-sm border border-[#e60046]/30 uppercase">
            Batch 2023-24 | Durnibar 6
          </p>
        </motion.div>

        {/* Image Display */}
        <div className="mt-16 md:mt-24 relative w-full max-w-5xl mx-auto flex justify-center items-center">
          {/* Magenta background block */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] bg-[#e60046] rounded-3xl -z-10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#12314a]"
          >
            <Image
              src="public/images/Hero-cover.jpg"
              alt="Durnibar 06 Batch"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            
            {/* Pill Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 shadow-lg text-white font-bold tracking-wide"
            >
              30 MEMBERS
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-[-20px] relative z-10"
        >
          <AnimatedButton variant="primary">Meet The Members</AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};
