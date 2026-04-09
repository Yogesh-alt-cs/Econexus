import { motion } from "motion/react";
import { BookOpen, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    title: "Learning",
    description: "Gain deep knowledge about local ecosystems and sustainable practices through workshops.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Real-World Impact",
    description: "Participate in hands-on projects that directly improve our environment and community.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Community",
    description: "Connect with like-minded individuals who share your passion for the planet.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Experience",
    description: "Build your portfolio and gain leadership experience in the environmental sector.",
    icon: <Award className="w-6 h-6" />,
  },
];

export default function WhyJoin() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Why Join Eco Nexus?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.02, 0.47, 0.98] }}
            className="text-sage font-medium mt-4"
          >
            Be part of something bigger than yourself.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] } }
              }}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#fdfcf8] rounded-[32px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-forest mb-3">{benefit.title}</h3>
              <p className="text-forest/70 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
