import { motion } from "motion/react";
import { Calendar, User, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Urban Reforestation",
    excerpt: "Discover how planting trees in cities can significantly reduce the urban heat island effect and improve air quality.",
    content: "Urban reforestation is more than just planting trees; it's about creating sustainable ecosystems within our concrete jungles. Studies show that a healthy canopy can reduce local temperatures by up to 5 degrees Celsius...",
    author: "Elena Rivers",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Zero Waste Living: A Beginner's Guide",
    excerpt: "Small changes in your daily routine can lead to a massive reduction in your environmental footprint.",
    content: "Starting a zero-waste journey can feel overwhelming, but it's all about progress over perfection. Start by auditing your trash and identifying the top three single-use items you can replace...",
    author: "Marcus Thorne",
    date: "March 22, 2026",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Protecting Our Local Waterways",
    excerpt: "Learn about the simple steps you can take to prevent pollution from reaching our rivers and oceans.",
    content: "Our local rivers are the lifeblood of our ecosystem. Unfortunately, urban runoff carries pollutants directly into these sensitive habitats. By using eco-friendly detergents and properly disposing of chemicals...",
    author: "Sarah Chen",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Eco Insights
          </motion.h2>
          <p className="text-sage font-medium mt-4">Stories, tips, and updates from our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fdfcf8] rounded-[40px] overflow-hidden border border-sage/10 hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-sage mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-forest mb-3 group-hover:text-sun transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-forest/70 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-auto inline-flex items-center gap-2 text-forest font-bold text-sm hover:text-sun transition-colors group/btn"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-[40px] shadow-2xl text-forest"
          >
            <div className="h-64 md:h-80 relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-10">
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-sage mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedPost.title}</h2>
              
              <div className="prose prose-forest max-w-none">
                <p className="text-lg text-forest/80 leading-relaxed">
                  {selectedPost.content}
                </p>
                {/* Add more placeholder content to make it look like a full post */}
                <p className="mt-6 text-forest/70 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
