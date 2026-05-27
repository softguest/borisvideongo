import { motion } from "framer-motion";
import { Search, FileText, Clapperboard, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, FileText, Clapperboard, Sparkles,
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-800 to-dark-950" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-sm uppercase tracking-widest text-gold-400 font-medium mb-4 block">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            From Vision to <span className="gold-text">Finished Film</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
            A streamlined, professional process designed to make your storytelling 
            project seamless and impactful from start to finish.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] || Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-50%] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-gold-500/30 to-gold-500/10" />
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-500/30"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </div>
                )}

                <div className="glass rounded-2xl p-8 text-center group-hover:border-gold-500/20 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-20 h-20 mx-auto mb-6"
                  >
                    <div className="absolute inset-0 gold-gradient rounded-xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative w-full h-full rounded-xl border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 transition-colors">
                      <Icon className="h-8 w-8 text-gold-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 gold-gradient rounded-full flex items-center justify-center text-xs font-bold text-dark-950">
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
