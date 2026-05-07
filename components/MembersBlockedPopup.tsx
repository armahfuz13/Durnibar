'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, Lock } from 'lucide-react';

interface MembersBlockedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembersBlockedPopup: React.FC<MembersBlockedPopupProps> = ({ isOpen, onClose }) => {
  // Auto close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0f2a40] border-2 border-[#e60046]/50 shadow-[0_0_30px_rgba(230,0,70,0.3)] rounded-2xl p-8 z-[10000] text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#e60046]/10 rounded-full flex items-center justify-center border border-[#e60046]/30 shadow-[0_0_15px_rgba(230,0,70,0.2)]">
                <Lock className="w-8 h-8 text-[#e60046]" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
              Access Temporarily Restricted
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              For security reasons, the Members page is currently unavailable. Protecting member privacy is our top priority. Please check back later. Thank you.
            </p>

            <motion.div 
              className="mt-8 pt-6 border-t border-white/10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            >
              <div className="h-1 bg-[#e60046] rounded-full shadow-[0_0_8px_#e60046]" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
