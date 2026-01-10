
import React, { useState, useEffect } from 'react';

// Components
const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 md:px-12 fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl brand-font shadow-lg rotate-3 transition-transform group-hover:rotate-0">
        F
      </div>
      <span className="text-2xl font-bold text-indigo-900 brand-font tracking-tight group-hover:text-indigo-600 transition-colors">FrEnGo</span>
    </div>
    <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
      <span className="cursor-default text-slate-300">Уроки</span>
      <span className="cursor-default text-slate-300">Игры</span>
    </div>
  </nav>
);

const FloatingIcon = ({ icon, className }: { icon: string; className: string }) => (
  <div className={`absolute text-4xl animate-float opacity-20 pointer-events-none ${className}`}>
    {icon}
  </div>
);

const LessonButton = ({ date }: { date: string }) => (
  <button className="group relative mt-12 bg-white border-4 border-indigo-500 rounded-3xl p-1 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_0_0_#6366f1] hover:shadow-[0_6px_0_0_#6366f1] hover:translate-y-[4px]">
    <div className="bg-indigo-50 rounded-2xl px-8 py-6 flex items-center gap-6">
      <div className="bg-indigo-500 text-white p-4 rounded-2xl shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="text-left">
        <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Повторим то, что было</div>
        <div className="text-indigo-900 text-2xl font-bold soft-font">{date}</div>
      </div>
      <div className="ml-4 bg-indigo-100 text-indigo-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </button>
);

const Hero = () => {
  const today = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="blob -top-20 -left-20 bg-blue-100" />
      <div className="blob -bottom-20 -right-20 bg-purple-100" />
      
      <FloatingIcon icon="🚀" className="top-1/4 left-10 delay-0" />
      <FloatingIcon icon="📚" className="top-1/3 right-12 delay-75" />
      <FloatingIcon icon="🎨" className="bottom-1/4 left-12 delay-150" />
      <FloatingIcon icon="⭐" className="bottom-1/3 right-10 delay-300" />
      <FloatingIcon icon="🍎" className="top-20 right-1/4 delay-500" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm tracking-wide uppercase border border-indigo-100">
          Выходи за рамки учебников 🚀
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight soft-font tracking-tight heading-shadow">
          Привет! Ну что, как <span className="text-indigo-600">успехи?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Добро пожаловать в <strong>FrEnGo</strong> — твой личный тренажер английского. 
          Закрепляй знания, полученные на уроке, в игровой форме!
        </p>

        <LessonButton date={today} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-16">
          <div className="p-8 bg-white/60 backdrop-blur rounded-[2rem] border border-white shadow-sm transition-all group text-center md:text-left">
            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto md:mx-0 transition-transform group-hover:scale-110">🎯</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Закрепляй знания</h3>
            <p className="text-slate-500 leading-snug text-sm">Мини-задания по следам каждого оффлайн урока.</p>
          </div>
          <div className="p-8 bg-white/60 backdrop-blur rounded-[2rem] border border-white shadow-sm transition-all group text-center md:text-left">
            <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto md:mx-0 transition-transform group-hover:scale-110">🎮</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Играй и учись</h3>
            <p className="text-slate-500 leading-snug text-sm">Никакой скуки! Только интерактив и веселье в твоем браузере.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 px-6 border-t border-slate-100 text-center">
    <p className="text-slate-400 font-medium">
      &copy; {new Date().getFullYear()} FrEnGo Project. Сделано с ❤️ для будущих полиглотов.
    </p>
  </footer>
);

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-600 bg-[#fdfdff]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
