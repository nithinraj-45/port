import React from 'react';
import { FolderGit2, ExternalLink, Code2, Users, Bug, Layers, Sparkles, Edit3, BarChart2, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Software Build Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sourced strictly from Nithin Raj's verified resume.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: ClassConnect */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between glass-panel-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  LICET | 2024
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Java Desktop App
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                ClassConnect
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                A specialized Java application designed to seamlessly connect students and teachers through an intuitive graphical user interface.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 my-6">
                {['Java', 'OOP', 'Swing', 'GUI Architecture'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Learning Outcome Pills */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Core Skills Developed & Applied:
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <Code2 className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <span className="text-xs font-semibold text-white block">Coding</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <Bug className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                    <span className="text-xs font-semibold text-white block">Debugging</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <Users className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                    <span className="text-xs font-semibold text-white block">Teamwork</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Link */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Role: Student Developer</span>
              <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                Verified Project <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Project 2: Social Media Analytics & Insights (Editable Resume Showcase) */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between glass-panel-hover group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-bl-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-400 border border-violet-500/30">
                  Data & Marketing Initiative
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <BarChart2 className="w-3.5 h-3.5 text-violet-400" /> Analytics Track
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] group-hover:text-violet-300 transition-colors">
                Social Media Analytics & Insights
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Leveraging data analysis techniques to measure social media engagement, audience reach, and promotion performance metrics.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 my-6">
                {['Data Analysis', 'Social Media Analytics', 'Audience Insights', 'Marketing Strategy'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Editable Placeholder Banner for User Customization */}
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-dashed border-violet-500/40 text-slate-300 text-xs space-y-2">
                <div className="flex items-center gap-2 text-violet-300 font-bold font-mono">
                  <Edit3 className="w-4 h-4" />
                  <span>Customizable Project Slot</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Strictly matching resume data. Additional project repository links, metrics, or detailed case studies can be inserted here as Nithin expands this initiative.
                </p>
              </div>
            </div>

            {/* Footer Link */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Focus: Data Explorer & Strategist</span>
              <span className="text-violet-400 flex items-center gap-1 font-semibold">
                Resume Sourced <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
