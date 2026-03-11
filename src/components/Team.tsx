"use client";

import { motion } from "framer-motion";

export default function Team() {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  const hierarchy = [
    {
      domain: "SOFTWARE & AUTONOMY",
      teams: [
        { name: "AI / Computer Vision", sub: [] },
        { name: "Control & Navigation", sub: [] }
      ]
    },
    {
      domain: "HARDWARE - MECHANICAL",
      teams: [
        { name: "CAD Design & Simulation", sub: [] },
        { name: "Printing & Fabrication", sub: [] },
        { name: "Implementation & Assembly", sub: [] },
        { name: "Robotic Arm", sub: [] }
      ]
    },
    {
      domain: "HARDWARE - ELECTRONICS",
      teams: [
        { name: "PCB Design & Hardware", sub: [] },
        { name: "IoT & Communication", sub: [] },
        { name: "Sensors & Motor Drivers", sub: [] },
        { name: "Drone Team", sub: [] }
      ]
    },
    {
      domain: "SYSTEMS & MANAGEMENT",
      teams: [
        { name: "System Integration", sub: ["Testing & Validation"] },
        { name: "Management & R&D", sub: ["ERC Technical Reports", "Mission Documentation", "Research Papers"] }
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-cosmic-midnight" id="technical">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-martian font-bold tracking-widest uppercase text-xs">02 // Hierarchy</span>
          <h3 className="text-4xl font-bold mt-2">Project Architecture</h3>
        </motion.div>
        
        <div className="max-w-6xl mx-auto relative pb-20">
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <div className="w-48 p-4 border-2 border-martian text-center bg-cosmic-midnight relative z-10 hover:shadow-[0_0_20px_rgba(226,88,34,0.4)] transition-shadow duration-300">
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 block mb-1">ERC_2026_JIIT</span>
              <h4 className="font-bold text-sm">TEAM LEAD</h4>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {hierarchy.map((domain, idx) => (
              <motion.div key={idx} variants={item} className="space-y-6 relative group">
                <div className="p-4 border border-white/20 text-center bg-white/5 hover:border-martian hover:bg-martian/5 transition-all duration-300 cursor-default">
                  <h5 className="text-xs font-bold text-martian">{domain.domain}</h5>
                </div>
                
                <div className="space-y-4 pl-4 border-l border-white/10 group-hover:border-martian/50 transition-colors duration-500 relative">
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-[1px] bg-martian origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (idx * 0.2), duration: 1 }}
                  />
                  {domain.teams.map((team, tIdx) => (
                    <div key={tIdx} className={`py-2 ${tIdx < domain.teams.length - 1 ? 'border-b border-white/5' : ''}`}>
                      <div className="text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors">
                        {team.name}
                      </div>
                      {team.sub.length > 0 && (
                        <div className="mt-2 pl-3 border-l border-white/10 space-y-1">
                          {team.sub.map((sub, sIdx) => (
                            <div key={sIdx} className="text-[9px] text-gray-500">{sub}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
