import { Reveal } from '@/components/Reveal';
import { skillCategories, icons } from '@/data/portfolio';
import { Sparkles, Compass } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-400 text-sm">03.</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Skills & Tools</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-ink-600 to-transparent" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <p className="text-ink-400 text-base mb-12 max-w-2xl">
            Technologies I work with hands-on today, alongside those I'm actively exploring and learning.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = icons[category.icon as keyof typeof icons];
            const isExploring = category.status === 'exploring';

            return (
              <Reveal key={category.title} direction="up" delay={i * 100}>
                <div
                  className="group glass rounded-2xl p-6 h-full transition-all duration-500 hover:border-accent-400/20 hover:shadow-xl hover:shadow-accent-500/5"
                  data-cursor-hover
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isExploring
                          ? 'bg-ocean-500/10 border border-ocean-500/30'
                          : 'bg-accent-500/10 border border-accent-500/30'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isExploring ? 'text-ocean-400' : 'text-accent-400'}`}
                      />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                        isExploring
                          ? 'bg-ocean-500/10 text-ocean-400'
                          : 'bg-accent-500/10 text-accent-400'
                      }`}
                    >
                      {isExploring ? (
                        <>
                          <Compass className="w-3 h-3" /> Exploring
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3" /> Hands-on
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-4 text-ink-100">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all duration-300 group-hover:border-ink-500 ${
                          isExploring
                            ? 'bg-ocean-500/5 text-ocean-300 border-ocean-500/20'
                            : 'bg-ink-800/50 text-ink-200 border-ink-600/50'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
