import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Heart, ArrowUp, Send, MapPin, Mail, Phone, Camera, Briefcase, Globe } from "lucide-react";
import { SITE } from "@/data/siteData";
import { fadeInUp } from "@/utils/animations";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }} className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gold-gradient">
                <Play className="h-5 w-5 text-dark-950 fill-dark-950" />
              </div>
              <span className="text-lg font-bold text-white">
                Etienne<span className="gold-text">Visuals</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Professional NGO storytelling videographer based in Cameroon. 
              Helping organizations turn impact into unforgettable stories.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Play, href: SITE.social.youtube },
                { icon: Camera, href: SITE.social.instagram },
                { icon: Briefcase, href: SITE.social.linkedin },
                { icon: Globe, href: SITE.social.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0" />
                {SITE.location}
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get storytelling tips and behind-the-scenes content delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="text-sm text-gold-400">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="gold-gradient px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-gold-500/20 transition-all"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 text-dark-950" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. Made with{" "}
            <Heart className="inline h-3 w-3 text-gold-400 fill-gold-400" /> in Cameroon.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
