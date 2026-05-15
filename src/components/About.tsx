'use client';
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* Placeholder for Profile Image */}
              <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-white flex items-center justify-center">
                <span className="text-slate-400 font-display">MUDABBER ASGHAR</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block glow-primary">
              <span className="block text-4xl font-display font-black text-gradient">05+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tighter uppercase">
              BEYOND THE <br />
              <span className="text-gradient">PIXELS</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I am a passionate software engineer based in Asia, dedicated to crafting
              meaningful digital experiences. My journey started with a curiosity for how
              things work on the web, and it has evolved into a career of building
              high-performance applications that users love.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I specialize in React, Next.js, and modern CSS frameworks like Tailwind.
              My design philosophy is rooted in minimalism and functionality, ensuring
              that every component I build serves a clear purpose while looking beautiful.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
              <div>
                <span className="block text-slate-900 font-bold mb-1 underline decoration-brand-primary underline-offset-4 tracking-tighter">Location</span>
                <span className="text-slate-500">Mars, Solar System</span>
              </div>
              <div>
                <span className="block text-slate-900 font-bold mb-1 underline decoration-brand-primary underline-offset-4 tracking-tighter">Availability</span>
                <span className="text-slate-500">Open for Freelance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
