export default function Certificates() {
  const certificates = [
    'Machine Learning Training – Ardent Computech Pvt. Ltd.',
    'Programming with C++ – Internshala',
    'Programming with C – NPTEL',
    'Programming in Java – NPTEL',
    'The Joy of Computing Using Python – NPTEL',
    'Database Management System – NPTEL',
    'Google Cloud Computing Foundations – NPTEL'
  ]

  return (
    <section id="certificates" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Certificates</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Academic and professional certifications that support my learning journey</p>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600 hover:border-blue-400 transition"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎓</div>
                <p className="text-slate-200 font-medium">{certificate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
