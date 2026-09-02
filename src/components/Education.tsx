import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic achievements strictly sourced from Nithin Raj's resume.
          </p>
        </div>

        {/* Education Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Institution 1: LICET */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 glass-panel-hover relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                    Loyola-ICAM College of Engineering and Technology (LICET)
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                    Bachelor of Engineering (B.E.) in Computer Science and Engineering
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                  2nd Year (Sophomore)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" /> Chennai, India
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              Currently pursuing 2nd year of undergraduate studies focused on software development, data analytics, algorithms, data structures, and emerging technologies.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
              {['Data Structures', 'OOP in Java', 'Algorithms', 'Software Engineering', 'Data Analytics'].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Institution 2: Madras Christian College School */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 glass-panel-hover relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] group-hover:text-violet-300 transition-colors">
                    Madras Christian College School, Chennai
                  </h3>
                  <p className="text-violet-400 font-semibold text-sm sm:text-base">
                    Higher Secondary Education (HSC)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Completed
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-violet-400" /> Chennai, India
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              Completed coursework in Computer Science, Mathematics, and Physics with strong academic performance, laying a robust foundation for engineering studies.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
              {['Computer Science', 'Mathematics', 'Physics'].map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
