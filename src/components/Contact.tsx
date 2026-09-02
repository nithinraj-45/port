import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, Download, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const email = "nithinraj.28csb@licet.ac.in";
  const phone = "7358024553";
  const location = "Chennai, India";

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      <!-- Background Glow Elements -->
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section CTA Title -->
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase shadow-glow-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Outfit']">
            "Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400">meaningful."</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you are looking for an enthusiastic CS intern, project collaborator, or creative media developer, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          <!-- Contact Direct Details Card -->
          <div className="lg:col-span-5 space-y-4">
            
            <!-- Email Box -->
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between glass-panel-hover group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${email}`} className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <!-- Phone Box -->
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between glass-panel-hover group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone Number</span>
                  <a href={`tel:${phone}`} className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                    +91 {phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-violet-500/50"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <!-- Location Box -->
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between glass-panel-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {location}
                  </span>
                </div>
              </div>
            </div>

            <!-- Quick Action Resume Button -->
            <a
              href="/Nithin_Raj_Resume.pdf"
              download="Nithin_Raj_Resume.pdf"
              className="glow-button-secondary w-full p-4 rounded-2xl text-sm font-semibold text-slate-200 flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-500/50"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Official Resume PDF</span>
            </a>

          </div>

          <!-- Interactive Quick Message Form -->
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">Message Sent!</h3>
                <p className="text-slate-300 text-sm">
                  Thank you for reaching out. Nithin will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">Send a Quick Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Collaborator"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Message Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Internship / Internship Inquiry / Project Request"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Nithin, I'd like to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button-primary w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
