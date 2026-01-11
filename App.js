
import React, { useState, useEffect } from 'react';

// --- Components ---
const Navbar = ({ onViewChange, currentView }) => (
  <nav className="flex items-center justify-between px-6 py-4 md:px-12 fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-50">
    <div 
      className="flex items-center gap-2 group cursor-pointer" 
      onClick={() => onViewChange('home')}
    >
      <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl brand-font shadow-lg rotate-3 transition-transform group-hover:rotate-0">
        F
      </div>
      <span className="text-2xl font-bold text-indigo-900 brand-font tracking-tight group-hover:text-indigo-600 transition-colors">FrEnGo</span>
    </div>
    <div className="flex items-center gap-4 md:gap-8 font-semibold text-slate-600">
      <button 
        onClick={() => onViewChange('lessons')}
        className={`px-4 py-2 rounded-full transition-all ${currentView === 'lessons' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-50'}`}
      >
        Уроки
      </button>
    </div>
  </nav>
);

const FloatingIcon = ({ icon, className }) => (
  <div className={`absolute text-4xl animate-float opacity-20 pointer-events-none ${className}`}>
    {icon}
  </div>
);

const LessonCard = ({ title, icon, color, delay }) => (
  <div 
    className={`p-6 rounded-[2.5rem] bg-white border-2 border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group relative overflow-hidden`}
    style={{ transitionDelay: delay }}
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
    <p className="text-slate-500 text-sm italic">Нажми, чтобы начать!</p>
  </div>
);

const LessonsList = () => {
  const lessons = [
    { title: "Greetings & Names", icon: "👋", color: "bg-blue-100 text-blue-500", delay: "0ms" },
    { title: "Funny Animals", icon: "🦁", color: "bg-orange-100 text-orange-500", delay: "50ms" },
    { title: "Colorful World", icon: "🎨", color: "bg-purple-100 text-purple-500", delay: "100ms" },
    { title: "My Family", icon: "🏠", color: "bg-green-100 text-green-500", delay: "150ms" },
    { title: "Numbers 1-10", icon: "🔢", color: "bg-yellow-100 text-yellow-600", delay: "200ms" },
    { title: "Body Parts", icon: "💪", color: "bg-rose-100 text-rose-500", delay: "250ms" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 brand-font mb-4">Выбирай урок!</h2>
        <p className="text-slate-500">Все уроки, которые мы прошли в классе, теперь здесь.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson, idx) => (
          <LessonCard key={idx} {...lesson} />
        ))}
      </div>
    </div>
  );
};

const Hero = ({ onStart }) => {
  const today = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="blob -top-20 -left-20 bg-blue-50 opacity-60" />
      <div className="blob -bottom-20 -right-20 bg-purple-50 opacity-60" />
      
      <FloatingIcon icon="🚀" className="top-1/4 left-10 delay-0" />
      <FloatingIcon icon="📚" className="top-1/3 right-12 delay-75" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight soft-font heading-shadow">
          Привет! Ну что, как <span className="text-indigo-600">успехи?</span>
        </h1>
        
        <button 
          onClick={onStart}
          className="group relative mt-12 bg-white border-4 border-indigo-500 rounded-3xl p-1 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_0_0_#6366f1] hover:shadow-[0_6px_0_0_#6366f1] hover:translate-y-[4px]"
        >
          <div className="bg-indigo-50 rounded-2xl px-8 py-6 flex items-center gap-6">
            <div className="text-left">
              <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Повторим то, что было</div>
              <div className="text-indigo-900 text-2xl font-bold soft-font">{today}</div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-600 bg-[#fdfdff]">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow pt-20">
        {currentView === 'home' ? (
          <Hero onStart={() => setCurrentView('lessons')} />
        ) : (
          <LessonsList />
        )}
      </main>
      <footer className="py-10 px-6 border-t border-slate-100 text-center bg-white">
        <p className="text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} FrEnGo Project.
        </p>
      </footer>
    </div>
  );
}
