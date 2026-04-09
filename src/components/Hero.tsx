import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown, ArrowRight, Leaf, MessageCircle } from "lucide-react";
import Lottie from "lottie-react";

// Nature-themed Lottie animation (Floating leaves/particles)
const natureLottieUrl = "https://lottie.host/6f6f4f2a-8f3a-4f9e-8e3a-8f3a4f9e8e3a/nature.json";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Particle data for floating leaves/dust
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 10,
    rotation: Math.random() * 360,
  }));

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Lush forest"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Lottie Animation Background */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <Lottie 
          animationData={null} // We'll use path for external JSON
          path="https://assets3.lottiefiles.com/packages/lf20_m6cuL6.json"
          loop={true}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Particle Background - Floating Leaves */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: `${p.x}%`, 
              y: `${p.y}%`, 
              opacity: 0,
              rotate: p.rotation
            }}
            animate={{ 
              y: [`${p.y}%`, `${p.y - 30}%`],
              x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`],
              opacity: [0, 0.15, 0],
              rotate: [p.rotation, p.rotation + 180]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute text-white/20"
          >
            <Leaf size={p.size} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      {/* Animated Mist/Clouds */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: ["-20%", "20%"],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: ["20%", "-20%"],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(135,206,235,0.05)_0%,transparent_70%)] blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
          >
            Nurturing Nature, <br />
            <motion.span 
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="text-sun inline-block"
            >
              One Seed at a Time
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            Join Eco Nexus in our mission to restore local ecosystems and build a sustainable future for our community.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              className="px-8 py-4 bg-sun text-forest font-bold rounded-full shadow-lg"
            >
              Explore Our Projects
            </motion.a>
            <motion.a 
              href="https://chat.whatsapp.com/LQzZOSX51W70nsSOc6CWHJ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp
            </motion.a>
            <motion.a 
              href="#join" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full transition-all"
            >
              Join the Club
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a 
              href="#partner" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white/60 hover:text-sun transition-colors font-bold text-sm uppercase tracking-widest group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center"
          >
            <motion.a 
              href="#news" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm text-white/80 border border-white/20 font-bold rounded-full text-sm hover:bg-white/10 hover:text-sun transition-all flex items-center gap-2 group"
            >
              Latest News 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Impact Stats */}
          <div className="pt-12 flex items-center justify-center gap-12 text-white/80">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.21, 1.02, 0.47, 0.98]
              }}
              className="text-center"
            >
              <p className="text-3xl font-display font-bold text-sun">12k+</p>
              <p className="text-xs uppercase tracking-widest font-bold">Trees Planted</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-px h-10 bg-white/20 origin-bottom" 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: [0.21, 1.02, 0.47, 0.98]
              }}
              className="text-center"
            >
              <p className="text-3xl font-display font-bold text-sun">50k</p>
              <p className="text-xs uppercase tracking-widest font-bold">Liters Saved</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
