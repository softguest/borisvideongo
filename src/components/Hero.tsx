import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { SITE, STATS, TRUSTED_ORGS, IMAGES } from "@/data/siteData";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp(value, 2500, inView);

  return (
    <motion.div ref={ref} variants={fadeInUp} className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gold-text-light mb-1">
        {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Documentary filmmaking in action"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/70 to-dark-950" />
        {/* Gold accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/10 via-transparent to-transparent" />
      </div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gold-300">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              NGO Storytelling Videographer · Cameroon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
          >
            Powerful Storytelling Videos That Help NGOs{" "}
            <span className="gold-text">Inspire, Raise Funds</span>{" "}
            & Show Real Impact
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            I help nonprofits, humanitarian organizations, and community projects turn their 
            impact into emotional stories that donors remember.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group gold-gradient gold-gradient-hover px-8 py-4 rounded-full text-base font-semibold text-dark-950 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 hover:scale-105 flex items-center gap-2"
            >
              Book a Free Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group glass hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Play className="h-5 w-5 text-gold-400" />
              View My Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 glass rounded-2xl p-6 lg:p-8"
          >
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </motion.div>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {TRUSTED_ORGS.map((org) => (
              <span key={org} className="text-sm text-gray-400/60 font-medium hover:text-gold-400 transition-colors cursor-default">
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-gold-400/60" />
      </motion.div>
    </section>
  );
}
