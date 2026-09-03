import { hero, links } from '../content.js'
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from './icons.jsx'

const socials = [
  { label: 'Résumé', href: links.resume, Icon: FileIcon },
  { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: links.email, Icon: MailIcon },
]

function Statement({ text }) {
  // Set the opening clause in accent italic for an editorial lead
  const idx = text.indexOf(':')
  if (idx === -1) return <>{text}</>
  return (
    <>
      <em className="italic text-accent">{text.slice(0, idx)}</em>
      {text.slice(idx)}
    </>
  )
}

export default function Hero() {
  return (
    <section id="top" className="pt-36">
      <p className="mb-4 font-mono text-sm text-accent">{hero.eyebrow}</p>
      <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
        {hero.name}
      </h1>
      <p className="mt-8 font-display text-2xl font-medium leading-snug sm:text-[1.75rem]">
        <Statement text={hero.statement} />
      </p>
      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        {hero.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
