"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-32 border-t border-white/5" id="mission">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20">
        <motion.div 
          className="md:w-1/4 relative"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="pt-2">
            <span className="text-martian font-bold tracking-widest uppercase text-xs">01 // Origin</span>
            <h3 className="text-3xl font-bold mt-2">The Mission</h3>
          </div>
        </motion.div>
        
        <div className="md:w-3/4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.p 
              className="text-gray-400 leading-relaxed border-l border-martian/30 pl-8 hover:border-martian transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vyoumagami is a collective of visionary engineers and designers dedicated to the European Rover Challenge. Our philosophy centers on "Origami Engineering"—the art of creating complex, high-strength structures from minimal, lightweight materials. We don't just build rovers; we fold the future of exploration.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  className="text-2xl font-bold text-martian inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  50+
                </motion.span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 group-hover:text-gray-300 transition-colors">Engineers</p>
              </motion.div>
              
              <motion.div 
                className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span 
                  className="text-2xl font-bold text-martian inline-block"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  8+
                </motion.span>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 group-hover:text-gray-300 transition-colors">Disciplines</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
