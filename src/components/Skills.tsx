import React, { useState } from 'react';
import { Code, Database, Video, Users, CheckCircle2, Sparkles, Terminal, BarChart2, Camera, FileText, Share2, Brain, Compass, RefreshCw } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'Programming' | 'Data' | 'Creative' | 'Professional';
  icon: React.ReactNode;
  tagline: string;
  level: string;
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const skills: SkillItem[] = [
    // Programming
    { name: 'Python', category: 'Programming', icon: <Terminal className="w-5 h-5 text-cyan-400" />, tagline: 'Core Scripting & Data Logic', level: 'Intermediate' },
    { name: 'C Language', category: 'Programming', icon: <Code className="w-5 h-5 text-sky-400" />, tagline: 'Data Structures & Fundamentals', level: 'Foundational' },
    { name: 'Java', category: 'Programming', icon: <Code className="w-5 h-5 text-amber-400" />, tagline: 'OOP & Swing GUI Applications', level: 'Intermediate' },

    // Data
    { name: 'Data Analysis', category: 'Data', icon: <Database className="w-5 h-5 text-violet-400" />, tagline: 'Analytical Exploration & Patterns', level: 'Applied' },
    { name: 'Social Media Analytics & Insights', category: 'Data', icon: <BarChart2 className="w-5 h-5 text-purple-400" />, tagline: 'Audience Metrics & Growth Trends', level: 'Applied' },

    // Creative
    { name: 'Video Editing', category: 'Creative', icon: <Video className="w-5 h-5 text-pink-400" />, tagline: 'Cinematic Cuts & Motion Visuals', level: 'Practiced' },
    { name: 'Poster Design', category: 'Creative', icon: <Sparkles className="w-5 h-5 text-rose-400" />, tagline: 'Visual Brand Identity & Layouts', level: 'Practiced' },
    { name: 'Photography', category: 'Creative', icon: <Camera className="w-5 h-5 text-teal-400" />, tagline: 'Framing, Color & Visual Storytelling', level: 'Practiced' },
    { name: 'Script Writing', category: 'Creative', icon: <FileText className="w-5 h-5 text-yellow-400" />, tagline: 'Narrative Conception & Messaging', level: 'Practiced' },
    { name: 'Social Media Promotion', category: 'Creative', icon: <Share2 className="w-5 h-5 text-emerald-400" />, tagline: 'Digital Strategy & Campaign Reach', level: 'Practiced' },

    // Professional
    { name: 'Team Collaboration', category: 'Professional', icon: <Users className="w-5 h-5 text-indigo-400" />, tagline: 'Cross-functional Synergy & Communication', level: 'Core Competency' },
    { name: 'Project Management', category: 'Professional', icon: <Compass className="w-5 h-5 text-cyan-400" />, tagline: 'Planning, Execution & Milestones', level: 'Core Competency' },
    { name: 'Problem Solving', category: 'Professional', icon: <Brain className="w-5 h-5 text-sky-400" />, tagline: 'Logical Decomposition & Debugging', level: 'Core Competency' },
    { name: 'Analytical Thinking', category: 'Professional', icon: <BarChart2 className="w-5 h-5 text-violet-400" />, tagline: 'Data-driven Decision Making', level: 'Core Competency' },
    { name: 'Adaptability', category: 'Professional', icon: <RefreshCw className="w-5 h-5 text-emerald-400" />, tagline: 'Fast Learning in Dynamic Contexts', level: 'Core Competency' },
  ];

  const categories = ['All', 'Programming', 'Data', 'Creative', 'Professional'];

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sourced directly from resume technical skills, data capabilities, and creative competencies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                  {skill.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {skill.tagline}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">Competency</span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
