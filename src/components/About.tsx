import React from 'react';
import { UserCheck, Award, GraduationCap, Cpu, LineChart, Wrench, Sparkles, Anchor } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Software Development",
      description: "Building reliable applications using modern programming principles, OOP patterns, and robust code structures."
    },
    {
      icon: <LineChart className="w-5 h-5 text-violet-400" />,
      title: "Data Analytics",
      description: "Extracting actionable insights from data structures and social media metrics to solve real-world problems."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      title: "Emerging Technologies",
      description: "Quickly learning and applying next-gen tech tools, frameworks, and digital paradigms to practical challenges."
    },
    {
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      title: "Practical Problem Solving",
      description: "Applying analytical thinking, teamwork, and adaptable mindsets in dynamic tech environments."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <!-- Grid pattern background -->
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Driven by curiosity, powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">code & data</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sourced strictly from academic background and active technical pursuits.
          </p>
        </div>

        <!-- Main Content Layout -->
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <!-- Personal Summary Card -->
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative group hover:border-cyan-500/30 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-['Outfit']">Computer Science Sophomore</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a results-driven Computer Science sophomore at <strong className="text-white font-semibold">Loyola-ICAM College of Engineering and Technology (LICET)</strong> in Chennai, India.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                With a solid foundation in programming, data structures, and algorithmic thinking, I thrive on translating theoretical concepts into practical software applications and data-driven solutions.
              </p>
            </div>

            <!-- Verified Resume Highlight Badge -->
            <div className="pt-4 border-t border-slate-800">
              <div className="glass-panel p-4 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-cyan-950/40 to-slate-900/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">Verified Credential</span>
                  <span className="text-xs text-sky-300 font-medium">NCC Navy 'A' Certificate Holder</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Interest Highlights Grid -->
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white font-['Outfit']">{item.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
