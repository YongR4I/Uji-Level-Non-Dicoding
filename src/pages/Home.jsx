import React, { useState, useEffect } from 'react';

const TYPING_WORDS = ["Inovatif", "Kreatif", "Digital"];

const STATS_DATA = [
  { id: 1, value: "6", label: "Total Kelompok" },
  { id: 2, value: "6", label: "Project Website" },
  { id: 3, value: "15", label: "Siswa Terlibat" },
  { id: 4, value: "2026", label: "Tahun Kegiatan" },
];

const TECH_ICONS = [
  { id: 1, name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", pos: "top-[22%] left-[8%] md:top-[21%] md:left-[7%]", delay: "0s" },
  { id: 2, name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", pos: "top-[22%] right-[8%] md:top-[20%] md:right-[10%]", delay: "1s" },
  { id: 3, name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", pos: "bottom-[10%] left-[5%] md:bottom-[9%] md:left-[8%]", delay: "2s" },
  { id: 4, name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", pos: "bottom-[10%] right-[5%] md:bottom-[10%] md:right-[8%]", delay: "1.5s" },
  { id: 5, name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", pos: "top-[44%] left-[4%] md:top-[50%] md:left-[10%]", delay: "0.5s" },
  { id: 6, name: "NextJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", pos: "top-[44%] right-[4%] md:top-[50%] md:right-[10%]", delay: "2.5s" },
];

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % TYPING_WORDS.length;
    const fullText = TYPING_WORDS[i];

    const handleTyping = () => {
      setCurrentWord(
        isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#F8F9FB] flex flex-col items-center justify-start pt-48 md:pt-48 pb-20 px-4 md:px-8 font-sans">
      
      {/* Background & Icons Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-200/40 rounded-full blur-[100px] md:blur-[130px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-200/40 rounded-full blur-[100px] md:blur-[130px] animate-blob animation-delay-2000"></div>

        {/* Tech Icons - REVISI: Added 'hidden md:block' to hide on mobile and show on desktop */}
        <div className="hidden md:block">
          {TECH_ICONS.map((icon) => (
            <div 
              key={icon.id} 
              className={`absolute ${icon.pos} animate-float opacity-15 hover:opacity-100 transition-all duration-700`}
              style={{ animationDelay: icon.delay }}
            >
              <img 
                src={icon.src} 
                alt={icon.name} 
                className="w-6 h-6 md:w-9 md:h-9 filter grayscale brightness-110 drop-shadow-sm hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl w-full mx-auto flex flex-col items-center"> 
        <h1 className="font-sans text-[2.6rem] sm:text-6xl md:text-[6.5rem] leading-[1.1] md:leading-[1.0] text-slate-900 animate-fade-up flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-2 md:gap-x-4 tracking-normal w-full">
            <span>Karya</span> 
            <span className="text-purple-600 inline-flex justify-center md:justify-start items-center min-w-[120px] sm:min-w-[150px] md:min-w-[320px] font-telegraf">
              {currentWord}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-5 mt-1 md:mt-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-sans">Siswa</span>    
            <div className="h-[34px] w-[65px] md:h-[70px] md:w-[130px] bg-yellow-400 rounded-full flex items-center justify-center transform -rotate-3 shadow-sm border border-yellow-300/50 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>    
            <span className="font-telegraf">PPLG</span>
          </div>
        </h1>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-full max-w-4xl animate-fade-up animation-delay-1000 px-4 md:px-2 font-sans">
          {STATS_DATA.map((stat) => (
            <div 
              key={stat.id} 
              className="group relative flex flex-col items-center justify-center py-5 md:py-8 px-4 rounded-[24px] md:rounded-[32px] bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-[9px] md:text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] text-center">
                {stat.label}
              </p>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-[24px] md:rounded-t-[32px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        .animate-blob { animation: blob 12s infinite alternate ease-in-out; }
        .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 0.5s; }
      `}} />
    </section>
  );
}