export default function Skills() {
  const skillCategories = [
    {
      category: 'AI / ML',
      skills: ['Python', 'Machine Learning', 'NumPy', 'Pandas', 'Matplotlib', 'LangChain']
    },
    {
      category: 'Cloud & Data',
      skills: ['AWS ML', 'SQL', 'MySQL', 'Data Analysis', 'RAG Systems']
    },
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL']
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook']
    },
    {
      category: 'Core CS',
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Technologies, tools, and concepts I use in building modern software and AI-driven solutions</p>

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
            <div className="text-5xl font-bold text-blue-400 mb-2">9+</div>
            <p className="text-slate-300">CGPA in B.Tech CSE</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">7+</div>
            <p className="text-slate-300">Certifications & Trainings</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">AI/ML</div>
            <p className="text-slate-300">Focused portfolio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
