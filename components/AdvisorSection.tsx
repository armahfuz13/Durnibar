'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react'; // Placeholder for WhatsApp/social icon
import { SectionLabel } from './SectionLabel';
import { representatives } from '@/data';

const ProfileCard = ({ role, name, image, type }: { role: string; name: string; image: string; type: string }) => {
  const getStyles = () => {
    switch (type) {
      case 'light':
        return 'bg-white text-[#12314a] border border-white';
      case 'accent':
        return 'bg-[#e60046] text-white border border-[#e60046]';
      case 'dark':
      default:
        return 'bg-[#12314a] text-white border border-[#e60046]/50 shadow-[0_0_15px_rgba(230,0,70,0.15)]';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`rounded-2xl p-5 max-w-[280px] mx-auto w-full flex flex-col items-center text-center transition-all ${getStyles()}`}
    >
      <h3 className="text-lg font-bold mb-4 min-h-[48px] flex items-center justify-center">{role}</h3>
      <div className="w-[90%] aspect-square relative rounded-xl overflow-hidden mb-5 shadow-inner border-2 border-black/10">
        <Image src={image} alt={name} fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
      <div className="flex gap-4 mt-5">
        <button className="p-2 rounded-full border border-current hover:bg-current hover:text-white transition-colors group">
          <MessageCircle className="w-5 h-5 group-hover:text-black" />
        </button>
        {/* Placeholder for email/other social */}
        <button className="p-2 rounded-full border border-current hover:bg-current hover:text-white transition-colors group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-black">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export const AdvisorSection = () => {
  return (
    <section className="py-20 px-4" id="member">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="ADVISOR AND REPRESENTATIVE" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {representatives.map((rep, i) => (
            <motion.div
              key={rep.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <ProfileCard {...rep} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
