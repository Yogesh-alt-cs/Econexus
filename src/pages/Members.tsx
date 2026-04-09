import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Instagram, Search, ArrowLeft, Filter, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Member {
  id: number;
  name: string;
  role: string;
  category: "Core Team" | "Coordinator" | "Member";
  image: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
}

const allMembers: Member[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "President",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Passionate about urban sustainability and community building. Leading Eco Nexus since 2021.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "David Chen",
    role: "Vice President",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in renewable energy systems. Focused on practical solutions for local ecological challenges.",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "Amara Okoro",
    role: "Convenor",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    bio: "Organizing our major events and ensuring smooth coordination across all departments.",
    socials: { linkedin: "#" }
  },
  {
    id: 4,
    name: "Mark Wilson",
    role: "Event Coordinator",
    category: "Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    socials: { linkedin: "#" }
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Media Lead",
    category: "Coordinator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    socials: { instagram: "#" }
  },
  {
    id: 6,
    name: "James Miller",
    role: "Volunteer Head",
    category: "Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    socials: { linkedin: "#", instagram: "#" }
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 8,
    name: "Sam Patel",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 9,
    name: "Chloe Smith",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 10,
    name: "Tom Harris",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 11,
    name: "Aisha Khan",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 12,
    name: "Liam O'Connor",
    role: "Active Member",
    category: "Member",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
  }
];

const MemberCard = ({ member, isLarge = false }: { member: Member; isLarge?: boolean; key?: any }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -10 }}
    className={`bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative ${isLarge ? 'md:p-10' : ''}`}
  >
    {/* Bio Tooltip */}
    {member.bio && !isLarge && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 z-50 w-64">
        <div className="bg-forest text-white p-4 rounded-2xl text-xs leading-relaxed shadow-2xl border border-white/10 relative">
          {member.bio}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-forest rotate-45 -translate-y-1.5" />
        </div>
      </div>
    )}

    <div className="relative mb-6">
      <div className={`overflow-hidden rounded-full border-4 border-forest/5 group-hover:border-sun/20 transition-colors duration-300 ${isLarge ? 'w-40 h-40' : 'w-28 h-28'}`}>
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    <h4 className={`font-display font-bold text-forest mb-1 ${isLarge ? 'text-2xl' : 'text-lg'}`}>{member.name}</h4>
    <p className="text-sage font-medium text-sm mb-4">{member.role}</p>
    
    {member.bio && isLarge && (
      <p className="text-forest/60 text-sm mb-6 max-w-xs leading-relaxed">{member.bio}</p>
    )}

    <div className="flex gap-3 mt-auto">
      {member.socials?.linkedin && (
        <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center text-forest/40 hover:text-forest hover:bg-forest/10 transition-all">
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {member.socials?.instagram && (
        <a href={member.socials.instagram} className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center text-forest/40 hover:text-sun hover:bg-sun/10 transition-all">
          <Instagram className="w-4 h-4" />
        </a>
      )}
      {!member.socials && (
        <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center text-forest/20">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  </motion.div>
);

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Core Team" | "Coordinator" | "Member">("All");

  const filteredMembers = useMemo(() => {
    return allMembers.filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            m.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === "All" || m.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const coreTeam = useMemo(() => filteredMembers.filter(m => m.category === "Core Team"), [filteredMembers]);
  const others = useMemo(() => filteredMembers.filter(m => m.category !== "Core Team"), [filteredMembers]);

  return (
    <div className="min-h-screen bg-[#fdfcf8]">
      <Navbar />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf8]/0 to-[#fdfcf8]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sage hover:text-forest transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-forest mb-4"
          >
            Our Team & Members
          </motion.h1>
          <p className="text-sage font-medium text-lg">The passionate people behind Eco Nexus</p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {(["All", "Core Team", "Coordinator", "Member"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter 
                    ? "bg-forest text-white shadow-lg shadow-forest/20" 
                    : "bg-sage/5 text-sage hover:bg-sage/10"
                }`}
              >
                {filter === "Member" ? "Members" : filter === "Coordinator" ? "Coordinators" : filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage" />
            <input 
              type="text"
              placeholder="Search by name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-sage/5 border border-sage/10 rounded-2xl focus:outline-none focus:border-forest/30 transition-all text-forest placeholder:text-sage/50"
            />
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="popLayout">
          {filteredMembers.length > 0 ? (
            <div className="space-y-20">
              {/* Highlight Core Team */}
              {coreTeam.length > 0 && (
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Core Leadership</h3>
                    <div className="h-px flex-grow bg-sage/20" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreTeam.map(member => (
                      <MemberCard key={member.id} member={member} isLarge />
                    ))}
                  </div>
                </div>
              )}

              {/* Others */}
              {others.length > 0 && (
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Team & Community</h3>
                    <div className="h-px flex-grow bg-sage/20" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {others.map(member => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-sage/5 rounded-full flex items-center justify-center mx-auto mb-6 text-sage">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-forest mb-2">No members found</h3>
              <p className="text-sage">Try adjusting your search or filter to find who you're looking for.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-12 px-6 bg-forest text-white/40 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase">
            © 2026 Eco Nexus Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
