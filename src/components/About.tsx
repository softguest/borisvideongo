import { motion } from "framer-motion";
import { MapPin, Award, Camera, Film } from "lucide-react";
import { ABOUT_TIMELINE, IMAGES } from "@/data/siteData";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "react-intersection-observer";

function AchievementCounter({ end, label, icon: Icon }: { end: number; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const count = useCountUp(end, 2000, inView);
  return (
    <div ref={ref} className="text-center">
      <Icon className="h-6 w-6 text-gold-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{Math.floor(count)}+</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

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
            About Me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            The Filmmaker Behind <span className="gold-text">The Stories</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={IMAGES.filmmaker}
                alt="Etienne - NGO Storytelling Videographer"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 glass-strong rounded-xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <div>
                  <div className="text-sm font-semibold text-white">Based in</div>
                  <div className="text-xs text-gold-400">Douala, Cameroon</div>
                </div>
              </div>
            </motion.div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-500/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-500/30 rounded-br-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInRight} className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm <strong className="text-white">Etienne</strong>, a documentary filmmaker and storytelling 
              videographer based in <strong className="text-gold-400">Cameroon</strong>. For over 8 years, 
              I've been helping NGOs, nonprofits, and humanitarian organizations transform their impact into 
              visual stories that move people to action.
            </motion.p>
            <motion.p variants={fadeInRight} className="text-gray-400 leading-relaxed mb-6">
              My journey began with a simple belief: every community has a story worth telling, and every 
              story has the power to change lives. From remote villages to international conferences, I've 
              traveled across Cameroon and Central Africa capturing the moments that matter most.
            </motion.p>
            <motion.p variants={fadeInRight} className="text-gray-400 leading-relaxed mb-8">
              I don't just make videos — I create emotional connections between organizations and the people 
              they serve. My human-centered approach ensures that every beneficiary's voice is heard, every 
              transformation is documented, and every donor feels the impact of their contribution.
            </motion.p>

            {/* Achievement Counters */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 glass rounded-xl p-6 mb-10"
            >
              <AchievementCounter end={120} label="Projects" icon={Film} />
              <AchievementCounter end={45} label="Organizations" icon={Award} />
              <AchievementCounter end={8} label="Years" icon={Camera} />
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Journey</h3>
              {ABOUT_TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="text-sm font-bold gold-text shrink-0 w-12">{item.year}</span>
                  <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.event}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
