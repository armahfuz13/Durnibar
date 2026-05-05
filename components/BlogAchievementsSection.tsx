'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { PenTool, Trophy } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { blogs, achievements } from '@/data';
import { AnimatedButton } from './AnimatedButton';

export const BlogAchievementsSection = () => {
  return (
    <section className="py-20 px-4" id="blog">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        {/* Blog Column */}
        <div className="space-y-8">
          <div className="flex justify-start">
            <SectionLabel label="BLOG" icon={<PenTool size={16} />} />
          </div>
          
          <div className="space-y-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-4 flex gap-4 items-center group hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#12314a] truncate group-hover:text-[#e60046] transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 font-medium text-sm mt-1">{blog.author}</p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 md:line-clamp-none">{blog.description}</p>
                  <p className="text-[#e60046] text-xs font-bold mt-2 uppercase">{blog.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="pt-4">
            <AnimatedButton variant="primary">View All Blogs</AnimatedButton>
          </div>
        </div>

        {/* Achievements Column */}
        <div className="space-y-8" id="achievements">
          <div className="flex justify-start">
            <SectionLabel label="ACHIEVEMENTS" icon={<Trophy size={16} />} />
          </div>
          
          <div className="space-y-6">
            {achievements.map((acc, i) => (
              <motion.div
                key={acc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-4 flex gap-4 items-center group hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                  <Image src={acc.image} alt={acc.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#12314a] leading-tight group-hover:text-[#e60046] transition-colors">{acc.title}</h3>
                  <p className="text-gray-500 font-medium text-sm mt-2">{acc.name}</p>
                  <p className="text-[#e60046] text-xs font-bold mt-1 uppercase">{acc.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="pt-4">
            <AnimatedButton variant="primary">View All Achievements</AnimatedButton>
          </div>
        </div>

      </div>
    </section>
  );
};
