import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Joining Eco Nexus changed how I see my city. We're not just planting trees; we're building a legacy.",
    author: "Syed Usman",
    role: "Member since 2026",
    image: "/syed_usman.jpg"
  },
  {
    quote: "The community here is incredible. It's rare to find a group so dedicated to practical, local action.",
    author: "Thejas HD",
    role: "Member since 2026",
    image: "/thejas_hd.jpg"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Voices of the Nexus
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fdfcf8] p-10 rounded-[40px] border border-sage/10 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-sage/10" />
              <p className="text-xl text-forest/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-forest">{t.author}</h4>
                  <p className="text-sm text-sage font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
