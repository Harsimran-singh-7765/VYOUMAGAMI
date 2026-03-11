"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background with Rover Image and Blur - Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cosmic-midnight"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-center bg-cover bg-no-repeat" 
             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCniMWLNx5JdWmBcdoExdmW45aFmtbVmRff_fgrYVJvn9HtpmBGIGL_JsbXiKuM_E1EOpS8fAeL-M9HAV1glfc8MQdgh_9RVaz1mD7Ogaztr_l9zDh9AD32nUhIyq_DUNoRuvDRz2-bCEblyK7bWsHJwD_ElaP-63tdHrqzMJB3dG5Vb6x08okhifCD8YMkCoTdYzOdXozGySNmCVyGlVb2gJhLRd35B96hirPrXAP1Y_WUXSYDPlTb79gXawHNGWn3wUqR-3rLjcA")' }} />
        <div className="absolute inset-0 blueprint-bg opacity-30"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-cosmic-midnight"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-midnight via-transparent to-cosmic-midnight"></div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        style={{ y: textY, opacity }}
      >
        <div className="space-y-6">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-martian uppercase"
          >
            ERC CHALLENGE 2026
          </motion.h2>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring", stiffness: 50 }}
          >
            PRECISION<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-martian to-[#ff8c69]">UNFOLDING</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xs md:text-sm text-gray-300 font-light tracking-wide mt-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Merging the ancient art of origami with advanced aerospace engineering to redefine planetary mobility. Meet the next generation of Martian explorers.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-martian text-white px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-martian-dark transition-all shadow-[0_0_20px_rgba(226,88,34,0.4)] hover:shadow-[0_0_30px_rgba(226,88,34,0.6)]" 
              href="#rover"
            >
              Explore Prototype
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:border-white transition-all backdrop-blur-sm relative overflow-hidden group" 
              href="#video"
            >
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">Watch Reveal</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Astronaut Lottie */}
      <motion.div 
        className="absolute right-[2%] top-1/3 hidden lg:block mix-blend-screen"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]) }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Player
          autoplay
          loop
          src="/astronaut.json"
          style={{ height: '380px', width: '380px' }}
        />
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        style={{ opacity }}
      >
        <span className="text-[8px] tracking-[0.3em] uppercase text-gray-500">Scroll to Explore</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-martian to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], height: [24, 48, 24] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
