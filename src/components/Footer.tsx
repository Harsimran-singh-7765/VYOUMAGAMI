"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-martian/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-martian/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-6 border border-martian flex items-center justify-center transform rotate-45">
                <div className="w-3 h-3 bg-martian animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold tracking-widest">VYOUMAGAMI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed uppercase tracking-tighter">
              Developing the technological framework for humanity's multi-planetary expansion. Based in Research Hub Delta.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h5 className="text-[10px] font-bold text-martian uppercase tracking-widest mb-6 relative inline-block">
              Registry
              <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-martian/50" />
            </h5>
            <ul className="space-y-4 text-xs text-gray-400 uppercase tracking-widest">
              {["Mission Log", "Project Files", "Join Personnel", "Press Protocol"].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-martian hover:tracking-[0.2em] transition-all duration-300 block" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h5 className="text-[10px] font-bold text-martian uppercase tracking-widest mb-6 relative inline-block">
              Channels
              <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-martian/50" />
            </h5>
            <div className="flex gap-4">
              {["alternate_email", "hub", "share"].map((icon, i) => (
                <a key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-martian hover:bg-martian/10 hover:-translate-y-1 transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-gray-600 font-mono">STARDATE: {new Date().getFullYear()}.{Math.floor(Math.random() * 900) + 100}</p>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Vyoumagami Engineering. Compiled for the ERC Challenge.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">System Uplink Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
