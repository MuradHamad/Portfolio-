import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (Advanced)', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Runtime & Frameworks',
    items: ['Node.js', 'Express.js', 'Next.js', 'React', 'Bootstrap', 'EJS'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'Relational Databases'],
  },
  {
    title: 'Tools & Concepts',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'REST APIs',
      'HTTP/HTTPS',
      'MVC Architecture',
      'Google Cloud Console',
      'Google OAuth',
    ],
  },
  {
    title: 'Currently Learning',
    items: ['React (deepening)', 'Full-stack architecture', 'AI-integrated development'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <motion.h2
        className="font-mono text-sm uppercase tracking-[0.22em] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35 }}
      >
        Skills
      </motion.h2>

      <div className="mt-6 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-text/95">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-surface bg-surface px-3 py-1 font-mono text-xs text-text transition-colors hover:border-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
