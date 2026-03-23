export default function Projects() {
  const projects = [
    {
      title: 'Bike & Car Rental Platform',
      description: 'A comprehensive web platform for online car and bike booking. Users can browse available vehicles, make bookings, and manage their rental history with an intuitive interface.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: '🚗'
    },
    {
      title: 'Library Management System',
      description: 'Built a robust system to manage library operations including book records, issue and return operations. Implemented structured data handling for efficient record management.',
      tags: ['C/C++', 'Data Structures', 'System Design'],
      image: '📚'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Showcase of my best work and recent projects</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 hover:from-slate-700 hover:to-slate-600 transition border border-slate-600 hover:border-blue-400"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-400/20 text-blue-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition">
                  View Project
                </button>
                <button className="flex-1 px-4 py-2 border border-slate-500 text-slate-300 rounded-lg hover:border-slate-300 transition">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
