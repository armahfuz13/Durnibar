'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { galleryImages } from '@/data';
import { AnimatedButton } from './AnimatedButton';

export const MemoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-20 px-4 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionLabel label="MEMORIES" icon={<Camera size={16} />} />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider text-center mb-16"
        >
          ONE BATCH, INFINITE MEMORIES
        </motion.h2>

        <div className="relative w-full flex justify-center items-center h-[280px] md:h-[450px] lg:h-[500px] max-w-[100vw]">
          {galleryImages.map((src, i) => {
            let diff = i - currentIndex;
            // Shortest path for circular array
            if (diff > galleryImages.length / 2) diff -= galleryImages.length;
            else if (diff < -galleryImages.length / 2) diff += galleryImages.length;
            
            const absDiff = Math.abs(diff);

            if (absDiff > 3) {
              return (
                 <motion.div
                  key={src || i}
                  initial={false}
                  animate={{ opacity: 0, scale: 0.5, zIndex: -1 }}
                  className="absolute pointer-events-none"
                 />
              );
            }

            const positionsXPercent = [0, 75, 135, 180];
            let xPercent = positionsXPercent[absDiff];
            if (diff < 0) xPercent = -xPercent;
            
            const scale = [1, 0.85, 0.7, 0.55][absDiff];
            const zIndex = 10 - absDiff;

            return (
              <motion.div
                key={src || i}
                onMouseEnter={() => diff === 0 && setIsPaused(true)}
                onMouseLeave={() => diff === 0 && setIsPaused(false)}
                onTouchStart={() => diff === 0 && setIsPaused(true)}
                onTouchEnd={() => diff === 0 && setIsPaused(false)}
                onTouchCancel={() => diff === 0 && setIsPaused(false)}
                initial={false}
                animate={{ 
                  opacity: 1, 
                  scale, 
                  x: `${xPercent}%`,
                  zIndex,
                  pointerEvents: diff === 0 ? 'auto' : 'none'
                }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[240px] md:w-[420px] lg:w-[600px] h-[240px] md:h-[420px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white origin-center"
              >
                <Image src={src} alt="Memory" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 relative z-10 text-center">
          <AnimatedButton variant="primary">View All Memories</AnimatedButton>
        </div>
      </div>
    </section>
  );
};
