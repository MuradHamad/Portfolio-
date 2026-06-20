import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
    name: 'PneuDx - AI Pneumonia Diagnosis System',
    description:
      'My graduation project at the University of Petra. A full-stack clinical decision support web application that detects pneumonia from chest X-rays using a DenseNet121 deep learning model fused with structured clinical patient data. Designed to assist radiologists with AI-powered predictions, visual explainability via Grad-CAM heatmaps, and a RAG-based medical chatbot.',
    details: [
      'Hybrid AI model: DenseNet121 (image) + Clinical MLP (patient data) fusion',
      'Grad-CAM heatmap overlays for explainable predictions',
      'RAG-powered medical chatbot using LLaMA via Groq API and FAISS vector index',
      'Secure patient records with Fernet encryption on sensitive PII fields',
    ],
    stack: ['Python', 'Django', 'PyTorch', 'DenseNet121', 'FAISS', 'Groq', 'Tailwind CSS', 'SQLite'],
    github: 'https://github.com/Sadeenalkhalili/pneumonia-chatbot',
  },
  {
    name: 'Shop - E-Commerce Application',
    description:
      'A full-stack e-commerce application built from scratch during university, without AI assistance and without React. This was a deliberate choice to deeply understand how server-side web applications work. Implements full CRUD operations, MVC architecture, routing and controllers from first principles.',
    details: [
      'Product listing, creation, editing, and deletion',
      'Server-side rendering using EJS templates',
      'RESTful routing with Express.js',
      'NoSQL data persistence with MongoDB',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'MVC'],
    github: 'https://github.com/MuradHamad/shop',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <motion.h2
        className="font-mono text-sm uppercase tracking-[0.22em] text-accent"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35 }}
      >
        Projects
      </motion.h2>

      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-xl border border-surface bg-surface/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_35px_rgba(20,70,160,0.35)]"
          >
            <h3 className="text-3xl text-text">{project.name}</h3>
            <p className="mt-4 text-[1.02rem] text-text/90">{project.description}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-text/85 marker:text-accent">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/70 bg-bg px-3 py-1 font-mono text-xs text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent hover:text-text"
              >
                <Github size={15} />
                GitHub
              </a>

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-hot px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-hot transition-colors hover:bg-hot hover:text-text"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-muted px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Live Demo Unavailable
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
