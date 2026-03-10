import { motion } from 'framer-motion'

const coursework = [
  'Data Structures & Algorithms',
  'Algorithm Analysis & Design',
  'Software Engineering (UML, OOP Design)',
  'Databases (Relational & SQL)',
  'Logic & Digital Circuits',
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <motion.h2
        className="font-mono text-sm uppercase tracking-[0.22em] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35 }}
      >
        Education
      </motion.h2>

      <article className="mt-6 rounded-xl border-l-4 border-accent bg-surface/80 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-start sm:justify-between sm:text-base">
          <p className="text-xl text-text">University of Petra (UOP)</p>
          <p>Oct 2022 - June 2026 (Expected)</p>
        </div>
        <p className="mt-2 text-lg text-text">Bachelor&apos;s in Software Engineering</p>
        <p className="text-muted">Amman, Jordan</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {coursework.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/70 bg-bg px-3 py-1 font-mono text-xs text-gold"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}
