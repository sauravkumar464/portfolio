import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Portfolio
        </div>
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition">Home</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button>
          <button onClick={() => scrollToSection('certificates')} className="hover:text-blue-400 transition">Certificates</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition">Home</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button>
          <button onClick={() => scrollToSection('certificates')} className="hover:text-blue-400 transition">Certificates</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
        </div>
      )}
    </header>
  )
}
