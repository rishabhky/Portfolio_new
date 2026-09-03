export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="pt-24">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{number}</span>
        <h2 className="font-display text-2xl font-semibold italic tracking-tight">
          {title}
        </h2>
        <div className="ml-2 h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      {children}
    </section>
  )
}
