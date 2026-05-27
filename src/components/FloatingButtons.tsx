import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { SITE } from "@/data/siteData";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9990] w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-dark-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with me
        </span>
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-[9990] w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
