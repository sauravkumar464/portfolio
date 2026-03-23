export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Portfolio</h4>
            <p className="text-slate-400">Building amazing digital experiences</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://github.com/sauravkumar464" target="_blank" className="hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="https://linkedin.com/in/saurav-kumar-58b430295" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="mailto:SRBHARDWAJ464@GMAIL.COM" className="hover:text-blue-400 transition">Email</a></li>
              <li><a href="tel:+919431713909" className="hover:text-blue-400 transition">Phone</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Saurav Kumar. All rights reserved. | Jaipur, India</p>
        </div>
      </div>
    </footer>
  )
}
