import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Heart, Eye, DollarSign, VideoOff, Video } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";

const REASONS = [
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Stories trigger empathy. When donors see real faces and hear real voices, they connect emotionally and are 22x more likely to remember your cause.",
    stat: "22x",
    statLabel: "More Memorable",
  },
  {
    icon: Eye,
    title: "Increased Engagement",
    description: "Video content generates 1200% more shares than text and images combined. Your impact deserves to be seen and shared widely.",
    stat: "1200%",
    statLabel: "More Shares",
  },
  {
    icon: DollarSign,
    title: "Higher Donations",
    description: "Organizations using video storytelling see an average 57% increase in online donations. Stories don't just inspire — they drive action.",
    stat: "57%",
    statLabel: "More Donations",
  },
  {
    icon: TrendingUp,
    title: "Donor Trust & Retention",
    description: "Transparent storytelling builds trust. Donors who see real impact are 3x more likely to give again and become long-term supporters.",
    stat: "3x",
    statLabel: "More Retention",
  },
];

const WITHOUT_STORIES = [
  "Generic annual reports nobody reads",
  "Donor fatigue and declining engagement",
  "Difficulty showing real impact",
  "Low social media reach",
  "Missed fundraising opportunities",
];

const WITH_STORIES = [
  "Emotionally compelling impact videos",
  "Donors who feel personally connected",
  "Visible, shareable transformation stories",
  "Viral social media content",
  "Oversubscribed fundraising campaigns",
];

export default function WhyStorytelling() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-storytelling" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-sm uppercase tracking-widest text-gold-400 font-medium mb-4 block">
            Why Storytelling Matters
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            NGOs That Tell <span className="gold-text">Powerful Stories</span> Win More Hearts & Funding
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
            In a world overwhelmed by information, the organizations that stand out are the ones 
            that make people <em>feel</em> something. Your impact is real — let's make it unforgettable.
          </motion.p>
        </motion.div>

        {/* Reason Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 lg:p-8 group hover:border-gold-500/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-7 w-7 text-dark-950" />
              </div>
              <div className="text-3xl font-bold gold-text mb-1">{reason.stat}</div>
              <div className="text-xs text-gold-400 uppercase tracking-wider mb-4">{reason.statLabel}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Without Storytelling */}
          <motion.div
            variants={fadeInLeft}
            className="glass rounded-2xl p-8 lg:p-10 border-red-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <VideoOff className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400">Without Storytelling</h3>
            </div>
            <ul className="space-y-4">
              {WITHOUT_STORIES.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500/60 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Storytelling */}
          <motion.div
            variants={fadeInRight}
            className="glass rounded-2xl p-8 lg:p-10 border-gold-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                <Video className="h-6 w-6 text-dark-950" />
              </div>
              <h3 className="text-xl font-bold gold-text">With Storytelling</h3>
            </div>
            <ul className="space-y-4">
              {WITH_STORIES.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-200"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
