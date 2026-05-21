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
            initial={{ opacity: 0, y: 120, rotateX: 90, filter: "blur(20px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              letterSpacing: "-0.02em",
              textShadow:
                "0px 0px 20px rgba(255,255,255,0.4), 0px 0px 60px rgba(255,255,255,0.2)",
            }}
            className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-8 perspective-[1200px]"
          >
            <motion.span
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              SAY
            </motion.span>{" "}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -15,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.15,
                rotate: [-2, 2, -2, 0],
                transition: { duration: 0.6 },
              }}
              className="text-stroke inline-block origin-center"
            >
              HELLO
            </motion.span>
            <motion.span
              animate={{
                scale: [1, 1.8, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-secondary inline-block"
            >
              .
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: "blur(20px)",
              rotateX: 90,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              rotateX: 0,
            }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="relative text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed perspective-[1200px]"
          >
            {/* Aurora Glow Behind Text */}
            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 blur-3xl opacity-20
    bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            />
            {/* Floating Word Animation */}
            {[
              "Got",
              "a",
              "project",
              "in",
              "mind?",
              "Or",
              "just",
              "want",
              "to",
              "say",
              "hi?",
              "My",
              "inbox",
              "is",
              "always",
              "open.",
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 90,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  color: "#ffffff",
                  textShadow: "0px 0px 20px rgba(255,255,255,0.4)",
                }}
                className="inline-block mr-2 relative z-10 cursor-default"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {/* Second Line */}
            {"Lets build something extraordinary together."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1 + i * 0.08,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    y: -5,
                    color: "#fff",
                  }}
                  className="inline-block mr-2 relative z-10"
                >
                  {word}
                </motion.span>
              ))}

            {/* Animated Energy Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{
                delay: 2,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="h-[2px] mx-auto mt-6 rounded-full
    bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 perspective-[2000px]">
          {/* LEFT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              rotateY: -40,
              x: -120,
              scale: 0.8,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              rotateY: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              rotateY: 8,
              rotateX: 5,
              y: -10,
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            className="relative group preserve-3d"
          >

            {/* Animated Gradient Aura */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700
    bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:300%_300%]"
            />

            <div className="glass p-10 rounded-3xl relative overflow-hidden border border-white/10">

              {/* Floating Light */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                  rotate: [0, 25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-40 h-full bg-white/10 blur-2xl"
              />

              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{
                    x: 12,
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href="mailto:MudabberKhan@gmail.com">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center
            group-hover:bg-gradient-main transition-all duration-500 text-slate-600 group-hover:text-blue-400
            group-hover:rotate-[360deg]">
                        <Mail size={20} />
                      </div>

                      <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
                        MudabberKhan@gmail.com
                      </span>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{
                    x: 12,
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center mt-3 gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center
        group-hover:bg-gradient-main transition-all duration-500 text-slate-600 group-hover:text-blue-400
        group-hover:rotate-[360deg]">
                    <Twitter size={20} />
                  </div>

                  <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
                    <a
                      href="https://x.com/AsgharAs45206"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @MudabberAsghar45206
                    </a>
                  </span>

                </motion.div>
                <div className="mt-12">
                  <motion.h4
                    initial={{
                      opacity: 0,
                      y: 30,
                      filter: "blur(10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="text-sm font-bold font-mono uppercase tracking-widest mb-6 
    bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-pink-500 
    bg-clip-text text-transparent bg-[length:300%_300%] animate-gradient"
                  >
                    Social Follow
                  </motion.h4>

                  <div className="flex gap-4 flex-wrap">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          rotate: -180,
                          filter: "blur(10px)",
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          delay: 0.15 * i,
                          duration: 0.9,
                          type: "spring",
                          stiffness: 120,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          y: -12,
                          scale: 1.15,
                          rotate: [0, -10, 10, -6, 0],
                          boxShadow:
                            "0px 0px 25px rgba(59,130,246,0.35), 0px 0px 60px rgba(168,85,247,0.25)",
                          transition: {
                            duration: 0.6,
                          },
                        }}
                        whileTap={{
                          scale: 0.9,
                        }}
                        className="relative w-14 h-14 rounded-2xl overflow-hidden
        border border-white/10 backdrop-blur-xl
        flex items-center justify-center
        text-slate-400 hover:text-blue-400"
                      >

                        {/* Animated Background */}
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Floating Pulse Ring */}
                        <motion.div
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          className="absolute inset-0  rounded-2xl border border-blue-400/30"
                        />

                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            rotateY: 360,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="relative z-10"
                        >
                          <social.icon size={20} />
                        </motion.div>

                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.form
            initial={{
              opacity: 0,
              rotateY: 40,
              x: 120,
              scale: 0.8,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              rotateY: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              rotateY: -8,
              rotateX: 5,
              y: -10,
              scale: 1.02,
              transition: { duration: 0.5 },
            }}
            className="relative group preserve-3d glass p-10 rounded-3xl space-y-6 overflow-hidden border border-white/10"
            onSubmit={sendEmail}
          >

            {/* Liquid Glow */}
            <motion.div
              animate={{
                borderRadius: [
                  "40% 60% 70% 30% / 40% 40% 60% 50%",
                  "70% 30% 50% 50% / 30% 30% 70% 70%",
                  "40% 60% 70% 30% / 40% 40% 60% 50%",
                ],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

              <motion.div
                whileFocus={{ scale: 1.03 }}
                className="space-y-2"
              >
                <label className="text-xs font-mono uppercase tracking-widest text-black">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
        focus:outline-none focus:border-brand-primary focus:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        transition-all duration-500 text-slate-900 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.03 }}
                className="space-y-2"
              >
                <label className="text-xs font-mono uppercase tracking-widest text-black">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
        focus:outline-none focus:border-brand-primary focus:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        transition-all duration-500 text-slate-900 placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="space-y-2 relative z-10"
            >
              <label className="text-xs font-mono uppercase tracking-widest text-black">
                Message
              </label>

              <textarea
                rows={4}
                name="message"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
      focus:outline-none focus:border-brand-primary focus:shadow-[0_0_30px_rgba(59,130,246,0.25)]
      transition-all duration-500 text-slate-900 placeholder:text-slate-400 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.03,
                letterSpacing: "0.15em",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative overflow-hidden w-full bg-gradient-main text-white py-4 rounded-xl
    font-bold uppercase tracking-wider flex items-center justify-center gap-2
    group glow-primary"
            >

              {/* Sweep Shine */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-24 bg-white/30 blur-xl rotate-12"
              />

              <span className="relative z-10">Send Message</span>

              <Send
                size={18}
                className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}