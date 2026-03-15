"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-cosmic-midnight/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-4 cursor-pointer group">
        <div className="relative w-10 h-10 overflow-hidden">
          <Image 
            src="/logo.PNG" 
            alt="Vyomagami Logo" 
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-widest leading-none group-hover:text-martian transition-colors">VYOUMAGAMI</span>
        </div>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
        {["Mission", "Technical", "Sponsors"].map((item) => (
          <a key={item} className="relative group overflow-hidden" href={`#${item.toLowerCase()}`}>
            <span className="relative z-10 group-hover:text-martian transition-colors">{item}</span>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-[1px] bg-martian origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] group" 
          href="#contact"
        >
          <span className="relative z-10">Join The Mission</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
