import { motion } from 'framer-motion';
import { ExternalLink, Code, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime 3D Product Preview',
    desc: 'An interactive 3D viewer with environment lighting, AR mode, and variant switching.',
    tags: ['React', 'Spline', 'Three.js', 'Framer Motion'],
    link: '#',
    featured: true,
  },
  {
    title: 'DevOps Dashboard',
    desc: 'Unified metrics, deployment controls, and incident timelines with live charts.',
    tags: ['FastAPI', 'WebSockets', 'Tailwind', 'ECharts'],
    link: '#',
  },
  {
    title: 'AI Notes Summarizer',
    desc: 'Transcribes and summarizes meetings with topic detection and action items.',
    tags: ['Python', 'OpenAI', 'Vite', 'Worker'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">A few highlights that blend performance, accessibility, and delightful motion.</p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-slate-900 shadow-sm hover:shadow"
          >
            <Code className="w-4 h-4" /> Start a project
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              className={`group relative rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition ${
                p.featured ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 px-2 py-1 text-xs font-medium">
                  <Star className="w-3 h-3" /> Featured
                </span>
              )}

              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-950">{p.title}</h3>
                <p className="mt-1 text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 text-slate-700 text-xs px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-slate-700 group-hover:text-slate-900">
                <span>View project</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* subtle background */}
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-1/2 bg-gradient-to-b from-slate-50 to-transparent" />
    </section>
  );
}
