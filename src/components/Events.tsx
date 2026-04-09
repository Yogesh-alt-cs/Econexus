import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, X } from "lucide-react";
import { useState, FormEvent } from "react";

const events = [
  {
    id: 1,
    title: "Spring Tree Plantation",
    date: "April 22, 2026",
    location: "Green Valley Park",
    description: "Join us for our annual Earth Day tree planting event. We aim to plant 200 native saplings.",
  },
  {
    id: 2,
    title: "Beach Cleanup Drive",
    date: "May 15, 2026",
    location: "Sunset Coast",
    description: "Help us keep our oceans clean. We'll be collecting plastic waste and documenting our findings.",
  },
  {
    id: 3,
    title: "Sustainability Workshop",
    date: "June 05, 2026",
    location: "Eco Nexus HQ",
    description: "Learn how to reduce your carbon footprint with practical tips from environmental experts.",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [isRsvpMode, setIsRsvpMode] = useState(false);
  const [isRsvpSuccess, setIsRsvpSuccess] = useState(false);

  const handleRsvp = (e: FormEvent) => {
    e.preventDefault();
    setIsRsvpSuccess(true);
    setTimeout(() => {
      setIsRsvpSuccess(false);
      setIsRsvpMode(false);
      setSelectedEvent(null);
    }, 3000);
  };

  const closeModals = () => {
    setSelectedEvent(null);
    setIsRsvpMode(false);
  };

  return (
    <section id="events" className="py-24 px-6 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-forest"
          >
            Upcoming Events
          </motion.h2>
          <p className="text-sage font-medium mt-4">Get involved in our next community actions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedEvent(event)}
              className="bg-white p-8 rounded-[40px] border border-sage/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-sun mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">{event.date}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-forest mb-3 group-hover:text-sun transition-colors">{event.title}</h3>
              <div className="flex items-center gap-2 text-sage mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{event.location}</span>
              </div>
              <p className="text-forest/70 text-sm mb-8 flex-grow leading-relaxed line-clamp-2">{event.description}</p>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedEvent(event); }}
                className="w-full py-4 bg-forest text-white font-bold rounded-2xl hover:bg-forest/90 transition-all shadow-lg shadow-forest/10"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details & RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg p-10 rounded-[40px] shadow-2xl text-forest"
            >
              <button 
                onClick={closeModals}
                className="absolute top-6 right-6 p-2 hover:bg-sage/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-sage" />
              </button>

              {!isRsvpMode ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sun">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest">{selectedEvent.date}</span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold">{selectedEvent.title}</h3>
                  
                  <div className="flex items-center gap-2 text-sage">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{selectedEvent.location}</span>
                  </div>
                  
                  <div className="py-6 border-y border-sage/10">
                    <p className="text-forest/80 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setIsRsvpMode(true)}
                    className="w-full py-4 bg-forest text-white font-bold rounded-2xl shadow-xl shadow-forest/20 hover:bg-forest/90 transition-all"
                  >
                    RSVP for this Event
                  </button>
                </div>
              ) : !isRsvpSuccess ? (
                <>
                  <h3 className="text-2xl font-display font-bold mb-2">Confirm RSVP</h3>
                  <p className="text-sage text-sm mb-8">{selectedEvent.title}</p>
                  
                  <form onSubmit={handleRsvp} className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Your Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full pb-2 bg-transparent border-b-2 border-sage/20 focus:border-forest outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full pb-2 bg-transparent border-b-2 border-sage/20 focus:border-forest outline-none transition-all"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button 
                        type="button"
                        onClick={() => setIsRsvpMode(false)}
                        className="flex-1 py-4 border-2 border-sage/20 font-bold rounded-2xl"
                      >
                        Back
                      </button>
                      <button className="flex-[2] py-4 bg-forest text-white font-bold rounded-2xl shadow-xl shadow-forest/20">
                        Confirm RSVP
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">See you there!</h3>
                  <p className="text-sage">Your spot for {selectedEvent.title} is confirmed.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
