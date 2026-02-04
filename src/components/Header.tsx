'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiOutlineLightningBolt, HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-content">
          <Link href="#" className="logo">
            <div className="logo-icon">
              <HiOutlineLightningBolt size={24} />
            </div>
            DigitalPro
          </Link>

          {/* Mobile menu button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            <Link href="#servicios">Servicios</Link>
            <Link href="#proceso">Proceso</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contacto" className="btn btn-primary">Empezar ahora</Link>
          </nav>

          {/* Mobile nav */}
          <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link href="#servicios" onClick={closeMobileMenu}>Servicios</Link>
            <Link href="#proceso" onClick={closeMobileMenu}>Proceso</Link>
            <Link href="#faq" onClick={closeMobileMenu}>FAQ</Link>
            <Link href="#contacto" className="btn btn-primary" onClick={closeMobileMenu}>Empezar ahora</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
