import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-800 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="text-gradient-static">NG</span>
            <span className="text-ink-300">.dev</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-ink-400 hover:text-accent-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-accent-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-accent-400 transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-ink-600 flex items-center justify-center group-hover:border-accent-400 group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-800/50 text-center">
          <p className="text-xs text-ink-500 font-mono">
            © {year} Nikhil Goswami — Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
