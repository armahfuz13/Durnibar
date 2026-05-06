'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';
import { Calendar } from 'lucide-react';
import { semesterNumbers, currentSemester } from '@/data';

export const SemesterTimeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && scrollContainerRef.current && activeItemRef.current) {
        const container = scrollContainerRef.current;
        const activeItem = activeItemRef.current;
        const scrollLeft = activeItem.offsetLeft - (container.clientWidth / 2) + (activeItem.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    };
    
    // We can do it on mount after a small delay to make sure layout is done
    const timer = setTimeout(handleScroll, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="CURRENT SEMESTER" icon={<Calendar size={16} />} />

        <div 
          ref={scrollContainerRef}
          className="relative mt-16 pb-10 overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="min-w-[800px] flex items-center justify-between relative px-10">
            {/* Background Lines */}
            <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-white/20 -z-10" />
            
            {/* Active Line Progress */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${((currentSemester - 1) / (semesterNumbers.length - 1)) * 100}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-10 -translate-y-1/2 h-1 bg-white -z-10"
            />

            {semesterNumbers.map((num, i) => {
              const isActive = num === currentSemester;
              const isPast = num < currentSemester;

              return (
                <div 
                  key={num} 
                  ref={isActive ? activeItemRef : null}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-colors z-10 
                      ${isActive ? 'bg-[#e60046] border-[#e60046] text-white' : 
                        isPast ? 'bg-white border-white text-[#12314a]' : 'bg-[#0f2a40] border-white/30 text-white/50'}`}
                  >
                    {num}
                  </motion.div>
                  {isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-20 h-20 bg-[#e60046] rounded-full -z-10 blur-md pointer-events-none"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
