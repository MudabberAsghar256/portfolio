'use client';
import React from "react";
import emailjs from "@emailjs/browser";
import {
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Twitter
} from "lucide-react";
import { motion } from "motion/react";
const socialLinks = [
  { icon: Twitter, href: "https://x.com/AsgharAs45206", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mudabber-asghar-a8b065132/", label: "LinkedIn" },

];
export default function Contact() {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
    emailjs.sendForm(
      "service_11tnfts",
      "template_uowag2j",
      e.currentTarget,
      "x8-wXElbXu9x3JOKt"
    )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.currentTarget.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };
  return (
    <section id="contact" className="md:py-32 py-10 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-8"
          >
            SAY <span className="text-stroke">HELLO</span>
            <span className="text-secondary">.</span>
          </motion.h2>

          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Got a project in mind? Or just want to say hi? My inbox is always open.
            Lets build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-10 rounded-3xl">
              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-6">

                <a href="mailto:MudabberKhan@gmail.com">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-main group-hover:glow-primary transition-all text-slate-600 group-hover:text-white">
                      <Mail size={20} />
                    </div>

                    <span className="text-slate-600 group-hover:text-brand-primary transition-colors">
                      MudabberKhan@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-main group-hover:glow-secondary transition-all text-slate-600 group-hover:text-white">
                    <Twitter size={20} />
                  </div>

                  <span className="text-slate-600 group-hover:text-brand-secondary transition-colors">
                    <a
                      href="https://x.com/AsgharAs45206"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      @MudabberAsghar45206
                    </a>
                  </span>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">
                  Social Follow
                </h4>

                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ y: -5, color: "var(--color-brand-primary)" }}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl space-y-6"
            onSubmit={sendEmail}
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Message
              </label>

              <textarea
                rows={4}
                name="message"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 placeholder:text-slate-400 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button className="w-full bg-gradient-main text-white py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group glow-primary">
              Send Message

              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}