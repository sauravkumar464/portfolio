import { useState } from 'react'

const FORM_ENDPOINT = 'https://formsubmit.co/srbhardwaj464@gmail.com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ sent: false, error: false, loading: false })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ sent: false, error: false, loading: true })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from portfolio contact form',
          _captcha: 'false',
          _next: `${window.location.origin}/thank-you.html`
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus({ sent: true, error: false, loading: false })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ sent: false, error: true, loading: false })
      console.error('Contact form error:', error)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
        </h2>
        <p className="text-slate-400 text-center mb-16">Have a great idea? Let's discuss it!</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-400">SRBHARDWAJ464@GMAIL.COM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-400">+91-9431713909</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-400">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-slate-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-slate-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-slate-400 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition disabled:opacity-60"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.sent && (
              <p className="text-green-400 text-center">Message sent successfully! 🎉</p>
            )}
            {status.error && (
              <p className="text-red-400 text-center">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
