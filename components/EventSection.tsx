'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { upcomingEvent, recentEvent } from '@/data';
import { AnimatedButton } from './AnimatedButton';

export const EventSection = () => {
  return (
    <section className="py-20 px-4" id="event">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="EVENT" icon={<CalendarDays size={16} />} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Upcoming Event Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e60046]/10 rounded-full blur-[80px]" />
            
            <h3 className="text-xl font-bold uppercase tracking-widest text-white/70 mb-8">Upcoming Events</h3>
            
            <div className="flex gap-6 items-start">
              <div className="bg-white text-[#12314a] p-4 rounded-xl text-center shadow-lg min-w-[80px]">
                <div className="text-3xl font-black leading-none">{upcomingEvent.date.day}</div>
                <div className="text-sm font-bold mt-1 uppercase">{upcomingEvent.date.month}</div>
              </div>
              
              <div className="space-y-4 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{upcomingEvent.title}</h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {upcomingEvent.description}
                </p>
                <div className="text-gray-400 text-sm">
                  Points:
                  <ul className="mt-1 space-y-1">
                    {upcomingEvent.points.map(pt => (
                      <li key={pt} className="text-white hover:text-[#e60046] transition-colors">{pt}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin size={18} className="text-[#e60046]" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <AnimatedButton variant="primary">See Details</AnimatedButton>
              <AnimatedButton variant="outline">View All Events</AnimatedButton>
            </div>
          </motion.div>

          {/* Recent Event Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#e60046] p-2 relative group overflow-hidden bg-white/5"
          >
            <div className="relative w-full h-full min-h-[400px] rounded-[20px] overflow-hidden">
              <Image src={recentEvent.image} alt={recentEvent.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a40]/90 via-[#0f2a40]/40 to-transparent" />
              
              <div className="absolute top-6 right-6">
                <div className="bg-white text-[#12314a] px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                  RECENT EVENT
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug drop-shadow-lg">
                  {recentEvent.title}
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
