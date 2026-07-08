export default function Testimonials() {
  const experiences = [
    {
      name: 'GRRAS Solutions',
      role: 'AWS ML Engineer Intern',
      message: 'Currently interning in AWS-based machine learning workflows, gaining practical exposure to model training, deployment concepts, and cloud-native ML tooling.',
      image: '☁️'
    },
    {
      name: 'Ardent Computech Pvt. Ltd.',
      role: 'Machine Learning Training',
      message: 'Completed structured training in ML fundamentals, covering data preprocessing, model building, evaluation, and Python-based implementation.',
      image: '📊'
    },
    {
      name: 'Arya College of Engineering',
      role: 'B.Tech in Computer Science',
      message: 'Maintaining a 9+ CGPA while building a strong foundation in data structures, algorithms, operating systems, computer networks, and DBMS.',
      image: '🎓'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Education</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Academic background, training, and current internship experience</p>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{item.image}</div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-slate-300">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
