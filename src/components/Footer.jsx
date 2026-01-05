import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ragam_black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider">Ragam '23</h2>
          <p className="text-gray-400 text-sm mt-2">The biggest cultural fest in South India.</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wide">
          <Link href="/team" className="hover:text-ragam_orange transition-colors">Team</Link>
          <Link href="/sponsors" className="hover:text-ragam_orange transition-colors">Sponsors</Link>
          <Link href="/contact" className="hover:text-ragam_orange transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-ragam_orange transition-colors">Privacy Policy</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-ragam_orange transition-colors text-xl"><FaInstagram /></a>
          <a href="#" className="hover:text-ragam_orange transition-colors text-xl"><FaFacebook /></a>
          <a href="#" className="hover:text-ragam_orange transition-colors text-xl"><FaTwitter /></a>
          <a href="#" className="hover:text-ragam_orange transition-colors text-xl"><FaYoutube /></a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-12">
        © 2023 Ragam. All rights reserved.
      </div>
    </footer>
  )
}
