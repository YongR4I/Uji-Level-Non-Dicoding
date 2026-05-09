import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PROJECTS = [
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

// Varian Animasi untuk Container (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Varian Animasi untuk Card (Fade Up)
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #eef3ff 100%, #f0edff 50%, #f8f9fb 0%)",
      }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} // once: false agar berulang saat scroll
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-telegraf font-bold text-slate-900 mt-6 leading-tight">
              Karya Terbaik XI PPLG
            </h2>
            <p className="text-slate-500 mt-4">
              Jelajahi inovasi teknologi dari tim-tim siswa SMKN 1 Ciomas
            </p>
          </div>

          <Link to="/projects">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-3xl text-sm -translate-y-2 hover:scale-105 transition-all">
              Lihat Semua →
            </button>
          </Link>
        </motion.div>

        {/* Grid dengan looping stagger effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}