import { useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Impact', href: '#our-impact' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-green/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Logo light />

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-sans text-[15px] text-white/90 transition-colors duration-200 hover:text-accent-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-dark-green transition-[max-height] duration-300 ease-out md:hidden ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block py-3 font-sans text-base text-white/90 hover:text-accent-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
