'use client';
import { Instagram, Linkedin, Mail, MessageSquare, Send, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-8"
          >
            SAY <span className="text-stroke">HELLO</span><span className="text-secondary">.</span>
          </motion.h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Got a project in mind? Or just want to say hi? My inbox is always open.
            Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-10 rounded-3xl">
              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight text-slate-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-main group-hover:glow-primary transition-all text-slate-600 group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <span className="text-slate-600 group-hover:text-brand-primary transition-colors">MudabberKhan@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-main group-hover:glow-secondary transition-all text-slate-600 group-hover:text-white">
                    <MessageSquare size={20} />
                  </div>
                  <span className="text-slate-600 group-hover:text-brand-secondary transition-colors">Twitter @mudabber_dev</span>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">Social Follow</h4>
                <div className="flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: "var(--color-brand-primary)", color: "#fff" }}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center cursor-pointer text-slate-600"
                    >
                      <Icon size={20} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400 resize-none" placeholder="Tell me about your project..." />
            </div>
            <button className="w-full bg-gradient-main text-white py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group glow-primary">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}