import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { About } from '../components/About'
import { Education } from '../components/Education'
import { Footer } from '../components/Footer'
import { Projects } from '../components/Projects'
import { Sidebar } from '../components/Sidebar'
import { Skills } from '../components/Skills'

const sectionIds = ['about', 'education', 'projects', 'skills'] as const

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>('about')
  const sections = useMemo(() => [...sectionIds], [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id as (typeof sectionIds)[number])
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-20% 0px -40% 0px',
      },
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="lg:flex">
      <div className="border-b border-surface lg:fixed lg:inset-y-0 lg:w-2/5 lg:border-b-0 lg:border-r">
        <Sidebar activeSection={activeSection} />
      </div>

      <motion.main
        className="px-6 py-10 sm:px-10 lg:ml-[40%] lg:w-3/5 lg:px-16 lg:py-16"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.4 }}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-20">
          <About />
          <Education />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </motion.main>
    </div>
  )
}
