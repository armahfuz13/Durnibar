import React from 'react';
import { footerLinks, navLinks } from '@/data';
import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#0f2a40] border-t border-white/10 pt-20 pb-10 px-4 text-center mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/">
          <div className="mb-10 flex items-center justify-center">
            <Image src="/images/durnibar6-logo.png" alt="Durnibar 06" width={200} height={60} className="h-16 w-auto object-contain brightness-0 invert" />
          </div>
        </Link>
        
        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-gray-300 hover:text-white font-medium uppercase tracking-widest text-sm transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link href="#" className="w-12 h-12 rounded-full bg-[#1877f2]/20 text-[#1877f2] flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all transform hover:scale-110 border border-[#1877f2]/30">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="w-12 h-12 rounded-full bg-[#e1306c]/20 text-[#e1306c] flex items-center justify-center hover:bg-[#e1306c] hover:text-white transition-all transform hover:scale-110 border border-[#e1306c]/30">
            <Instagram size={20} />
          </Link>
          <Link href="mailto:edte6th@gmail.com" className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#0f2a40] transition-all transform hover:scale-110 border border-white/30">
            <Mail size={20} />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8 max-w-4xl" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-gray-400 mb-4 flex-wrap">
          {footerLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
              {i < footerLinks.length - 1 && <span className="hidden md:inline text-gray-600">|</span>}
            </React.Fragment>
          ))}
        </div>
        
        <p className="text-xs text-gray-500">
          © 2026 Durnibar-06. All rights reserved.
        </p>

      </div>
    </footer>
  );
};
