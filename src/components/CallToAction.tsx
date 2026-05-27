import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { SITE, IMAGES } from "@/data/siteData";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.children}
          alt="Community impact"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 via-transparent to-gold-600/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gold-300 mb-8">
            <Sparkles className="h-4 w-4" />
            Limited availability — Book your project today
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Let's Tell Stories That{" "}
            <span className="gold-text">Change Lives</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need donor-focused storytelling, event coverage, or social media 
            impact videos, let's create something meaningful together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group gold-gradient gold-gradient-hover px-8 py-4 rounded-full text-base font-semibold text-dark-950 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="group glass hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Mail className="h-5 w-5 text-gold-400" />
              Send an Email
            </a>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Calendar className="h-5 w-5 text-gold-400" />
              Book a Call
            </a>
          </motion.div>

          {/* Urgency */}
          <motion.div variants={fadeInUp} className="glass rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-sm text-gray-400">
              ⚡ I only take on <strong className="text-gold-400">3-4 projects per month</strong> to ensure 
              every story gets the attention it deserves. Reach out today to secure your spot.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
