"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Rover from "@/components/Rover";
import Tech from "@/components/Tech";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.main 
        className="w-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        {!loading && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Team />
            <Rover />
            <Tech />
            <Sponsors />
            <Footer />
            
            {/* Global floating subtle elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
               <motion.div 
                 className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-martian/5 rounded-full blur-[120px]"
                 animate={{ 
                   x: [0, 50, 0], 
                   y: [0, 30, 0],
                   scale: [1, 1.2, 1] 
                 }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               />
               <motion.div 
                 className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cosmic-blue/5 rounded-full blur-[100px]"
                 animate={{ 
                   x: [0, -40, 0], 
                   y: [0, -50, 0],
                   scale: [1, 1.3, 1] 
                 }}
                 transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
               />
            </div>
          </>
        )}
      </motion.main>
    </>
  );
}
