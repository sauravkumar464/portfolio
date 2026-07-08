export default function Projects() {
  const projects = [
    {
      title: 'RAG-Based PDF Chatbot',
      description: 'Built a semantic document search assistant using LangChain, FAISS, and OpenAI embeddings to answer questions from uploaded PDFs with context-aware responses.',
      tags: ['Python', 'LangChain', 'FAISS', 'OpenAI Embeddings'],
      image: '📄'
    },
    {
      title: 'Finance Tracker',
      description: 'Developed a personal finance tracker to record, categorize, and analyze income and expenses using SQL and Pandas for clear spending insights.',
      tags: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
      image: '💰'
    },
    {
      title: 'Personal Portfolio',
      description: 'Created a polished portfolio website to present projects, skills, certifications, and contact details in a recruiter-friendly format.',
      tags: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
      image: '🌐'
    },
    {
      title: 'Ridelo - Bike & Car Rental Platform',
      description: 'Contributed as a frontend engineer on a rental booking platform, building responsive UI pages for listing, booking, and secure payment flow integration.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
      image: '🚗'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Projects that reflect my work in AI/ML, data-driven applications, and modern web development</p>

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
                <a href="#contact" className="flex-1 px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition text-center">
                  Discuss Project
                </a>
                <a href="https://github.com/sauravkumar464" target="_blank" rel="noreferrer" className="flex-1 px-4 py-2 border border-slate-500 text-slate-300 rounded-lg hover:border-slate-300 transition text-center">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
