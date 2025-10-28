import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} DevFolio. All rights reserved.</p>
          <p>
            Built with love, motion, and 3D.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
