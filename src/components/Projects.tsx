import { motion, AnimatePresence } from "motion/react";
import { TreePine, Recycle, Droplets, MapPin, X, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Urban Reforestation",
    location: "Downtown Park",
    category: "Reforestation",
    impact: "500+ Trees Planted",
    description: "Our flagship initiative focused on restoring native canopy cover in urban heat islands.",
    details: {
      trees: "542",
      volunteers: "120",
      area: "2.5 Acres"
    },
    icon: <TreePine className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
    ],
    color: "bg-forest"
  },
  {
    id: 2,
    title: "Community Recycling",
    location: "Westside Hub",
    category: "Recycling",
    impact: "2 Tons Waste Diverted",
    description: "A community-driven circular economy project reducing landfill waste through education and sorting.",
    details: {
      waste: "2.1 Tons",
      households: "450",
      centers: "3"
    },
    icon: <Recycle className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605600611284-19561ad7ddf0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1591193516411-aa6303956731?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&q=80&w=800"
    ],
    color: "bg-sage"
  },
  {
    id: 3,
    title: "Water Conservation",
    location: "River Basin",
    category: "Water Conservation",
    impact: "10k Gallons Saved",
    description: "Implementing smart irrigation and rainwater harvesting systems across local parks.",
    details: {
      water: "10,200 Gal",
      systems: "15",
      savings: "25%"
    },
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800"
    ],
    color: "bg-sky"
  }
];

const categories = ["All", "Reforestation", "Recycling", "Water Conservation"];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button onClick={prev} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60 w-1.5'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const toggleExpand = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage font-bold uppercase tracking-widest text-sm"
          >
            Our Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest mt-2"
          >
            Ongoing Initiatives
          </motion.h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-forest text-white shadow-lg shadow-forest/20" 
                  : "bg-sage/5 text-sage hover:bg-sage/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: expandedId === project.id ? 0 : -10 }}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-sage/10 cursor-pointer"
                onClick={(e) => toggleExpand(e, project.id)}
              >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Impact Overlay on Hover */}
                <div className="absolute inset-0 bg-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-white text-center backdrop-blur-sm">
                  <div className="mb-4 p-4 bg-white/20 rounded-full">
                    {project.icon}
                  </div>
                  <p className="text-sun font-bold text-xl mb-2">{project.impact}</p>
                  <p className="text-sm text-white/80 mb-6">Direct environmental contribution through our community-led program.</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-sage mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{project.location}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-forest mb-4">{project.title}</h3>
                
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ImageCarousel images={project.gallery} />
                      
                      <p className="text-forest/70 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {Object.entries(project.details).map(([key, value]) => (
                          <div key={key} className="bg-sage/5 p-3 rounded-2xl text-center">
                            <p className="text-[10px] uppercase tracking-wider text-sage font-bold mb-1">{key}</p>
                            <p className="text-sm font-bold text-forest">{value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between gap-4">
                  <div className={`h-1 bg-sun rounded-full transition-all duration-500 ${expandedId === project.id ? 'w-0' : 'w-12 group-hover:w-24'}`} />
                  <button
                    onClick={(e) => toggleExpand(e, project.id)}
                    className="text-xs font-bold uppercase tracking-widest text-forest hover:text-sun transition-colors"
                  >
                    {expandedId === project.id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

