import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/vrushabh-rajaghatta',
      icon: 'fab fa-linkedin'
    },
    {
      href: 'https://github.com/Vrushi007',
      icon: 'fab fa-github'
    },
    // {
    //   href: '#',
    //   icon: 'fab fa-twitter'
    // }
  ]

  return (
    <footer id="footer">
      <div className="container">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>&copy; 2025 Vrushabh Rajaghatta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
