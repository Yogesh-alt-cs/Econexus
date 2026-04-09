import { motion } from "motion/react";
import { Eye, Handshake, Leaf, BarChart3 } from "lucide-react";

const partnerBenefits = [
  {
    title: "Brand Visibility",
    description: "Showcase your organization's commitment to sustainability across our digital platforms and at live events.",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: "Community Engagement",
    description: "Connect your team with meaningful local volunteer opportunities and environmental workshops.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    title: "CSR Alignment",
    description: "Seamlessly integrate our initiatives into your Corporate Social Responsibility strategy with verified impact.",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: "Measurable Impact",
    description: "Receive detailed reports on the environmental contributions made possible through your partnership.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export default function WhyPartner() {
  return (
    <section id="partner" className="py-24 px-6 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Why Partner with Us?
          </motion.h2>
          <p className="text-sage font-medium mt-4 max-w-2xl mx-auto">
            We collaborate with organizations to drive large-scale environmental change and foster sustainable communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-[32px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-forest mb-3">{benefit.title}</h3>
              <p className="text-forest/70 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
