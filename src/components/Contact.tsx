import { Reveal } from '@/components/Reveal';
import { personalInfo } from '@/data/portfolio';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="font-mono text-accent-400 text-sm">05.</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Let's Connect</h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <p className="text-ink-300 text-base sm:text-lg text-center max-w-2xl mx-auto mb-4 mt-6">
            I'm actively seeking{' '}
            <span className="text-accent-400 font-medium">internships</span>,{' '}
            <span className="text-accent-400 font-medium">junior developer roles</span>, and{' '}
            <span className="text-accent-400 font-medium">collaboration opportunities</span>. Whether you
            have a project idea, a role to fill, or just want to talk tech — I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <div className="text-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-ocean-500 text-ink-950 font-semibold text-lg hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start a Conversation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Email card */}
          <Reveal direction="up" delay={300}>
            <div className="glass rounded-2xl p-6 group hover:border-accent-400/20 transition-all duration-300 h-full" data-cursor-hover>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <button
                  onClick={copyEmail}
                  className="text-ink-400 hover:text-accent-400 transition-colors p-1"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-ink-100 hover:text-accent-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              {copied && (
                <p className="text-xs text-accent-400 mt-2 animate-fade-in">Copied to clipboard!</p>
              )}
            </div>
          </Reveal>

          {/* GitHub card */}
          <Reveal direction="up" delay={400}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 group hover:border-accent-400/20 transition-all duration-300 h-full block"
              data-cursor-hover
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-ink-700/50 border border-ink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-ink-100" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">GitHub</p>
              <p className="text-sm text-ink-100 group-hover:text-accent-400 transition-colors">
                {personalInfo.githubLabel}
              </p>
            </a>
          </Reveal>

          {/* LinkedIn card */}
          <Reveal direction="up" delay={500}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 group hover:border-accent-400/20 transition-all duration-300 h-full block"
              data-cursor-hover
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-ocean-500/10 border border-ocean-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-ocean-400" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">LinkedIn</p>
              <p className="text-sm text-ink-100 group-hover:text-accent-400 transition-colors">
                {personalInfo.linkedinLabel}
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
