'use client';
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary" />
          <span className="text-gradient font-medium uppercase tracking-[0.3em] text-sm md:text-base">
            Creative Developer & Designer
          </span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[12vw] md:text-[8rem] font-display font-black leading-[0.85] uppercase tracking-tighter"
          >
            CRAFTING <br />
            <span className="text-stroke">DIGITAL</span> <br />
            <span className="text-gradient">EXPERIENCE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -top-10 right-0 md:right-20 hidden lg:block"
          >
            <div className="w-40 h-40 rounded-full border border-black/5 flex items-center justify-center animate-spin-slow">
              <span className="p-4 text-brand-secondary">
                <ArrowDownRight size={48} />
              </span>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-xl text-slate-600 text-lg md:text-xl mt-12 mb-10 leading-relaxed"
        >
          I build high-performance, visually stunning web applications with a focus on
          user experience and cutting-edge animations. Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-primary border border-white/20">
            View My Works
          </button>
          <button className="px-8 py-4 border border-black/10 text-slate-900 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-slate-50 transition-colors">
            Lets Talk
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      />
    </section>
  );
}
