import React from 'react'

const Contact = () => {
  const contactItems = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'vrishabhrajaghatta@gmail.com',
      link: 'mailto:vrishabhrajaghatta@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      content: 'linkedin.com/in/vrushabh-rajaghatta',
      link: 'https://www.linkedin.com/in/vrushabh-rajaghatta'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      content: 'github.com/Vrushi007',
      link: 'https://github.com/Vrushi007'
    }
  ]

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {contactItems.map((item, index) => (
              <div key={index} className="contact-item">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>
                  <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    {item.content}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
