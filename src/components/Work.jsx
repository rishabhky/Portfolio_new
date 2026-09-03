import { projects } from '../content.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { ArrowUpRightIcon } from './icons.jsx'

function Project({ project, index }) {
  return (
    <article className="group">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-bold tracking-tight">
          <span className="mr-3 font-mono text-xs font-normal text-muted-foreground transition-colors group-hover:text-accent">
            {index}
          </span>
          {project.title}
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          {project.company} · {project.year}
        </span>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      {project.stats.length > 0 && (
        <dl className="mt-5 flex flex-wrap gap-y-3">
          {project.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i > 0 ? 'ml-6 border-l border-border pl-6' : ''}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-base font-medium text-accent">
                {stat.value}
              </dd>
              <dd className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-xs text-muted-foreground">
          {project.tags.join(' · ')}
        </p>
        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRightIcon className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <Section id="work" number="01" title="Selected work">
      <div className="space-y-16">
        {projects.map((project, i) => (
          <Reveal key={project.title}>
            <Project project={project} index={String(i + 1).padStart(2, '0')} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
