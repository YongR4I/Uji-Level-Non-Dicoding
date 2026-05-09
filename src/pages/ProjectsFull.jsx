import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Project
const ALL_DATA = [
{
    id: 1,
    title: "Sistem Kasir Digital",
    group: "Kelompok 1",
    class: "XI PPLG 1",
    desc: "Aplikasi kasir web untuk toko retail dengan fitur produk, transaksi, dan laporan keuangan.",
    tags: ["Laravel", "React", "Tailwind CSS"],
    color: "from-blue-600/20 to-cyan-600/10",
    accent: "#3B82F6",
  },
  {
    id: 2,
    title: "Sistem Absensi Sekolah",
    group: "Kelompok 2",
    class: "XI PPLG 2",
    desc: "Aplikasi absensi siswa berbasis QR code dengan laporan dan notifikasi orang tua.",
    tags: ["Laravel", "React", "Tailwind CSS"],
    color: "from-indigo-600/20 to-blue-600/10",
    accent: "#6366F1",
  },
  {
    id: 3,
    title: "Monitoring Pertanian",
    group: "Kelompok 3",
    class: "XI PPLG 3",
    desc: "Sistem monitoring kondisi tanaman dengan sensor IoT dan dashboard analitik.",
    tags: ["Laravel", "React", "Tailwind CSS"],
    color: "from-green-600/20 to-teal-600/10",
    accent: "#10B981",
  }
];

const CLASS_OPTIONS = ["Semua Kelas", "XI PPLG 1", "XI PPLG 2", "XI PPLG 3"];

// Varian Animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-sm transition-all duration-500 flex flex-col"
    >
      <div
        className={`h-48 bg-gradient-to-br ${project.color} relative p-8 flex items-center justify-center`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div
          className="relative z-10 w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-sm"
        >
          <svg
            className="w-8 h-8"
            style={{ color: project.accent }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <span className="absolute top-6 right-6 text-[10px] font-sans tracking-widest text-slate-600 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 uppercase">
          {project.class}
        </span>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium font-sans text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-sans text-slate-900 mb-2 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {project.desc}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-slate-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-slate-400">
              {project.group}
            </span>
          </div>

          <button className="text-blue-600 font-sans text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
            Detail →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsFull() {
  const [query, setQuery] = useState("");
  const [activeClass, setActiveClass] = useState("Semua Kelas");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    return ALL_DATA.filter((p) => {
      const matchClass = activeClass === "Semua Kelas" || p.class === activeClass;
      const matchQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.group.toLowerCase().includes(query.toLowerCase());
      return matchClass && matchQuery;
    });
  }, [query, activeClass]);

  return (
    <div className="bg-[#f8f9fb] min-h-screen text-slate-900 font-sans pb-20">
      
      {/* Header Area */}
      <div className="bg-blue-600 text-white pt-36 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-blue-200 text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Pameran Karya Siswa
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-telegraf mb-4">
            Semua Project Uji Level
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-blue-100 text-sm md:text-base max-w-2xl leading-relaxed opacity-90 font-sans font-medium">
            Jelajahi seluruh inovasi dan hasil karya tim siswa kelas XI PPLG dalam kegiatan Uji Level Tahun Ajaran 2025/2026.
          </motion.p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 relative">
        <div className="relative -mt-10 mb-16 z-30">
          <div className="bg-white p-3 md:p-4 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col md:flex-row gap-3">
           <div className="relative flex-1 flex items-center rounded-2xl px-4">
              <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Cari nama project atau kelompok..." 
                className="w-full bg-transparent py-3.5 pl-3 text-sm placeholder-slate-400 outline-none ring-0 border-none text-slate-700 font-sans font-medium focus:outline-none focus:ring-0 focus:border-none focus:shadow-none hover:outline-none hover:ring-0 transition-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Custom Dropdown Kelas */}
            <div className="relative md:w-60" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full h-full flex items-center justify-between rounded-2xl px-5 py-3.5 font-sans text-sm ${
                isDropdownOpen 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "bg-slate-50 border-slate-100 text-slate-600"
                }`}
              >
                <span className="font-sans">{activeClass}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute right-0 top-[calc(100%+12px)] w-full min-w-[240px] bg-white border border-slate-100 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2.5 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 mb-1 text-[10px] font-sans text-slate-400 uppercase tracking-widest">Pilih Kategori Kelas</div>
                    {CLASS_OPTIONS.map((cls) => (
                      <button
                        key={cls}
                        onClick={() => {
                          setActiveClass(cls);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-200 flex items-center justify-between group ${
                          activeClass === cls 
                            ? "bg-blue-600 text-white font-sans" 
                            : "text-slate-600 hover:bg-slate-50 font-sans"
                        }`}
                      >
                        {cls}
                        {activeClass === cls && (
                          <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-32 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Tidak ada hasil ditemukan</h3>
                  <p className="text-slate-500 mt-2">Coba gunakan kata kunci lain atau pilih kelas yang berbeda.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </main>
    </div>
  );
}