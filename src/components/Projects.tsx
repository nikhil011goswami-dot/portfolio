import { Reveal } from '@/components/Reveal';
import { projects, icons, type Project } from '@/data/portfolio';
import { Github, ArrowUpRight, CheckCircle2, Circle } from 'lucide-react';

const accentMap = {
  emerald: {
    text: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/30',
    glow: 'hover:shadow-accent-500/20',
    dot: 'bg-accent-400',
    gradient: 'from-accent-500/20 to-transparent',
  },
  ocean: {
    text: 'text-ocean-400',
    bg: 'bg-ocean-500/10',
    border: 'border-ocean-500/30',
    glow: 'hover:shadow-ocean-500/20',
    dot: 'bg-ocean-400',
    gradient: 'from-ocean-500/20 to-transparent',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'hover:shadow-amber-500/20',
    dot: 'bg-amber-400',
    gradient: 'from-amber-500/20 to-transparent',
  },
};

const statusBadge = {
  'in-progress': { label: 'In Progress', class: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  planning: { label: 'Planning', class: 'bg-ocean-500/15 text-ocean-400 border-ocean-500/30' },
  completed: { label: 'Completed', class: 'bg-accent-500/15 text-accent-400 border-accent-500/30' },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent];
  const Icon = icons[project.icon as keyof typeof icons];
  const status = statusBadge[project.status];

  return (
    <Reveal direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
      <article
        className={`group relative glass rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-accent-400/20 ${accent.glow} hover:shadow-2xl overflow-hidden h-full`}
        data-cursor-hover
      >
        {/* Hover gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div
              className={`w-14 h-14 rounded-2xl ${accent.bg} ${accent.border} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className={`w-7 h-7 ${accent.text}`} />
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${status.class}`}
            >
              {project.statusLabel}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold tracking-tight mb-1 group-hover:text-accent-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className={`text-sm font-mono ${accent.text} mb-4`}>{project.subtitle}</p>

          {/* Description */}
          <p className="text-ink-300 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Features */}
          <div className="space-y-2.5 mb-6">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm">
                {feature.done ? (
                  <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-4 h-4 text-ink-500 flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.done ? 'text-ink-200' : 'text-ink-400'}>
                  {feature.text}
                  {!feature.done && <span className="text-ink-500 italic"> — in development</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-ink-800/80 text-ink-300 border border-ink-600/50 group-hover:border-ink-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-4 pt-4 border-t border-ink-700">
              {project.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-accent-400 transition-colors group/link"
                >
                  {link.type === 'github' ? (
                    <Github className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-400 text-sm">02.</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-ink-600 to-transparent" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <p className="text-ink-400 text-base mb-12 max-w-2xl">
            A selection of projects I'm actively building or architecting — each one a step toward
            becoming a well-rounded full stack developer.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
