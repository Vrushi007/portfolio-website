import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Senior Software Developer with over 7 years of experience in full-stack development, specializing in ReactJS, .NET, and Python ecosystems. I build enterprise-grade applications that combine scalability, security, and exceptional user experience.</p>
            <p>My expertise spans developing AI-powered solutions using GPT models, creating real-time data processing systems with Apache Kafka, and deploying cloud-native applications on Azure. I excel at API development, system integration, and cross-functional collaboration to deliver high-impact software solutions.</p>
            <p>Passionate about clean code, performance optimization, and staying at the forefront of emerging technologies to solve complex business challenges.</p>
            <div className="about-details">
              <div className="detail"><strong>Name:</strong> Vrushabh Rajaghatta</div>
              <div className="detail"><strong>Email:</strong> <a href="mailto:vrishabhrajaghatta@gmail.com">vrishabhrajaghatta@gmail.com</a></div>
              <div className="detail"><strong>Location:</strong> Bengaluru </div>
              <div className="detail"><strong>Availability:</strong> Open to opportunities</div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/profile.jpeg" alt="Vrushabh Rajaghatta" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
