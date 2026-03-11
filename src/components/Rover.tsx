"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Rover() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative py-40 border-y border-white/5 overflow-hidden" id="rover" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-martian font-bold tracking-widest uppercase text-xs">03 // Specifications</span>
          <h3 className="text-4xl font-bold mt-2">Vyomi</h3>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-4xl py-20 grayscale-0 md:grayscale hover:grayscale-0 transition-all duration-700 group">
            <motion.div style={{ y: imgY }}>
              <img 
                alt="Rover Blueprint" 
                className="w-full h-auto opacity-70 md:opacity-30 mix-blend-screen transition-opacity duration-700 md:blur-[1px] md:group-hover:blur-none md:group-hover:opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCniMWLNx5JdWmBcdoExdmW45aFmtbVmRff_fgrYVJvn9HtpmBGIGL_JsbXiKuM_E1EOpS8fAeL-M9HAV1glfc8MQdgh_9RVaz1mD7Ogaztr_l9zDh9AD32nUhIyq_DUNoRuvDRz2-bCEblyK7bWsHJwD_ElaP-63tdHrqzMJB3dG5Vb6x08okhifCD8YMkCoTdYzOdXozGySNmCVyGlVb2gJhLRd35B96hirPrXAP1Y_WUXSYDPlTb79gXawHNGWn3wUqR-3rLjcA"
              />
            </motion.div>
            
            <motion.div 
              className="absolute top-[10%] left-0 w-48 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-right pr-4 group-hover:translate-x-[-10px] transition-transform duration-500">
                <h6 className="text-martian font-bold text-[10px] uppercase">Cam_Suite_V2</h6>
                <p className="text-[9px] text-gray-300">360° Stereoscopic visual array with LIDAR integration.</p>
              </div>
              <div className="label-line label-line-left w-24 ml-auto mt-2"></div>
            </motion.div>
            
            <motion.div 
              className="absolute top-[40%] right-0 w-48 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-left pl-4 group-hover:translate-x-[10px] transition-transform duration-500">
                <h6 className="text-martian font-bold text-[10px] uppercase">Rocker-Bogie_X</h6>
                <p className="text-[9px] text-gray-300">Advanced suspension system for 30° incline stability.</p>
              </div>
              <div className="label-line label-line-right w-24 mr-auto mt-2"></div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[10%] left-0 w-48 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-right pr-4 group-hover:translate-x-[-10px] transition-transform duration-500">
                <h6 className="text-martian font-bold text-[10px] uppercase">Arm_Module</h6>
                <p className="text-[9px] text-gray-300">6-DOF manipulator for high-precision sample collection.</p>
              </div>
              <div className="label-line label-line-left w-24 ml-auto mt-2"></div>
            </motion.div>
          </div>

          {/* Mobile-only spec labels below the rover image */}
          <div className="md:hidden w-full grid grid-cols-1 gap-4 mt-4">
            {[
              { title: "Cam_Suite_V2", desc: "360° Stereoscopic visual array with LIDAR integration." },
              { title: "Rocker-Bogie_X", desc: "Advanced suspension system for 30° incline stability." },
              { title: "Arm_Module", desc: "6-DOF manipulator for high-precision sample collection." },
            ].map((spec, i) => (
              <motion.div
                key={i}
                className="border border-white/10 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <h6 className="text-martian font-bold text-[10px] uppercase mb-1">{spec.title}</h6>
                <p className="text-[9px] text-gray-300 leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/10 pt-8 relative">
            <motion.div 
              className="absolute top-0 left-0 h-[1px] bg-martian origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {[
              { label: "Mass_Base", value: "48.5 kg" },
              { label: "Peak_Load", value: "120 Watts" },
              { label: "Comms_Link", value: "2.4 GHz RF" },
              { label: "Max_Speed", value: "0.8 m/s" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + (idx * 0.1), duration: 0.5 }}
                className="group"
              >
                <span className="text-[10px] uppercase tracking-widest text-gray-400 block">{stat.label}</span>
                <span className="text-lg font-bold group-hover:scale-110 inline-block transition-transform transform origin-left">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background blueprint elements */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 border-t border-white/[0.02] -z-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02]"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02]"></div>
      </div>
    </section>
  );
}
