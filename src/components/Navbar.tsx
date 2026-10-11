import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useActiveSection, useScrollProgress } from '@/hooks/useScrollReveal';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2 font-display font-bold text-lg tracking-tight group"
          >
            <span className="text-gradient-static">NG</span>
            <span className="text-ink-100 hidden sm:inline group-hover:text-accent-400 transition-colors">
              .dev
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-accent-400' : 'text-ink-300 hover:text-ink-100'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-400 to-ocean-400 transition-all duration-300 ${
                        isActive ? 'w-6' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-300 hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent-500 to-ocean-500 text-ink-950 hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-ink-100 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-400 via-ocean-400 to-accent-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-ink-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-2 animate-fade-in">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="text-2xl font-display font-medium text-ink-200 hover:text-accent-400 transition-colors py-3"
              style={{ animation: `fadeUp 0.5s ease ${i * 0.08}s both` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-6 text-ink-300 hover:text-accent-400 transition-colors"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>
      )}
    </>
  );
}
