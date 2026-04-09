import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, User, CheckCircle2, Heart, Users, Handshake, Droplets, ArrowRight, ArrowLeft, MessageCircle, Instagram } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [] as string[],
    availability: '',
    message: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          interests: formData.interests.join(", "),
          availability: formData.availability,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setStep(1);
          setFormData({ name: '', email: '', interests: [], availability: '', message: '' });
        }, 8000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      alert(`Something went wrong: ${error.message}. Please try again or contact us via WhatsApp.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-24 px-6 bg-forest text-white relative overflow-hidden">
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-sun/10 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Users className="w-4 h-4 text-sun" />
            <span className="text-xs font-bold uppercase tracking-widest">Join 200+ members making real impact</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Ready to grow <br />
            <span className="text-sun">with us?</span>
          </motion.h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
            Become a part of Eco Nexus. Our multi-step onboarding helps us find the best way for you to contribute.
          </p>
          
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-colors hover:bg-white/10 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-sun" />
              </div>
              <div>
                <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-lg font-medium">econexusnceh@gmail.com</p>
              </div>
            </motion.div>

            <motion.a 
              href="https://chat.whatsapp.com/LQzZOSX51W70nsSOc6CWHJ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 transition-all hover:bg-[#25D366]/20 group"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 mt-[-6px]">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#25D366] uppercase tracking-widest font-bold">Join WhatsApp</p>
                <p className="text-lg font-medium text-white">Join our community instantly</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/econexus_nceh/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 rounded-2xl border border-[#fd1d1d]/20 transition-all hover:opacity-80 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center shadow-lg shadow-[#fd1d1d]/20 mt-[-6px]">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#fcb045] uppercase tracking-widest font-bold">Follow Instagram</p>
                <p className="text-lg font-medium text-white">Stay updated on our journey</p>
              </div>
            </motion.a>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Volunteer", icon: <Heart className="w-5 h-5" /> },
                { label: "Donate", icon: <Droplets className="w-5 h-5" /> },
                { label: "Partner", icon: <Handshake className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center gap-2"
                >
                  <div className="text-sun">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[40px] shadow-2xl text-forest relative min-h-[500px] flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-sage">Step {step} of 3</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-8 h-1 rounded-full transition-colors ${i <= step ? 'bg-forest' : 'bg-sage/20'}`} />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold">Basic Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full pb-2 bg-transparent border-b-2 border-sage/20 focus:border-forest outline-none transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full pb-2 bg-transparent border-b-2 border-sage/20 focus:border-forest outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                    <button 
                      disabled={!formData.name || !formData.email}
                      onClick={nextStep}
                      className="w-full py-4 bg-forest text-white font-bold rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold">Your Interests</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {['Tree Plantation', 'Recycling', 'Water Conservation'].map((interest) => (
                        <button
                          key={interest}
                          onClick={() => toggleInterest(interest)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            formData.interests.includes(interest) 
                              ? 'border-forest bg-forest/5 text-forest' 
                              : 'border-sage/10 hover:border-sage/30'
                          }`}
                        >
                          <span className="font-bold">{interest}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevStep} className="flex-1 py-4 border-2 border-sage/20 font-bold rounded-2xl flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button 
                        disabled={formData.interests.length === 0}
                        onClick={nextStep}
                        className="flex-[2] py-4 bg-forest text-white font-bold rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold">Final Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Availability</label>
                        <div className="grid grid-cols-2 gap-4">
                          {['Weekdays', 'Weekends'].map((time) => (
                            <button
                              key={time}
                              onClick={() => setFormData({...formData, availability: time})}
                              className={`p-4 rounded-2xl border-2 text-center transition-all ${
                                formData.availability === time 
                                  ? 'border-forest bg-forest/5 text-forest' 
                                  : 'border-sage/10 hover:border-sage/30'
                              }`}
                            >
                              <span className="font-bold">{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-sage mb-2 block">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Tell us why you want to join..."
                          className="w-full p-4 bg-sage/5 border-2 border-sage/10 rounded-2xl focus:border-forest outline-none transition-all min-h-[100px] resize-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={prevStep} className="flex-1 py-4 border-2 border-sage/20 font-bold rounded-2xl flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button 
                        disabled={!formData.availability || !formData.message || isSubmitting}
                        onClick={handleSubmit}
                        className="flex-[2] py-4 bg-forest text-white font-bold rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Submit Application"} <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-forest" />
                </div>
                <h3 className="text-3xl font-display font-bold text-forest mb-2">Application Received!</h3>
                <p className="text-sage font-medium">Your application has been submitted successfully. We’ll contact you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


