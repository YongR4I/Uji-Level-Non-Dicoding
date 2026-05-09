import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const driveFolderUrl =
    'https://drive.google.com/drive/u/0/folders/11bRkdEujTTxhzVEkdKkqI3h8AYCqwuhg';

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: '-80px' },
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  });

  const stats = [
    { value: '3+', label: 'Proyek Aktif' },
    { value: '100%', label: 'Dedikasi' },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: 'Kolaborasi Tim',
      desc: 'Project dikerjakan oleh tim beranggotakan 4–5 siswa dalam membangun website fungsional.',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: 'Kualitas & Integritas',
      desc: 'Setiap proyek melewati proses review ketat untuk memastikan standar tinggi dan keaslian karya.',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      label: 'Solusi Real-World',
      desc: 'Proyek dikembangkan untuk menjawab kebutuhan nyata melalui implementasi web secara langsung.',
    },
  ];

  return (
    <section
      id="aboutus"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #f8f9fb 0%, #f0edff 50%, #eef3ff 100%)',
      }}
    >
      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full -z-10"
        style={{
          background:
            'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full -z-10"
        style={{
          background:
            'radial-gradient(circle, #93c5fd 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="mb-16 flex flex-col items-start"
        >
          <h2 className="text-5xl md:text-6xl font-telegraf font-bold text-slate-900 tracking-[-0.01em] max-w-2xl">
            Solusi cerdas masa kini
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Hero Card */}
          <motion.div
            {...fadeUp(0.05)}
            whileHover={{ y: -4 }}
            className="md:col-span-7 relative rounded-[2rem] overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)',
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.04), 0 20px 60px -12px rgba(124,58,237,0.12)',
            }}
          >
            {/* Mesh Background */}
            <div
              className="absolute inset-0 opacity-[0.03] -z-0"
              style={{
                backgroundImage:
                  'radial-gradient(#7c3aed 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-sans text-slate-900 mb-4 leading-tight">
                  Pameran Uji Level
                </h3>

                <p className="mt-10 text-slate-500 font-sans leading-relaxed text-base max-w-lg text-justify">
                  Uji Level kelas XI merupakan evaluasi praktik pembuatan website nyata secara berkelompok untuk melatih kemampuan pemrograman, kolaborasi, dan pengembangan solusi digital, yang kemudian dipamerkan sebagai karya siswa.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6 items-end justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar Group */}
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          y: -8,
                          zIndex: 10,
                          scale: 1.1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 20,
                        }}
                        className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-100 overflow-hidden shadow cursor-pointer"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                            i + 40
                          }`}
                          alt={`member ${i}`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <motion.span
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="block text-2xl font-black text-slate-900 leading-none"
                    >
                      +10
                    </motion.span>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
                      Client Terbantu
                    </span>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="flex gap-2 flex-wrap">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm"
                    >
                      <span className="text-lg text-purple-700">
                        {s.value}
                      </span>

                      <span className="text-[9px] uppercase tracking-widest text-slate-400 whitespace-nowrap">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Drive Card */}
          <motion.div
            {...fadeUp(0.1)}
            whileHover={{ y: -4 }}
            className="md:col-span-5 rounded-[2rem] overflow-hidden flex flex-col"
            style={{
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.04), 0 20px 60px -12px rgba(59,130,246,0.12)',
            }}
          >
            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden"
              style={{ minHeight: '260px' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618044619888-009e412ff12a?w=800&q=80')",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(15,23,42,0.62) 0%, rgba(29,78,216,0.55) 100%)',
                }}
              />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 40%, rgba(96,165,250,0.18) 0%, transparent 70%)',
                }}
              />

              {/* Google Drive Icon */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <svg
                    viewBox="0 0 87.3 78"
                    className="w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 51H0c0 1.55.4 3.1 1.2 4.5z"
                      fill="#0066da"
                    />
                    <path
                      d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 51h27.5z"
                      fill="#00ac47"
                    />
                    <path
                      d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.65z"
                      fill="#ea4335"
                    />
                    <path
                      d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z"
                      fill="#00832d"
                    />
                    <path
                      d="M59.8 51H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                      fill="#2684fc"
                    />
                    <path
                      d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 51h27.45c0-1.55-.4-3.1-1.2-4.5z"
                      fill="#ffba00"
                    />
                  </svg>
                </div>
              </motion.div>
            </a>

            {/* Footer */}
            <div
              className="px-7 py-5 border-t"
              style={{
                borderColor: 'rgba(147,197,253,0.25)',
                background:
                  'linear-gradient(145deg, #ffffff 0%, #eff6ff 100%)',
              }}
            >
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Klik ikon untuk melihat folder Google Drive berisi dokumentasi kegiatan siswa.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(0.15 + i * 0.08)}
              whileHover={{ y: -5 }}
              className="md:col-span-4 rounded-[2rem] p-7 flex flex-col gap-4 relative overflow-hidden"
              style={{
                background:
                  i === 1
                    ? 'linear-gradient(145deg, #7c3aed 0%, #4f46e5 100%)'
                    : 'linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)',
                boxShadow:
                  i === 1
                    ? '0 20px 60px -12px rgba(124,58,237,0.35)'
                    : '0 1px 3px rgba(0,0,0,0.04), 0 12px 40px -8px rgba(0,0,0,0.06)',
              }}
            >
              {i === 1 && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              )}

              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 5,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
                className="relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm"
                style={{
                  background:
                    i === 1
                      ? 'rgba(255,255,255,0.2)'
                      : i === 0
                      ? '#fef9c3'
                      : '#e0f2fe',
                  color:
                    i === 1
                      ? '#fff'
                      : i === 0
                      ? '#a16207'
                      : '#0369a1',
                }}
              >
                {f.icon}
              </motion.div>

              <div className="relative z-10">
                <h4
                  className="text-base font-sans mb-1.5 tracking-[0.02em]"
                  style={{
                    color: i === 1 ? '#fff' : '#000000',
                  }}
                >
                  {f.label}
                </h4>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color:
                      i === 1
                        ? 'rgba(255,255,255,0.75)'
                        : '#64748b',
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}