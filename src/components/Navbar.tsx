import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";
import { SITE } from "@/data/siteData";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Why Stories", href: "#why-storytelling" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-2 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gold-gradient group-hover:scale-110 transition-transform duration-300">
                <Play className="h-5 w-5 text-dark-950 fill-dark-950" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Etienne<span className="gold-text">Visuals</span>
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gold-gradient group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient gold-gradient-hover px-5 py-2.5 rounded-full text-sm font-semibold text-dark-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:scale-105"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-strong border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center gold-gradient px-5 py-3 rounded-full text-sm font-semibold text-dark-950"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
