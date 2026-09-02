import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Code, Database, Palette, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <!-- Ambient Background Elements -->
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-violet-600/15 to-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Introduction & Details -->
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            <!-- Status Badge -->
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-glow-cyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Internships & Projects</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" /> Chennai, India
              </span>
            </div>

            <!-- Main Heading -->
            <div className="space-y-2">
              <div className="text-sm font-mono text-cyan-400 tracking-wider uppercase font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Computer Science Student</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none font-['Outfit']">
                NITHIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400">RAJ</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight flex items-center gap-2 pt-1">
                Developer <span className="text-cyan-500">•</span> Data Explorer <span className="text-violet-500">•</span> Creative
              </p>
            </div>

            <!-- Short Tagline & Summary -->
            <p className="text-slate-300 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
              "Building with code, data and creativity."
            </p>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Sophomore pursuing B.E. Computer Science and Engineering at Loyola-ICAM College of Engineering & Technology (LICET). Crafting clean software solutions and exploring data insights.
            </p>

            <!-- Action Buttons -->
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="glow-button-primary px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 group w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Nithin_Raj_Resume.pdf"
                download="Nithin_Raj_Resume.pdf"
                className="glow-button-secondary px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-center gap-2 border border-slate-700/80 hover:border-cyan-500/50 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="glow-button-secondary px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 flex items-center justify-center gap-2 border border-slate-700/80 hover:border-violet-500/50 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            <!-- Mini Tech Pill Grid -->
            <div className="pt-6 border-t border-slate-800/80 w-full flex items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Code className="w-4 h-4 text-cyan-400" /> Python / C / Java
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Database className="w-4 h-4 text-violet-400" /> Data Analytics
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Palette className="w-4 h-4 text-emerald-400" /> Visual Design
              </div>
            </div>

          </div>

          <!-- Right Column: Floating 3D Levitating Profile Card -->
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md">
              
              <!-- Ambient Glow Frame Behind Card -->
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 group-hover:duration-200 animate-pulse-glow" />
              
              <!-- Levitating Glass Card -->
              <div className="relative levitate-frame glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center">
                
                {/* Profile Image Holder with Cyber Overlay */}
                <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-glow-cyan bg-slate-900">
                  <img
                    src="/nithin-raj-photo.jpg"
                    alt="Nithin Raj Profile Photo"
                    onError={(e: any) => { e.target.onerror = null; e.target.src = '/nithin-raj-photo.png'; }}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <!-- Cyber Scanline Effect Overlay -->
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B0F19]/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />
                      <div>
                        <h3 className="text-sm font-bold text-white font-['Outfit'] tracking-wide">Nithin Raj</h3>
                        <p className="text-[11px] text-cyan-400 font-mono">B.E. CSE Sophomore (LICET)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      2nd Year
                    </span>
                  </div>
                </div>

                <!-- Levitating Badges -->
                <div className="w-full grid grid-cols-2 gap-3 mt-4">
                  <div className="glass-panel px-3 py-2 rounded-xl text-center border border-cyan-500/20">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Specialization</span>
                    <span className="text-xs font-semibold text-cyan-300">Software & Data</span>
                  </div>
                  <div className="glass-panel px-3 py-2 rounded-xl text-center border border-violet-500/20">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Creative Edge</span>
                    <span className="text-xs font-semibold text-violet-300">Visuals & Media</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
