export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl">
              🤖
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Saurav Kumar</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Aspiring Software Developer | Generative AI & ML Enthusiast | AWS ML Intern
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Computer Science undergraduate with a 9+ CGPA, hands-on experience in Python, Java, JavaScript, and AI/ML projects. I enjoy building intelligent applications, cloud-based ML workflows, and polished web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('projects').scrollIntoView()} className="px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition">
            Explore My Projects
          </button>
          <a href="/Saurav_Kumar_Resume_GenAI_907.docx" target="_blank" rel="noreferrer" className="px-8 py-3 border border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition">
            View Resume
          </a>
        </div>
        <div className="mt-16 flex justify-center gap-6">
          <a href="https://github.com/sauravkumar464" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="GitHub">
            🐙
          </a>
          <a href="https://linkedin.com/in/saurav-kumar-er2027" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="LinkedIn">
            🔗
          </a>
          <a href="mailto:srbhardwaj464@gmail.com" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="Email">
            📧
          </a>
          <a href="tel:+919431713909" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="Phone">
            📱
          </a>
        </div>
      </div>
    </section>
  )
}
