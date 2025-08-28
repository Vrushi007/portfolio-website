import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['ReactJS', 'JavaScript', 'TypeScript', 'AngularJS']
    },
    {
      title: 'Backend',
      skills: ['.NET 6', 'C#', 'Python']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MS SQL', 'Oracle']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Azure', 'GitLab', 'GitHub Copilot']
    },
    {
      title: 'AI/ML',
      skills: ['GPT-3.5 Turbo', 'RAG', 'Generative AI']
    },
    {
      title: 'Integration & APIs',
      skills: ['SOAP', 'RESTful APIs', 'API Integration']
    },
    {
      title: 'Others',
      skills: ['Apache Kafka', 'Salesforce', 'JIRA', 'Confluence']
    }
  ]

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
