import { motion } from "framer-motion";
import { Film, Video, Heart, Users, Smartphone, Mic, Plane, Camera, ArrowRight } from "lucide-react";
import { SERVICES, SITE } from "@/data/siteData";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Film, Video, Heart, Users, Smartphone, Mic, Plane, Camera,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-sm uppercase tracking-widest text-gold-400 font-medium mb-4 block">
            What I Offer
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Storytelling <span className="gold-text">Services</span> That Drive Impact
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
            From documentary films to social media reels, I provide end-to-end video 
            production services tailored for NGOs and humanitarian organizations.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Film;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group glass rounded-2xl p-6 lg:p-8 hover:border-gold-500/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-600/0 group-hover:from-gold-500/5 group-hover:to-gold-600/5 transition-all duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.description}</p>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors group/cta"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
