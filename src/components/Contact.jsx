import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              I’m available for freelance work, collaborations, and full-time roles. Share a bit about your project and I’ll get back within 24 hours.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-slate-900 shadow-sm hover:shadow"
              >
                <Mail className="w-4 h-4" /> hello@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-slate-200 focus:border-slate-400 focus:ring-0" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-slate-200 focus:border-slate-400 focus:ring-0" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-600">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg border-slate-200 focus:border-slate-400 focus:ring-0" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
              Send message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
