import { useState, useEffect } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Competitions', href: '/competitions' },
  { name: 'Shows', href: '/shows' },
  { name: 'Team', href: '/team' },
]

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for navbar background/transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo or Brand Name could go here, but Ragam usually keeps it minimal or in Hero */}
          <div className="text-white font-bold text-xl z-50">
            {/* Placeholder for Logo if needed */}
          </div>

          <div className="z-50 text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-ragam_black z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl md:text-6xl font-oswald text-white hover:text-ragam_orange transition-colors uppercase font-bold tracking-wider"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
