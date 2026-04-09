import { motion } from "motion/react";
import { Newspaper, ArrowRight, Twitter, Linkedin, Facebook, Share2 } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "March 28, 2026",
    title: "New Reforestation Project Launched in North District",
    excerpt: "We've partnered with local schools to plant over 2,000 native trees this month.",
  },
  {
    id: 2,
    date: "March 15, 2026",
    title: "Eco Nexus Wins 'Green Community' Award",
    excerpt: "Our efforts in water conservation have been recognized by the National Environmental Board.",
  },
  {
    id: 3,
    date: "March 02, 2026",
    title: "Upcoming Beach Cleanup: Volunteers Needed",
    excerpt: "Join us next Saturday for our biggest coastal restoration event of the year.",
  }
];

export default function News() {
  const shareOnTwitter = (title: string) => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = (title: string) => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <section id="news" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Latest News
          </motion.h2>
          <p className="text-sage font-medium mt-4">Stay updated with our latest activities and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-[#fdfcf8] rounded-[32px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sun">
                  <Newspaper className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.date}</span>
                </div>
                
                {/* Share Buttons */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => shareOnTwitter(item.title)}
                    className="p-1.5 text-sage hover:text-[#1DA1F2] transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => shareOnFacebook()}
                    className="p-1.5 text-sage hover:text-[#4267B2] transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => shareOnLinkedIn(item.title)}
                    className="p-1.5 text-sage hover:text-[#0077B5] transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-forest mb-3 leading-tight group-hover:text-sun transition-colors">{item.title}</h3>
              <p className="text-forest/70 text-sm mb-6 flex-grow leading-relaxed">{item.excerpt}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <button className="flex items-center gap-2 text-forest font-bold text-sm hover:text-sun transition-colors group/btn">
                  Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-1 text-sage/40 text-[10px] font-bold uppercase tracking-widest">
                  <Share2 className="w-3 h-3" />
                  Share
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-4 bg-forest text-white font-bold rounded-2xl hover:bg-forest/90 transition-all shadow-xl shadow-forest/10 inline-flex items-center gap-2 group">
            View All News
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
