'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-colors text-sm sm:text-base cursor-pointer';
  
  const variants = {
    primary: 'bg-[#e60046] text-white hover:bg-pink-700 shadow-[0_0_15px_rgba(230,0,70,0.5)] hover:shadow-[0_0_25px_rgba(230,0,70,0.8)]',
    outline: 'bg-transparent border border-gray-400 text-gray-200 hover:border-white hover:text-white',
    white: 'bg-white text-[#12314a] hover:bg-gray-100',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
