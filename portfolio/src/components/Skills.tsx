import { useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript (Advanced)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: 'Runtime & Frameworks',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'EJS', icon: null },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Relational Databases', icon: null },
    ],
  },
  {
    title: 'Tools & Concepts',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'REST APIs', icon: null },
      { name: 'HTTP/HTTPS', icon: null },
      { name: 'MVC Architecture', icon: null },
      { name: 'Google Cloud Console', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Google OAuth', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
    ],
  },
  {
    title: 'Currently Learning',
    items: [
      { name: 'React (deepening)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Full-stack architecture', icon: null },
      { name: 'AI-integrated development', icon: null },
    ],
  },
]

function SkillBadge ({item}:{item:{name:string, icon:string|null}}){
  const [hovered, setHovered] = useState(false);
  return (
      <span
      onMouseEnter= {()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      key={item.name}
      className="rounded-full border border-surface bg-surface px-3 py-1 font-mono text-xs text-text transition-colors hover:border-accent"
      >
      {item.icon && (
        <motion.img
          src={item.icon}
          alt={`${item.name} icon`}
          className="mr-1 inline-block h-4 w-4 align-text-bottom"
          animate={{ y: hovered ? -10 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
      )}
      {item.name}
    </span>
  );
} 

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
                <SkillBadge key={item.name} item={item}/>
              ))}
              
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
