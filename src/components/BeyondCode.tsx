import React, { useState } from 'react';
import { Camera, Film, Image as ImageIcon, FileText, Megaphone, Sparkles, Eye, Layers } from 'lucide-react';

interface CreativeItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  gradient: string;
  accentColor: string;
  details: string[];
}

export const BeyondCode: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('photography');

  const creativeWork: CreativeItem[] = [
    {
      id: 'photography',
      title: 'Photography',
      category: 'Visual Storytelling',
      icon: <Camera className="w-6 h-6 text-cyan-400" />,
      description: 'Capturing moments, light, and natural perspectives with a keen eye for framing and visual depth.',
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      accentColor: 'border-cyan-500/40 text-cyan-300',
      details: ['Natural Lighting & Framing', 'Color Grading & Contrast', 'Landscape & Beach Perspective']
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      category: 'Post-Production',
      icon: <Film className="w-6 h-6 text-purple-400" />,
      description: 'Crafting cinematic pacing, smooth transitions, and engaging short-form or long-form video content.',
      gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
      accentColor: 'border-purple-500/40 text-purple-300',
      details: ['Timeline Pacing & Cuts', 'Audio Sync & Sound FX', 'Dynamic Visual Effects']
    },
    {
      id: 'poster-design',
      title: 'Poster Design',
      category: 'Graphic Design',
      icon: <ImageIcon className="w-6 h-6 text-pink-400" />,
      description: 'Designing eye-catching posters and graphic layouts for events, campaigns, and digital platforms.',
      gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
      accentColor: 'border-pink-500/40 text-pink-300',
      details: ['Typography Hierarchy', 'Brand Color Palettes', 'Event & Digital Assets']
    },
    {
      id: 'script-writing',
      title: 'Script Writing',
      category: 'Creative Concept',
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      description: 'Structuring clear narratives, creative hooks, and video flow scripts that hold audience attention.',
      gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      accentColor: 'border-amber-500/40 text-amber-300',
      details: ['Narrative Framing', 'Audience Engagement Hooks', 'Structured Video Outlines']
    },
    {
      id: 'social-media',
      title: 'Social Media Promotion',
      category: 'Digital Reach',
      icon: <Megaphone className="w-6 h-6 text-emerald-400" />,
      description: 'Strategizing promotional campaigns, content scheduling, and digital outreach to drive engagement.',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      accentColor: 'border-emerald-500/40 text-emerald-300',
      details: ['Campaign Planning', 'Audience Insights Analysis', 'Cross-Platform Promotion']
    }
  ];

  const currentItem = creativeWork.find(item => item.id === activeItem) || creativeWork[0];

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B11] via-slate-950 to-[#080B11]">
      <!-- Creative Background Glow -->
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Pursuit & Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">Code</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Blending computer science discipline with visual storytelling, media creation, and digital strategy.
          </p>
        </div>

        <!-- Creative Showcase Layout -->
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <!-- Left: Selection Pills -->
          <div className="lg:col-span-5 flex flex-col gap-3">
            {creativeWork.map((item) => {
              const isSelected = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? `glass-panel ${item.accentColor} bg-slate-900/90 shadow-lg scale-[1.02]`
                      : 'glass-panel border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${isSelected ? 'shadow-inner' : ''}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-['Outfit']">{item.title}</h4>
                      <span className="text-[11px] font-mono text-slate-400">{item.category}</span>
                    </div>
                  </div>
                  <Eye className={`w-4 h-4 transition-opacity ${isSelected ? 'opacity-100 text-cyan-400' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          <!-- Right: Interactive Display Card -->
          <div className="lg:col-span-7">
            <div className={`h-full glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${currentItem.gradient}`}>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800">
                    {currentItem.icon}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950/80 text-slate-300 border border-slate-800">
                    {currentItem.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                    {currentItem.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {currentItem.description}
                  </p>
                </div>

                <!-- Highlight Key Details -->
                <div className="pt-6 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                    Core Focus & Technique:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentItem.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/80 text-slate-200 border border-slate-800 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <!-- Extra Note Footer -->
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Resume Verified Extra-Curricular</span>
                <span className="text-slate-300">Creative Technologist</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
