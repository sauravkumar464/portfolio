export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ardent Computech',
      role: 'MERN Stack Training Provider',
      message: 'Saurav demonstrated exceptional learning capability and hands-on expertise in full stack development. Successfully completed multiple projects using MERN stack.',
      image: '🎓'
    },
    {
      name: 'Academic Excellence',
      role: 'Arya College of Engineering',
      message: 'Outstanding academic performance with consistent excellence in computer science fundamentals and coursework. Strong grasp of data structures and algorithms.',
      image: '⭐'
    },
    {
      name: 'Project Delivery',
      role: 'Multiple Certifications Completed',
      message: 'Demonstrated commitment to continuous learning with certifications in Cloud Computing, DBMS, and Programming. Quick learner and self-motivated developer.',
      image: '🚀'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Say</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Testimonials from clients and colleagues</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-slate-300 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
