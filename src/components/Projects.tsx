'use client';

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Vortex Dash",
      category: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Lumia Studio",
      category: "Creative Agency",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Ether Wallet",
      category: "Web3 App",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Zenith Flow",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="md:py-32 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-8">
          <div>
            <span className="text-brand-secondary font-mono text-sm uppercase tracking-[0.4em] block mb-4">Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-display font-black leading-[0.9] uppercase tracking-tighter">
              FEATURED <br />
              <span className="text-gradient">WORKS</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-lg">
            A selection of my best work, from complex SaaS dashboards to creative agency websites.
            Focused on pixel-perfect implementation and delightful interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />

                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-900 hover:bg-gradient-main hover:text-white hover:glow-primary transition-all">
                    <Github size={20} />
                  </div>
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-900 hover:bg-gradient-main hover:text-white hover:glow-secondary transition-all">
                    <ExternalLink size={20} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/90 via-white/50 to-transparent">
                  <span className="text-brand-secondary font-mono text-xs uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-slate-900 underline decoration-brand-primary decoration-4 underline-offset-8 decoration-transparent group-hover:decoration-brand-primary transition-all">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="md:mt-20 mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="text-xl font-display font-bold uppercase tracking-tighter border-b-4 border-brand-primary pb-1 hover:text-brand-secondary hover:border-brand-secondary transition-all glow-secondary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}