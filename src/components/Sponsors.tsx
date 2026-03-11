"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  const sponsors = [
    "NEBULA_SYS",
    "QUANTUM_LABS",
    "AERO_PULSE",
    "TITAN_FORGE",
    "ORBITAL_X"
  ];

  return (
    <section className="py-20 border-t border-white/5 bg-cosmic-midnight" id="sponsors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 group">
          <motion.span 
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 group-hover:text-martian transition-colors duration-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Strategic_Partners
          </motion.span>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {sponsors.map((sponsor, idx) => (
              <motion.div 
                key={idx}
                className="text-xl font-bold tracking-widest font-mono text-gray-600 hover:text-white transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {sponsor}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
