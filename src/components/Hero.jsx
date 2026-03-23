export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl">
              👨‍💻
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Saurav Kumar</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Full Stack Developer | MERN Stack Specialist | CS Undergraduate
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Building responsive web applications with modern technologies. Specialized in React, Node.js, and MongoDB. Currently pursuing B.Tech in Computer Science with 9.0+ CGPA. Based in Jaipur, Rajasthan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('projects').scrollIntoView()} className="px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition">
            View My Work
          </button>
          <a href="https://linkedin.com/in/saurav-kumar-58b430295" target="_blank" className="px-8 py-3 border border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition">
            LinkedIn Profile
          </a>
        </div>
        <div className="mt-16 flex justify-center gap-6">
          <a href="https://github.com/sauravkumar464" target="_blank" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="GitHub">
            🐙
          </a>
          <a href="https://linkedin.com/in/saurav-kumar-58b430295" target="_blank" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="LinkedIn">
            🔗
          </a>
          <a href="mailto:SRBHARDWAJ464@GMAIL.COM" className="text-slate-400 hover:text-blue-400 transition text-2xl" title="Email">
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
