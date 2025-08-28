import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'IQVIA',
      date: 'August 2024 - Present',
      project: 'Country Strategy',
      description: [
        'Built a strategic web application to manage site, patients, and costs of clinical studies across countries',
        'Stack: React with TypeScript (frontend), Python Flask (backend)',
        'Collaborated in a team of 5 to design scalable UI components and backend endpoints'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'IQVIA',
      date: 'January 2023 - January 2024',
      project: 'Life Sciences Chatbot',
      description: [
        'Developed a chatbot platform using GPT-3.5-turbo and text-embedding-ada-002',
        'Stack: ReactJS (frontend), Python (backend), PostgreSQL (database)',
        'Integrated machine learning models for intelligent conversations in clinical workflows'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'IQVIA',
      date: 'November 2021 - January 2024',
      project: 'License Manager',
      description: [
        'Created a web application to manage Salesforce permission sets and org licenses',
        'Stack: ReactJS (frontend), .NET 6 (backend), PostgreSQL',
        'Focused on performance tuning and secure role-based access control'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'IQVIA',
      date: 'January 2021 - January 2024',
      project: 'Audit Manager',
      description: [
        'Built APIs for auditing data storage and compliance',
        'Used Apache Kafka for real-time data processing',
        'Addressed challenges including scalability, data security, and monitoring'
      ]
    },
    {
      title: 'Software Developer',
      company: 'IQVIA',
      date: 'August 2017 - August 2024',
      project: 'ARIM / RIM Smart (Regulatory Information Management)',
      description: [
        'Worked on full-stack development with C# .NET, JavaScript, AngularJS, SQL, and Oracle',
        'Boosted performance by migrating UI from Kendo to ag-grid',
        'Developed an Outlook Add-in to enhance workflow automation'
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-date">{exp.date}</p>
                <p><strong>Project: {exp.project}</strong></p>
                <ul className="experience-list">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
