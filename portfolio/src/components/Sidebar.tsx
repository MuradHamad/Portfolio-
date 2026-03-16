import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

type SidebarProps = {
  activeSection: string
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const itemAnimation = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay },
  }),
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="flex h-full flex-col justify-between px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
      <div>
        <motion.h1
          className="text-5xl leading-none text-text"
          initial="hidden"
          animate="visible"
          custom={0.08}
          variants={itemAnimation}
        >
          Murad Hamad
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-text"
          initial="hidden"
          animate="visible"
          custom={0.16}
          variants={itemAnimation}
        >
          Junior Developer
        </motion.p>

        <motion.div
          className="mt-7 max-w-xs text-[1.05rem] text-muted"
          initial="hidden"
          animate="visible"
          custom={0.24}
          variants={itemAnimation}
        >
          <p>Building things that work.</p>
          <p>Understanding why they work.</p>
        </motion.div>

        <motion.nav
          className="mt-10"
          aria-label="Section navigation"
          initial="hidden"
          animate="visible"
          custom={0.32}
          variants={itemAnimation}
        >
          <ul className="space-y-3 font-mono text-sm uppercase tracking-[0.2em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group inline-flex items-center gap-2 transition-colors ${
                      isActive ? 'text-hot' : 'text-muted hover:text-accent'
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? 'w-8 bg-hot'
                          : 'w-4 bg-muted group-hover:w-8 group-hover:bg-accent'
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>
      </div>

      <motion.div
        className="mt-10 flex items-center gap-5"
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={itemAnimation}
      >
        <a
          href="https://github.com/MuradHamad"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-accent"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/murad-hamad-a39289399/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-accent"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/muradbuilds/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-muted transition-colors hover:text-accent"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://x.com/Muradbuilds"
          target="_blank"
          rel="noreferrer"
          aria-label="X (Twitter)"
          className="text-muted transition-colors hover:text-accent"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="mailto:"
          aria-label="Email"
          className="text-muted transition-colors hover:text-accent"
        >
          <Mail size={20} />
        </a>
      </motion.div>
    </aside>
  )
}
