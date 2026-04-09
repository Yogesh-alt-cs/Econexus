import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage/20 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-12 h-12 flex items-center justify-center transition-all duration-500"
        >
          <img src="/logo.jpg" alt="Eco Nexus Logo" className="w-full h-full object-contain rounded-full shadow-md shadow-forest/20" />
        </motion.div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl text-forest tracking-tight leading-none">Eco Nexus</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-sage font-bold leading-none mt-1">Sustaining Tomorrow</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-forest/80">
        <a href="#home" className="hover:text-forest transition-colors">Home</a>
        <a href="#projects" className="hover:text-forest transition-colors">Projects</a>
        <a href="#impact" className="hover:text-forest transition-colors">Impact</a>
        <a href="#join" className="bg-forest text-white px-5 py-2 rounded-full hover:bg-forest/90 transition-all">Join Us</a>
      </div>
    </motion.nav>
  );
}
