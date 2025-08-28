import React from 'react'

const Certifications = () => {
  const earnedCertifications = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      provider: 'Microsoft',
      credentialId: 'AI-900',
      dateEarned: 'August 5, 2025',
      expiryDate: 'No Expiry',
      description: 'Demonstrates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
      icon: 'fab fa-microsoft',
      color: '#0078d4',
      verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/RajaghattaVrushabh-1064/2D7E2880BE43D5AA?sharingId=5CD339466CA3850',
      skills: ['AI/ML Concepts', 'Azure Cognitive Services', 'Machine Learning', 'Computer Vision', 'Natural Language Processing'],
      status: 'earned'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      provider: 'Microsoft',
      credentialId: 'AZ-900',
      dateEarned: 'June 7, 2024',
      expiryDate: 'No Expiry',
      description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
      icon: 'fab fa-microsoft',
      color: '#0078d4',
      verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/RajaghattaVrushabh-1064/9DDC2C75435503FE?sharingId=5CD339466CA3850',
      skills: ['Cloud Computing', 'Azure Services', 'Cloud Security', 'Azure Pricing', 'SLA Management'],
      status: 'earned'
    }
  ]

  const upcomingCertifications = [
    {
      title: 'GitHub Copilot Certification',
      provider: 'GitHub',
      credentialId: 'GH-300',
      plannedDate: 'Q4 2025',
      description: 'Demonstrates proficiency in using GitHub Copilot for AI-powered code generation, completion, and development workflows.',
      icon: 'fab fa-github',
      color: '#24292e',
      skills: ['AI-Powered Coding', 'GitHub Copilot', 'Code Generation', 'Developer Productivity', 'AI Assistance'],
      status: 'planned'
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      provider: 'Microsoft',
      credentialId: 'AI-102',
      plannedDate: 'Q1 2026',
      description: 'Design and implement Azure AI solutions including natural language processing, speech, computer vision, and conversational AI using Azure Cognitive Services.',
      icon: 'fab fa-microsoft',
      color: '#0078d4',
      skills: ['Azure AI Services', 'Cognitive Services', 'Natural Language Processing', 'Computer Vision', 'Bot Framework'],
      status: 'planned'
    }
    // Add more upcoming certifications here
  ]

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Professional Certifications</h2>
        <p className="section-subtitle">
          Microsoft Azure certifications demonstrating expertise in cloud computing and artificial intelligence
        </p>
        
        {/* Earned Certifications */}
        <h3 className="certifications-subsection">Earned Certifications</h3>
        <div className="certifications-grid">
          {earnedCertifications.map((cert, index) => (
            <div key={index} className="certification-card earned">
              <div className="certification-header">
                <div 
                  className="certification-icon"
                  style={{ backgroundColor: cert.color }}
                >
                  <i className={cert.icon}></i>
                </div>
                <div className="certification-badge">
                  <span className="certification-provider">{cert.provider}</span>
                  <span className="certification-id">{cert.credentialId}</span>
                </div>
              </div>
              
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                
                <div className="certification-details">
                  <div className="certification-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Earned: {cert.dateEarned}</span>
                  </div>
                  <div className="certification-expiry">
                    <i className="fas fa-clock"></i>
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                </div>
                
                <div className="certification-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="certification-actions">
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl} 
                      className="btn small primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-certificate"></i>
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Certifications */}
        {upcomingCertifications.length > 0 && (
          <>
            <h3 className="certifications-subsection">Upcoming Certifications</h3>
            <div className="certifications-grid upcoming">
              {upcomingCertifications.map((cert, index) => (
                <div key={index} className="certification-card upcoming">
                  <div className="certification-header">
                    <div 
                      className="certification-icon upcoming"
                      style={{ backgroundColor: cert.color, opacity: 0.7 }}
                    >
                      <i className={cert.icon}></i>
                    </div>
                    <div className="certification-badge">
                      <span className="certification-provider">{cert.provider}</span>
                      <span className="certification-id">{cert.credentialId}</span>
                    </div>
                  </div>
                  
                  <div className="certification-content">
                    <h3>{cert.title}</h3>
                    <p>{cert.description}</p>
                    
                    <div className="certification-details">
                      <div className="certification-date">
                        <i className="fas fa-target"></i>
                        <span>Target: {cert.plannedDate}</span>
                      </div>
                    </div>
                    
                    <div className="certification-skills">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag upcoming">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="certifications-note">
          <p>
            <i className="fas fa-trophy"></i>
            Recently achieved Azure AI Fundamentals certification (August 2025), building upon solid cloud foundation with Azure Fundamentals. 
            Continuously expanding expertise with planned certifications in Azure development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
