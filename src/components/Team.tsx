import React from "react";
import { motion } from "motion/react";
import { Linkedin, Instagram, Users, UserPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Member {
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
}

const teamData = {
  core: [
    {
      name: "Sarah Jenkins",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      socials: { linkedin: "#", instagram: "#" }
    },
    {
      name: "David Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      socials: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Amara Okoro",
      role: "Convenor",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
      socials: { linkedin: "#" }
    }
  ],
  coordinators: [
    {
      name: "Mark Wilson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      socials: { linkedin: "#" }
    },
    {
      name: "Lisa Zhang",
      role: "Media Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      socials: { instagram: "#" }
    },
    {
      name: "James Miller",
      role: "Volunteer Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      socials: { linkedin: "#", instagram: "#" }
    }
  ],
  members: [
    {
      name: "Elena Rodriguez",
      role: "Active Member",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sam Patel",
      role: "Active Member",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Chloe Smith",
      role: "Active Member",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Tom Harris",
      role: "Active Member",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
    }
  ]
};

interface MemberCardProps {
  member: Member;
  isCore?: boolean;
  index?: number;
  key?: React.Key;
}

function MemberCard({ member, isCore = false }: MemberCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -10 }}
      className={`bg-white p-6 rounded-[32px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group ${isCore ? 'scale-105 z-10' : 'h-full'}`}
    >
      <div className="relative mb-4">
        <div className={`overflow-hidden rounded-full border-4 border-forest/5 group-hover:border-sun/20 transition-colors duration-300 ${isCore ? 'w-32 h-32' : 'w-24 h-24'}`}>
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <h4 className={`font-display font-bold text-forest mb-1 ${isCore ? 'text-xl' : 'text-lg'}`}>{member.name}</h4>
      <p className="text-sage font-medium text-sm mb-4">{member.role}</p>
      
      {member.socials && (
        <div className="flex gap-3">
          {member.socials.linkedin && (
            <motion.a 
              href={member.socials.linkedin} 
              whileHover={{ scale: 1.2, color: "#0077b5" }}
              className="text-forest/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          )}
          {member.socials.instagram && (
            <motion.a 
              href={member.socials.instagram} 
              whileHover={{ scale: 1.2, color: "#e4405f" }}
              className="text-forest/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-sage font-medium mt-4">The people driving Eco Nexus forward</p>
        </div>

        {/* Join Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 p-8 bg-forest/5 rounded-[40px] border border-forest/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-forest mb-2">Join Our Community</h3>
            <p className="text-forest/70">Become part of our growing community and help us make a real impact.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="#join" 
              className="px-8 py-4 bg-forest text-white font-bold rounded-2xl hover:bg-forest/90 transition-all shadow-xl shadow-forest/10 flex items-center gap-2 group whitespace-nowrap"
            >
              <UserPlus className="w-5 h-5" />
              Join the Club
            </a>
            <Link 
              to="/members" 
              className="px-8 py-4 bg-white text-forest border border-forest/10 font-bold rounded-2xl hover:bg-forest/5 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              View All Members
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Core Team */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-sage/20" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Core Leadership</h3>
            <div className="h-px flex-grow bg-sage/20" />
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          >
            {teamData.core.map((member, i) => (
              <MemberCard key={i} member={member} isCore />
            ))}
          </motion.div>
        </div>

        {/* Coordinators */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-sage/20" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Coordinators</h3>
            <div className="h-px flex-grow bg-sage/20" />
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {teamData.coordinators.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </motion.div>
        </div>

        {/* Active Members */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-sage/20" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Active Members</h3>
            <div className="h-px flex-grow bg-sage/20" />
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {teamData.members.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
