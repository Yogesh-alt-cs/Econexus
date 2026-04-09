import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { TreePine, Droplets, Users, Recycle } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
}

export default function ImpactCounter() {
  return (
    <section className="py-24 px-6 bg-forest text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TreePine className="w-8 h-8 text-sun" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-sun mb-2">
              <Counter value={1000} />
            </h3>
            <p className="text-xs uppercase tracking-widest font-bold text-white/60">Trees Planted</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Recycle className="w-8 h-8 text-sun" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-sun mb-2">
              <Counter value={500} suffix="kg" />
            </h3>
            <p className="text-xs uppercase tracking-widest font-bold text-white/60">Waste Recycled</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-8 h-8 text-sun" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-sun mb-2">
              <Counter value={52000} suffix="L" />
            </h3>
            <p className="text-xs uppercase tracking-widest font-bold text-white/60">Water Conserved</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-sun" />
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-sun mb-2">
              <Counter value={30} suffix="+" />
            </h3>
            <p className="text-xs uppercase tracking-widest font-bold text-white/60">Volunteers Joined</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

