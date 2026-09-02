import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Milestones</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Directly derived from verified resume entries.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Card 1: Aspiring IT Intern */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 glass-panel-hover relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30">
                  Current Status
                </span>
                <h3 className="text-2xl font-bold text-white font-['Outfit'] mt-2 group-hover:text-cyan-300 transition-colors">
                  Aspiring IT Intern
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>2025 – Present</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Motivated to learn, create, and grow through real-world technology, data analytics, and marketing projects. Open for collaborative software development internships.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-mono">
              <Sparkles className="w-4 h-4" /> Ready to contribute in dynamic team environments
            </div>
          </div>

          {/* Card 2: Student Developer - ClassConnect */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 glass-panel-hover relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  LICET | Academic Project Developer
                </span>
                <h3 className="text-2xl font-bold text-white font-['Outfit'] mt-2 group-hover:text-violet-300 transition-colors">
                  Student Developer – ClassConnect
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span>2024</span>
              </div>
            </div>

            <ul className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>Built a Java application designed to connect students and teachers using OOP principles and Swing GUI framework.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>Significantly improved hands-on proficiency in software coding, system debugging, and cross-member teamwork.</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Institution: Loyola-ICAM College of Engineering & Technology</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
