import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

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
            Client Stories
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            What Organizations <span className="gold-text">Say About</span> My Work
          </motion.h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-12 relative min-h-[320px] flex items-center">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-gold-500/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed text-center mb-8 italic font-display">
                  "{TESTIMONIALS[current].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-lg font-bold text-dark-950">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{TESTIMONIALS[current].name}</div>
                    <div className="text-sm text-gold-400">{TESTIMONIALS[current].role}</div>
                    <div className="text-sm text-gray-400">{TESTIMONIALS[current].org}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold-400 w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white hover:text-gold-400 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Trust Logos */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Trusted by leading organizations across Cameroon & Central Africa</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {["UNICEF", "World Vision", "Care Int'l", "Red Cross", "Plan Int'l", "WaterAid"].map((org) => (
              <span key={org} className="text-lg font-semibold text-gray-600 hover:text-gold-400 transition-colors duration-300 cursor-default">
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
