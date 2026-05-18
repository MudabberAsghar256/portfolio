'use client';
import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/MudabberAsghar256", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AsgharAs45206", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mudabber-asghar-a8b065132/", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-brand-bg mb-7 pt-10 md:pt-20 pb-4 px-6 overflow-hidden border-t border-slate-100">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12">
          {/* Brand & CTA Section */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-black tracking-tighter text-gradient"
            >
              MUDABBER ASGHAR
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-display font-bold max-w-sm leading-tight text-slate-900"
            >
              Building digital products, brands, and experience.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: "var(--color-brand-primary)" }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-brand-secondary font-bold">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-900 transition-colors text-base font-display flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-brand-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-brand-primary font-bold">Get in Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-mono">Email</span>
                  <a href="mailto:hello@mudabber.dev" className="text-slate-600 hover:text-brand-primary transition-colors text-sm">hello@mudabber.dev</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-mono">Location</span>
                  <p className="text-slate-600 text-sm">Mars, Solar System, 0001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="md:pt-8 pt-4 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] text-center md:text-left">
            &copy; {new Date().getFullYear()} Handcrafted with Passion by Mudabber Khan
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-main rounded-xl flex items-center justify-center text-white glow-primary border border-white/20"
          >
            <ArrowUp size={20} />
          </motion.button>

          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
