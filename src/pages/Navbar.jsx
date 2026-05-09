import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function untuk handle navigasi section + halaman
  const handleNavigation = (sectionId) => {
    setIsOpen(false);

    // Kalau bukan di halaman home, pindah dulu ke home
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Kalau sudah di home, scroll langsung
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Variabel untuk animasi stagger (berurutan) pada menu mobile
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-5 left-0 right-0 z-50 px-6"
    >
      <nav className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-white/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-[30px] px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setIsOpen(false);

            // Kalau sudah di home → scroll ke atas
            if (location.pathname === '/') {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            } else {
              // Kalau beda halaman → balik ke home
              window.location.href = '/';
            }
          }}
        >
          <img
            src="/src/assets/logo-pplg.jpg"
            alt="Logo"
            className="w-9 h-9 rounded-full object-cover"
          />

          <span className="font-sans text-lg text-slate-800 tracking-tight">
            SMKN 1 Ciomas
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-sans text-slate-500">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About us', id: 'aboutus' },
            { name: 'Projects', id: 'projects' },
          ].map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ y: -2, color: '#332f37' }}
              onClick={() => handleNavigation(item.id)}
              className="transition-colors duration-300 outline-none bg-transparent border-none cursor-pointer"
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Button Desktop */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1f1e21' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('contact')}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-sans transition-colors shadow-sm inline-block cursor-pointer"
          >
            Contact Us ↗
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
              className="h-0.5 w-full bg-slate-800 rounded-full origin-center"
            />

            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="h-0.5 w-full bg-slate-800 rounded-full"
            />

            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
              className="h-0.5 w-full bg-slate-800 rounded-full origin-center"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden mt-3 bg-white/80 backdrop-blur-xl rounded-[25px] p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-5 font-sans"
          >
            {[
              { name: 'Home', id: 'home' },
              { name: 'About us', id: 'aboutus' },
              { name: 'Projects', id: 'projects' },
            ].map((item) => (
              <motion.button
                key={item.name}
                variants={itemVariants}
                onClick={() => handleNavigation(item.id)}
                className="text-left text-slate-600 hover:text-[#332f37] transition-colors bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.hr
              variants={itemVariants}
              className="border-slate-100"
            />

            <motion.button
              variants={itemVariants}
              onClick={() => handleNavigation('contact')}
              className="text-left text-[#1f1e21] font-sans bg-transparent border-none cursor-pointer"
            >
              Contact Us ↗
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}