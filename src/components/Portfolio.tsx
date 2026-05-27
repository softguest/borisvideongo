import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/data/siteData";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-sm uppercase tracking-widest text-gold-400 font-medium mb-4 block">
            Featured Work
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Stories That <span className="gold-text">Changed Lives</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed">
            Every project is a story of real people, real impact, and real transformation. 
            Here are some of the stories I've had the privilege to tell.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "gold-gradient text-dark-950 shadow-lg shadow-gold-500/20"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`portfolio-card group relative rounded-2xl overflow-hidden cursor-pointer ${
                  item.featured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedProject(index)}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Play Button */}
                <div className="play-overlay absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-xl shadow-gold-500/30"
                  >
                    <Play className="h-7 w-7 text-dark-950 fill-dark-950 ml-1" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-gold-400 uppercase tracking-wider font-medium">{item.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-1 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.org}</p>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="gold-gradient px-3 py-1 rounded-full text-xs font-semibold text-dark-950">
                      Featured
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-2xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={filteredItems[selectedProject]?.image}
                  alt={filteredItems[selectedProject]?.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-dark-950/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center animate-pulse-gold">
                    <Play className="h-8 w-8 text-dark-950 fill-dark-950 ml-1" />
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm text-gold-400 uppercase tracking-wider font-medium">
                  {filteredItems[selectedProject]?.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-2">
                  {filteredItems[selectedProject]?.title}
                </h3>
                <p className="text-gray-400 mt-2">
                  Created for {filteredItems[selectedProject]?.org}
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  This project showcases the transformative impact of community-driven initiatives. 
                  Through intimate interviews, cinematic footage, and authentic storytelling, we captured 
                  the essence of real change happening on the ground.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
