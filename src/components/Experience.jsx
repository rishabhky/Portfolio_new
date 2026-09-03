import { experience, education } from '../content.js'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

function Role({ role }) {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className="text-[15px] font-semibold">{role.title}</h4>
        {role.period && (
          <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
        )}
      </div>
      <ul className="mt-2 space-y-2">
        {role.bullets.map((bullet) => (
          <li
            key={bullet.slice(0, 24)}
            className="relative pl-4 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TimelineEntry({ entry, isLast }) {
  return (
    <div className="relative pl-8">
      {/* timeline rail + marker */}
      {!isLast && (
        <div
          className="absolute left-[5px] top-3 h-full w-px bg-border"
          aria-hidden="true"
        />
      )}
      <div
        className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-accent bg-background"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-display text-lg font-bold tracking-tight">
          {entry.company}
        </h3>
        <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
      </div>
      {entry.blurb && (
        <p className="mt-1 text-[15px] text-muted-foreground">{entry.blurb}</p>
      )}
      {entry.roles.map((role) => (
        <Role key={role.title} role={role} />
      ))}
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        {entry.tags.join(' · ')}
      </p>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <div className="space-y-12">
        {experience.map((entry, i) => (
          <Reveal key={entry.company}>
            <TimelineEntry entry={entry} isLast={i === experience.length - 1} />
          </Reveal>
        ))}
      </div>
      <div className="mt-14 rounded border border-border p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-[15px] font-semibold">{education.school}</h3>
          <span className="font-mono text-xs text-muted-foreground">
            {education.period}
          </span>
        </div>
        <p className="mt-1 text-[15px] text-muted-foreground">
          {education.degree} · {education.detail}
        </p>
      </div>
    </Section>
  )
}
