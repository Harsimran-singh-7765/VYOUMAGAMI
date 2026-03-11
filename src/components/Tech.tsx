"use client";

import { motion } from "framer-motion";
import { Cpu, Cog, Wifi, FileCode } from "lucide-react";

export default function Tech() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const modules = [
    {
      id: "SOFTWARE",
      title: "AUTONOMY & AI",
      desc: "Advanced computer vision models and reliable control algorithms for true autonomous hazard avoidance on martian terrain.",
      icon: Cpu,
    },
    {
      id: "MECHANICAL",
      title: "CHASSIS & ARM",
      desc: "Precision CAD modeling, 3D printing and fabrication of the main rover skeleton and the 6-DOF robotic manipulator arm.",
      icon: Cog,
    },
    {
      id: "ELECTRONICS",
      title: "HARDWARE & IOT",
      desc: "Custom PCB design, robust motor drivers, sensor arrays, and reliable communication links supporting accompanying drones.",
      icon: Wifi,
    },
    {
      id: "MANAGEMENT",
      title: "DOCUMENTATION & INTEGRATION",
      desc: "Rigorous testing protocols and thorough documentation encompassing ERC Technical Reports and Mission Research Papers.",
      icon: FileCode,
    }
  ];

  // Icon animation configs keyed by index for strict typing
  const iconAnimations = [
    { animate: { scale: [1, 1.15, 1] as number[], opacity: [0.7, 1, 0.7] as number[] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const } },
    { animate: { rotate: 360 as number }, transition: { duration: 8, repeat: Infinity, ease: "linear" as const } },
    { animate: { opacity: [1, 0.3, 1] as number[] }, transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const } },
    { animate: { y: [0, -3, 0] as number[] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const } },
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="tech">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-martian font-bold tracking-widest uppercase text-xs">04 // Core Systems</span>
            <h3 className="text-4xl font-bold mt-2">Technical Domains</h3>
          </motion.div>
          
          <motion.div 
            className="text-[10px] font-mono text-gray-600 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            01010110 01011001 01001111 01001101 01000001
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {modules.map((mod, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="border border-white/10 p-8 hover:bg-martian/5 transition-all group relative overflow-hidden bg-cosmic-midnight"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-martian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-martian font-bold block group-hover:scale-105 transform origin-left transition-transform">{mod.id}</span>
                {/* Animated Lucide icon */}
                <motion.div
                  className="text-martian/60 group-hover:text-martian transition-colors"
                  animate={iconAnimations[idx].animate}
                  transition={iconAnimations[idx].transition}
                >
                  <mod.icon size={22} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-martian transition-colors">{mod.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-sans mb-6 group-hover:text-gray-400 transition-colors">
                {mod.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
                <motion.div 
                  className="h-full bg-martian/50 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
