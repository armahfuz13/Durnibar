'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] max-w-4xl mx-auto overflow-hidden bg-[#0f2a40] min-h-[300px] flex items-center justify-center p-8 md:p-10 text-center"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 max-w-full z-0">
            <Image src="/images/memory-8.jpg" alt="Background" fill className="object-cover opacity-30 mix-blend-overlay" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-[#e60046] mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a40]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Got updates, photos, or story?<br />
              <span className="text-white/90">Share them with the batch</span>
            </h2>
            
            <a href="mailto:edte6th@gmail.com">
              <AnimatedButton variant="white" className="flex items-center gap-2 text-base md:text-lg px-6 py-3 mt-2 text-[#e60046]">
                <Mail className="w-5 h-5" />
                edte6th@gmail.com
              </AnimatedButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
