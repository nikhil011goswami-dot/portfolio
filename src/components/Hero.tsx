import { useEffect, useState } from 'react';
import { Github, Linkedin, ArrowRight, Download, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const roles = ['Full Stack Developer', 'BCA Student', 'Problem Solver', 'Builder'];

export function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 100;
    const pause = deleting ? 1200 : 2000;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden grid-bg noise-overlay"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-ocean-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left: Text content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-ink-300">Available for internships & collaborations</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">Nikhil Goswami</span>
          </h1>

          <div
            className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-lg sm:text-xl text-ink-300 font-mono">{'> '}</span>
            <span className="text-lg sm:text-xl font-mono text-accent-400 min-h-[1.75rem]">
              {text}
              <span className="inline-block w-0.5 h-5 bg-accent-400 ml-0.5 animate-blink" />
            </span>
          </div>

          <p
            className="text-base sm:text-lg text-ink-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {personalInfo.tagline} {personalInfo.intro}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-500 to-ocean-500 text-ink-950 font-semibold hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-600 text-ink-100 font-semibold hover:border-accent-400 hover:text-accent-400 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>

          <div
            className="flex items-center gap-5 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-accent-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="w-px h-5 bg-ink-600" />
            <div className="flex items-center gap-1.5 text-sm text-ink-400">
              <MapPin className="w-4 h-4" />
              <span>Karnataka, India</span>
            </div>
          </div>
        </div>

        {/* Right: Portrait */}
        <div
          className="order-1 lg:order-2 flex justify-center animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative group" data-cursor-hover>
            {/* Glowing border ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-500 via-ocean-500 to-accent-500 opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />

            {/* Rotating dashed ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-ink-600 animate-spin-slow opacity-50" />

            {/* Portrait container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-ink-600 group-hover:border-accent-400/50 transition-colors duration-500">
              <img
                src="/images/WhatsApp_Image_2026-10-11_at_18.38.36.jpeg"
                alt="Nikhil Goswami"
                className="w-full h-full object-cover object-[50%_68%]"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"%3E%3Crect width="320" height="320" fill="%23111118"/%3E%3Ctext x="50%25" y="50%25" fill="%2334d399" font-family="monospace" font-size="24" text-anchor="middle" dy=".35em"%3ENG%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 sm:top-2 sm:-right-6 glass px-3 py-1.5 rounded-full text-xs font-mono text-accent-400 animate-float">
              &lt;/&gt;
            </div>
            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-6 glass px-3 py-1.5 rounded-full text-xs font-mono text-ocean-400 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              BCA '27
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-ink-500 font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-400/50 to-transparent" />
      </div>
    </section>
  );
}
