'use client';

import { motion } from "motion/react";
import { Code2, Palette, Globe, Cpu, Database, Zap } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Frontend Dev", icon: <Code2 size={24} />, tags: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { name: "UI/UX Design", icon: <Palette size={24} />, tags: ["Figma", "Motion", "Prototyping"] },
    { name: "Backend Logic", icon: <Database size={24} />, tags: ["Node.js", "PostgreSQL", "Firebase"] },
    { name: "Performance", icon: <Zap size={24} />, tags: ["Optimization", "Lighthouse", "SEO"] },
  ];

  const marqueeText = ["CREATIVITY", "PRECISION", "CODE", "DESIGN", "ANIMATION", "STRATEGY"];

  return (
    <section id="skills" className="py-32 bg-brand-bg">
      <div className="mb-20 overflow-hidden border-y border-slate-100 py-6">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <span key={i} className="text-6xl md:text-8xl font-display font-black text-stroke uppercase">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group hover:glow-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-gradient-main group-hover:text-white transition-all">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight text-slate-900">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
