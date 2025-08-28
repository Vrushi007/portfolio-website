import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar effect
      setIsScrolled(window.scrollY > 100)

      // Get current scroll position
      const sections = document.querySelectorAll('section')
      const scrollPos = window.scrollY + 150

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    const navbar = document.getElementById('navbar')
    const navHeight = navbar.offsetHeight

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: 'smooth'
      })
    }
    setActiveSection(sectionId)
  }

  return (
    <nav id="navbar" style={{ padding: isScrolled ? '0.5rem 0' : '1rem 0' }}>
      <div className="container">
        <h1 className="logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
            Vrushabh Rajaghatta
          </a>
        </h1>
        <ul>
          {['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(section) }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
