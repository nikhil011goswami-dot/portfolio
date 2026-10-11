import { Reveal } from '@/components/Reveal';
import { achievements, icons } from '@/data/portfolio';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-400 text-sm">04.</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Achievements</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-ink-600 to-transparent" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <p className="text-ink-400 text-base mb-12 max-w-2xl">
            Milestones that shaped my journey — from selection-based bootcamps to hackathon wins and
            organizing college events.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} direction="up" delay={i * 150}>
                <div
                  className="group relative glass rounded-3xl p-7 h-full transition-all duration-500 hover:border-accent-400/20 hover:shadow-xl hover:shadow-accent-500/10 overflow-hidden"
                  data-cursor-hover
                >
                  {/* Number watermark */}
                  <span className="absolute top-4 right-5 font-display text-6xl font-bold text-ink-800/40 group-hover:text-accent-500/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-ocean-500/20 border border-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-accent-400" />
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight mb-3 group-hover:text-accent-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-ink-300 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-400 to-ocean-400 group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
