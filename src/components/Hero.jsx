import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-amber-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="w-4 h-4 text-amber-500" /> Interactive 3D portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Building immersive web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl"
          >
            I craft modern, performant products with delightful details — from smooth micro-interactions to real-time 3D scenes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition-colors"
            >
              Explore work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 border shadow-sm hover:shadow-md transition"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden border bg-white/60 backdrop-blur">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay that doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
