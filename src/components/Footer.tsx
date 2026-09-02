import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-slate-800/80 bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <!-- Left: Brand -->
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
              <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center font-extrabold text-cyan-400 text-xs">
                NR
              </div>
            </div>
            <div>
              <span className="font-extrabold text-white text-sm font-['Outfit']">
                NITHIN <span className="text-cyan-400">RAJ</span>
              </span>
              <p className="text-[11px] text-slate-500 font-mono">
                Computer Science Student & Developer
              </p>
            </div>
          </div>

          <!-- Center: Copyright & Attribution -->
          <div className="text-xs text-slate-400 font-mono text-center">
            © {new Date().getFullYear()} Nithin Raj. Built with code, data and creativity.
          </div>

          <!-- Right: Scroll To Top Button -->
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>
      </div>
    </footer>
  );
};
