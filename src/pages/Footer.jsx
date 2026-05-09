import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 border-t border-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="flex items-center gap-3"
          >
            <p className="text-[13px] text-slate-800">
              © 2026 SMKN 1 Ciomas
            </p>
            <div className="w-px h-3 bg-slate-300" />
            <span className="text-[13px] font-sans font-medium text-slate-800 tracking-wide">
              Pameran Uji Level 2026
            </span>
          </motion.div>
          
          <motion.p 
            className="text-[13px] text-slate-600"
          >
            Dibuat dengan dedikasi oleh{" "}
            <span className="text-slate-600 font-sans relative inline-block">
              XI PPLG
            </span>
          </motion.p>
        </div>
        </motion.div>
    </footer>
  );
}