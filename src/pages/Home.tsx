import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import ImpactCounter from "../components/ImpactCounter";
import WhyJoin from "../components/WhyJoin";
import Events from "../components/Events";
import Blog from "../components/Blog";
import News from "../components/News";
import WhyPartner from "../components/WhyPartner";
import Team from "../components/Team";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, UserPlus, ArrowUp, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Coming soon!");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScrollTop(scrollPercent > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-sun selection:text-forest relative">
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <ImpactCounter />
        <Projects />
        <Events />
        <Blog />
        <News />
        <Timeline />
        <Testimonials />
        <WhyPartner />
        <Team />
        <Contact />
      </main>
      
      {/* Sticky CTA Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-forest/90 transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://chat.whatsapp.com/LQzZOSX51W70nsSOc6CWHJ?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all group relative"
          title="Join our community instantly"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-forest text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
            Join our community instantly
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-forest rotate-45 -translate-x-1" />
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#25D366]/40 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>

        {/* Sticky Join CTA */}
        <motion.a
          href="#join"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-sun text-forest px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-sun/90 transition-all"
        >
          <UserPlus className="w-5 h-5" />
          <span className="hidden sm:inline">Join Now</span>
        </motion.a>
      </div>

      <footer className="py-16 px-6 bg-forest text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            {[
              { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
              { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
              { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/econexus_nceh/?utm_source=ig_web_button_share_sheet" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                onClick={social.href === "#" ? handleSocialClick : undefined}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, color: "#FFD700" }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center transition-colors border border-white/10"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-sm font-medium tracking-widest uppercase text-white/40">
            © 2026 Eco Nexus Club. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/20">
            Built with passion for our planet.
          </p>
        </div>
      </footer>
    </div>
  );
}
