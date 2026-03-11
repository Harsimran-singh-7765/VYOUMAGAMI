"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-cosmic-midnight flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center justify-center">
        <video 
          src="/rover-loader.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-64 h-auto mix-blend-screen drop-shadow-[0_0_15px_rgba(226,88,34,0.3)] blur-[0.5px] contrast-125 brightness-110 mb-[-2rem] object-contain relative z-10"
        />
        <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative rounded-full z-0">
          <motion.div
            className="h-full bg-martian absolute left-0 top-0"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
      <motion.p
        className="text-martian font-mono text-xs mt-4 uppercase tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Initializing Sequence... {progress}%
      </motion.p>
    </motion.div>
  );
}
