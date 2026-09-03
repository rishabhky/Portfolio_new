import { contact, links } from '../content.js'
import Section from './Section.jsx'
import { ArrowUpRightIcon } from './icons.jsx'

const socials = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Résumé', href: links.resume },
]

export default function Contact() {
  return (
    <Section id="contact" number="03" title="Contact">
      <p className="font-display text-3xl font-medium italic tracking-tight sm:text-4xl">
        {contact.heading}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {contact.line}
      </p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded border border-border px-4 py-2 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
      >
        {contact.email}
      </a>
      <div className="mt-8 flex gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            {social.label}
            <ArrowUpRightIcon />
          </a>
        ))}
      </div>
      <footer className="mt-24 border-t border-border py-8">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Rishabh Kumar Yadav · Set in Fraunces & Satoshi · Built with React
        </p>
      </footer>
    </Section>
  )
}
