import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle, CheckCircle, Play, Camera, Briefcase, Globe } from "lucide-react";
import { SITE } from "@/data/siteData";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";

const PROJECT_TYPES = [
  "NGO Impact Video",
  "Event Coverage",
  "Fundraising Campaign",
  "Documentary Film",
  "Social Media Content",
  "Beneficiary Interviews",
  "Drone Coverage",
  "Photography",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    // In production, this would send data to an API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-sm uppercase tracking-widest text-gold-400 font-medium mb-4 block">
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Tell <span className="gold-text">Your Story?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
            Let's discuss your project. Fill out the form or reach out directly — 
            I typically respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-gold-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <div className="text-white font-medium">{SITE.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-gold-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">{SITE.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-medium">{SITE.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">{SITE.phone}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Play, href: SITE.social.youtube, color: "hover:bg-red-500/20 hover:text-red-400" },
                  { icon: Camera, href: SITE.social.instagram, color: "hover:bg-pink-500/20 hover:text-pink-400" },
                  { icon: Briefcase, href: SITE.social.linkedin, color: "hover:bg-blue-500/20 hover:text-blue-400" },
                  { icon: Globe, href: SITE.social.twitter, color: "hover:bg-sky-500/20 hover:text-sky-400" },
                ].map(({ icon: Icon, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 transition-all duration-300 ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-dark-950" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-400 max-w-sm mx-auto">
                      Thank you for reaching out. I'll get back to you within 24 hours. 
                      For faster response, message me on WhatsApp.
                    </p>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 gold-gradient px-6 py-3 rounded-full text-sm font-semibold text-dark-950 mt-6"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Me
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name <span className="text-gold-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email <span className="text-gold-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                          placeholder="+237 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-dark-800">Select a project type</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-dark-800">{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message <span className="text-gold-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-gradient gold-gradient-hover py-4 rounded-xl text-base font-semibold text-dark-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
