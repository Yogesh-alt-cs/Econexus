import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Award, Users, Globe, Leaf } from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "The Beginning",
    description: "EcoNexus was founded by students with a passion for urban sustainability.",
    icon: <Users className="w-5 h-5" />,
    leafPos: 15,
  },
  {
    year: "2026",
    title: "First Major Drive",
    description: "Collected over 1,000 lbs of plastic waste from local beaches in a single weekend.",
    icon: <Calendar className="w-5 h-5" />,
    leafPos: 40,
  },
  {
    year: "2026",
    title: "Community Garden",
    description: "Transformed a vacant lot into a thriving community garden and education center.",
    icon: <Globe className="w-5 h-5" />,
    leafPos: 65,
  },
  {
    year: "2026",
    title: "Sustainability Award",
    description: "Recognized by the city council for outstanding contributions to local ecology.",
    icon: <Award className="w-5 h-5" />,
    leafPos: 85,
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // SVG Path for the organic vine
  const vinePath = "M 20 0 Q 40 100 20 200 Q 0 300 20 400 Q 40 500 20 600 Q 0 700 20 800 Q 40 900 20 1000";

  return (
    <section id="impact" className="py-24 px-6 bg-[#fdfcf8] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest/5 rounded-full mb-4"
          >
            <Leaf className="w-4 h-4 text-forest" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">Growing Together</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-forest">Our Journey</h2>
          <p className="text-forest/60 mt-4">A timeline of our growth and environmental milestones.</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical SVG Vine */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-10 flex justify-center">
            <svg width="40" height="100%" viewBox="0 0 40 1000" preserveAspectRatio="none" className="h-full">
              {/* Background Path */}
              <path
                d={vinePath}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-sage/20"
              />
              {/* Animated Path */}
              <motion.path
                d={vinePath}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength }}
                className="text-forest"
              />
            </svg>
          </div>

          {/* Leaves on the Vine */}
          {milestones.map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              initial={{ scale: 0, opacity: 0, rotate: i % 2 === 0 ? -45 : 45 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
              className={`absolute left-1/2 z-20 text-forest/40`}
              style={{ 
                top: `${milestones[i].leafPos}%`,
                transform: `translateX(${i % 2 === 0 ? '-24px' : '4px'})`
              }}
            >
              <Leaf className={`w-5 h-5 ${i % 2 === 0 ? '-scale-x-100' : ''}`} />
            </motion.div>
          ))}

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, rotate: index % 2 === 0 ? 2 : -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: 0.3
                  }}
                  className="w-[42%] bg-white p-8 rounded-[32px] shadow-sm border border-sage/10 relative hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-sun/10 rounded-2xl flex items-center justify-center text-sun rotate-12 group-hover:rotate-0 transition-transform">
                    <span className="font-bold text-sm">{milestone.year}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-forest mb-3 mt-2">{milestone.title}</h3>
                  <p className="text-forest/70 leading-relaxed text-sm">{milestone.description}</p>
                </motion.div>

                {/* Node */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-forest rounded-2xl border-4 border-white shadow-xl z-30 flex items-center justify-center text-white rotate-45 group/node cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-forest/40 blur-xl rounded-2xl opacity-0 group-hover/node:opacity-100 transition-opacity duration-300" />
                  
                  <div className="-rotate-45 relative z-10">
                    {milestone.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 opacity-0 group-hover/node:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/node:translate-y-0 z-50">
                    <div className="bg-forest text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-2xl border border-white/10 -rotate-45">
                      <p className="text-sun mb-0.5">{milestone.year}</p>
                      <p>{milestone.title}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-forest rotate-45 -translate-y-1" />
                    </div>
                  </div>
                </motion.div>

                {/* Spacer */}
                <div className="w-[42%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

