export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'C', 'C++', 'HTML', 'CSS']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Backend Development']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'Data Management', 'Database Design']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'NPM', 'Vite', 'Postman']
    },
    {
      category: 'Other Skills',
      skills: ['Data Structures', 'Operating Systems', 'Computer Networks', 'System Design']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">9.0</div>
            <p className="text-slate-300">CGPA (B.Tech)</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">5+</div>
            <p className="text-slate-300">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">MERN</div>
            <p className="text-slate-300">Stack Expert</p>
          </div>
        </div>
      </div>
    </section>
  )
}
