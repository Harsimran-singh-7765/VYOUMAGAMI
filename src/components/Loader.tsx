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
          className="w-full max-w-lg h-auto mix-blend-screen blur-[0.4px] contrast-125 brightness-110 object-contain relative z-10"
        />
        
        {/* Jumping Dots Animation */}
        <div className="flex space-x-2 mt-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-martian rounded-full shadow-[0_0_8px_rgba(226,88,34,0.6)]"
              animate={{
                y: ["0%", "-100%", "0%"],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
