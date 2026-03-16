import { motion } from 'framer-motion'
import { useState } from 'react'

export function About() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="scroll-mt-20">
      <motion.h2
        className="font-mono text-sm uppercase tracking-[0.22em] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35 }}
      >
        About
      </motion.h2>

      <div className="mt-6 grid gap-8 lg:grid-cols-[180px,1fr] lg:items-start">
        <div className="mx-auto w-fit lg:mx-0">
          {imageError ? (
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-accent bg-surface font-display text-4xl text-accent shadow-[0_0_30px_rgba(20,70,160,0.4)]">
              MH
            </div>
          ) : (
            <img
              src="/murad.jpg"
              alt="Murad Hamad"
              onError={() => setImageError(true)}
              className="h-40 w-40 rounded-full border-4 border-accent object-cover shadow-[0_0_30px_rgba(20,70,160,0.4)]"
            />
          )}
        </div>

        <div className="space-y-5 text-[1.04rem] text-text/95">
          <p>
            I'm a Jordanian Software Engineering student, born and raised 
            in Amman, with roots in Jerusalem, Palestine. I got into 
            programming because I saw it as a world with infinite things 
            to learn and I'm someone who genuinely loves learning. What 
            keeps me going is building things and understanding the 
            architecture beneath them, not just that something works, 
            but why it works.

            seriously.
          </p>
          <p>
            I love full-stack development and working at the intersection 
            of good engineering and practical AI tools. Outside of building, 
            I create content in Arabic on Instagram, sharing what I learn 
            about programming and AI for developers who are on the same 
            journey. I'm still early in my career, but I take the craft 
          </p>
        </div>
      </div>
    </section>
  )
}
