'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/data';
import { Facebook, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/members' || href === '/member') {
      e.preventDefault();
      router.push('/?membersBlocked=true');
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f2a40]/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image src="/images/durnibar6-logo.png" alt="Durnibar 06" width={150} height={45} className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-gray-300 hover:text-white transition-colors relative group text-sm lg:text-base font-medium px-2 py-1"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e60046] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61582993750818"
            className="hidden md:flex bg-[#1877f2] hover:bg-[#166fe5] text-white p-2 rounded-full transition-colors"
            target="_blank"
          >
            <Facebook size={18} />
          </Link>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0f2a40] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white font-medium text-lg"
                  onClick={(e) => {
                    handleNavLinkClick(e, link.href);
                    if (link.href !== '/members' && link.href !== '/member') {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://www.facebook.com/profile.php?id=61582993750818"
                className="w-fit bg-[#1877f2] hover:bg-[#166fe5] text-white p-2 rounded-full transition-colors"
                target="_blank"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
