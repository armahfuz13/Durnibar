'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { members, Member } from '@/data/members';
import Image from 'next/image';
import { Search, MapPin, Facebook, Mail, MessageCircle, X, ChevronUp, ChevronDown } from 'lucide-react';

type SortOption = 'a-z' | 'z-a' | 'id';
type FilterOption = 'all' | 'male' | 'female' | 'cr';

export function MembersPageClient() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterOption>('all');
  const [sort, setSort] = useState<SortOption>('id');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalAtBottom, setIsModalAtBottom] = useState(false);

  React.useEffect(() => {
    if (selectedMember) {
      setIsModalAtBottom(false);
    }
  }, [selectedMember]);

  const stats = useMemo(() => {
    const total = members.length;
    let male = 0;
    let female = 0;
    members.forEach(m => {
      if (m.gender.toLowerCase() === 'male') male++;
      else if (m.gender.toLowerCase() === 'female') female++;
    });
    return { total, male, female };
  }, []);

  const filteredAndSortedMembers = useMemo(() => {
    let result = [...members].filter(m => m.id !== '2202020' && m.id !== '2302041');

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(m => 
        m.name.toLowerCase().includes(q) || 
        m.id.toLowerCase().includes(q)
      );
    }

    // Filter
    if (filter === 'male') {
      result = result.filter(m => m.gender.toLowerCase() === 'male');
    } else if (filter === 'female') {
      result = result.filter(m => m.gender.toLowerCase() === 'female');
    } else if (filter === 'cr') {
      result = result.filter(m => m.role?.toLowerCase() === 'cr');
    }

    // Sort
    result.sort((a, b) => {
      if (sort === 'a-z') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'z-a') {
        return b.name.localeCompare(a.name);
      } else {
        // default ID sort
        return a.id.localeCompare(b.id);
      }
    });

    return result;
  }, [search, filter, sort]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 pb-20 px-4 lg:px-12 max-w-5xl mx-auto relative min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-3">
          Meet Durnibar 6
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-medium tracking-wide mb-6">
          Different individuals, one shared identity
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <div className="bg-[#e60046]/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-[#e60046]/30 shadow-lg shadow-[#e60046]/10">
            <span className="text-gray-300 block text-xs uppercase tracking-wider mb-1">Total Members</span>
            <span className="font-bold text-2xl text-white">{stats.total}</span>
          </div>
          <div className="bg-[#e60046]/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-[#e60046]/30 shadow-lg shadow-[#e60046]/10">
            <span className="text-gray-300 block text-xs uppercase tracking-wider mb-1">Male / Female</span>
            <span className="font-bold text-2xl text-white">{stats.male} / {stats.female}</span>
          </div>
        </div>
      </motion.div>

      {/* Filter & Search Bar - Sticky */}
      <div className="bg-[#0f2a40] py-4 mb-8 border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between max-w-5xl mx-auto">
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-xl leading-5 bg-white/5 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e60046] focus:border-[#e60046] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['all', 'male', 'female', 'cr'] as FilterOption[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  filter === f 
                    ? 'bg-[#e60046] text-white border-[#e60046]' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {f === 'cr' ? 'CR' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="block w-full pl-3 pr-10 py-2 text-base border-white/20 focus:outline-none focus:ring-[#e60046] focus:border-[#e60046] sm:text-sm rounded-xl bg-white/5 text-white"
            >
              <option value="id">Sort by ID</option>
              <option value="a-z">Name (A-Z)</option>
              <option value="z-a">Name (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-center md:text-left text-sm text-gray-400 max-w-5xl mx-auto">
          Showing {filteredAndSortedMembers.length} of {stats.total} members
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredAndSortedMembers.map(member => {
            const isCR = member.role?.toLowerCase() === 'cr';
            
            return (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMember(member)}
                className={`relative rounded-3xl p-6 bg-[#183858] border cursor-pointer group transition-all overflow-hidden ${
                  isCR ? 'border-[#e60046]/50 shadow-[0_0_20px_rgba(230,0,70,0.15)] bg-gradient-to-b from-[#e60046]/10 to-[#183858]' : 'border-white/10 hover:border-white/30 hover:bg-[#1a4066]'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 ${isCR ? 'border-[#e60046]' : 'border-[#0f2a40]'} shadow-lg group-hover:scale-105 transition-transform`}>
                    {member.photo_url ? (
                      <Image 
                        src={member.photo_url} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0f2a40] flex items-center justify-center text-2xl font-bold text-gray-400">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#e60046] transition-colors line-clamp-1">{member.name}</h3>
                  <p className="text-gray-400 font-mono text-sm mb-4">ID: {member.id}</p>

                  {isCR && (
                    <span className="absolute top-4 right-4 bg-[#e60046] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      CR
                    </span>
                  )}

                  <div className="flex items-center gap-3 mt-auto relative z-10" onClick={(e) => e.stopPropagation()}>
                    {member.facebook_url && (
                      <a href={member.facebook_url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-2.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
        
        {filteredAndSortedMembers.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-400">
            No members found matching your search or filters.
          </div>
        )}
      </motion.div>

      {/* Special Members Section */}
      <motion.div layout className="mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white mb-2">Special Members</h2>
          <div className="w-24 h-1 bg-[#e60046] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6">
          {members.filter(m => m.id === '2202020' || m.id === '2302041').map(member => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMember(member)}
              className="relative rounded-3xl p-6 bg-[#183858] border border-[#e60046]/50 shadow-[0_0_15px_rgba(230,0,70,0.1)] bg-gradient-to-b from-[#e60046]/10 to-[#183858] cursor-pointer group transition-all overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#e60046] shadow-lg group-hover:scale-105 transition-transform">
                  {member.photo_url ? (
                    <Image 
                      src={member.photo_url} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0f2a40] flex items-center justify-center text-2xl font-bold text-gray-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#e60046] transition-colors line-clamp-1">{member.name}</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">ID: {member.id}</p>
                <div className="flex items-center gap-3 mt-auto relative z-10" onClick={(e) => e.stopPropagation()}>
                  {member.facebook_url && (
                    <a href={member.facebook_url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="p-2.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-[#e60046] text-white rounded-full shadow-2xl hover:bg-[#c4003d] transition-colors z-40"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#183858] border border-white/10 w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl relative my-4 max-h-[85vh] flex flex-col"
              >
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-3 right-3 z-10 p-1.5 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative w-full aspect-[4/3] bg-[#0f2a40] shrink-0">
                  {selectedMember.photo_url ? (
                    <Image 
                      src={selectedMember.photo_url} 
                      alt={selectedMember.name} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gray-500">
                      {selectedMember.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183858] via-[#183858]/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 pt-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">
                      {selectedMember.name}
                    </h2>
                    <p className="text-gray-300 font-mono text-sm sm:text-base">ID: {selectedMember.id}</p>
                  </div>
                </div>

                <div 
                  className="p-5 sm:p-6 pt-3 overflow-y-auto scroll-smooth overscroll-contain"
                  onScroll={(e) => {
                    const target = e.target as HTMLDivElement;
                    setIsModalAtBottom(target.scrollHeight - target.scrollTop <= target.clientHeight + 15);
                  }}
                >
                  {selectedMember.hometown && (
                    <div className="flex items-center gap-2 text-gray-300 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
                      <MapPin className="w-4 h-4 text-[#e60046]" />
                      <span className="text-sm sm:text-base">{selectedMember.hometown}</span>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Fun Fact</h4>
                    <p className="text-sm text-gray-300 italic bg-black/20 p-3 rounded-lg">
                      Waiting to be filled with an amazing story...
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedMember.facebook_url && (
                      <a href={selectedMember.facebook_url} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[100px] flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#1864cc] transition-colors">
                        <Facebook className="w-4 h-4" />
                        <span className="hidden sm:inline">Facebook</span>
                      </a>
                    )}
                    {selectedMember.email && (
                      <a href={`mailto:${selectedMember.email}`} className="flex-1 min-w-[100px] flex items-center justify-center gap-2 bg-white/10 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/10">
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">Email</span>
                      </a>
                    )}
                    {selectedMember.whatsapp && (
                      <a href={`https://wa.me/${selectedMember.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[100px] flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#20bd5a] transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {!isModalAtBottom && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#183858] via-[#183858]/80 to-transparent flex items-end justify-center pb-2 z-10 rounded-b-2xl"
                    >
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-5 h-5 text-white/50 drop-shadow-md" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
