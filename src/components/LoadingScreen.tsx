import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-dark-950 flex flex-col items-center justify-center"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-xl shadow-gold-500/20">
              <Play className="h-10 w-10 text-dark-950 fill-dark-950 ml-1" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Etienne<span className="gold-text">Visuals</span>
            </h2>
            <p className="text-sm text-gray-500">Stories that change lives</p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-0.5 gold-gradient rounded-full mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
