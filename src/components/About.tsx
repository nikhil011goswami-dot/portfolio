import { Reveal } from '@/components/Reveal';
import { aboutDetails, stats, personalInfo, icons } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-400 text-sm">01.</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-ink-600 to-transparent" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          <Reveal direction="left" className="lg:col-span-3">
            <div className="space-y-5 text-ink-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm <span className="text-accent-400 font-medium">Nikhil Goswami</span>, an aspiring{' '}
                <span className="text-ink-100 font-medium">Full Stack Developer</span> currently pursuing a{' '}
                <span className="text-ink-100 font-medium">Bachelor of Computer Applications (BCA)</span> at{' '}
                {personalInfo.college}, with an expected graduation in{' '}
                <span className="text-ink-100 font-medium">2027</span>.
              </p>
              <p>
                My journey into software development started with curiosity — pulling apart how things work
                and rebuilding them better. I believe the best way to learn is by building real, practical
                projects that solve actual problems, not just tutorial exercises.
              </p>
              <p>
                From a <span className="text-ink-100">camera-based smart parking system</span> to a{' '}
                <span className="text-ink-100">multilingual news platform architecture</span>, I'm
                constantly exploring both the frontend and backend of modern applications. My hands-on work
                includes Python, Flask, Streamlit, REST APIs, MySQL, JSON, Git, and dashboard tooling, while
                I continue exploring NestJS, TypeScript, cloud services, and computer vision.
              </p>
              <p>
                I'm currently open to <span className="text-accent-400">internships</span>,{' '}
                <span className="text-accent-400">junior developer roles</span>, and{' '}
                <span className="text-accent-400">collaborations</span> where I can contribute, learn, and
                grow alongside experienced teams.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {aboutDetails.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];
                return (
                  <div
                    key={item.label}
                    className="glass rounded-2xl p-5 hover:border-accent-400/30 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-accent-400 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm text-ink-100 font-medium">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal direction="up" delay={200}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-static mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-ink-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
