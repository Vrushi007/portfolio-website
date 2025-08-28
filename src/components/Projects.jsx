import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'MCP Regulatory Intelligence Management System',
      description: 'Built a comprehensive Model Context Protocol (MCP) system for regulatory intelligence management using .NET 9 and PostgreSQL. Features AI agent integration, automated regulatory workflows, and intelligent data orchestration for next-generation regulatory compliance.',
      tags: ['.NET 9', 'PostgreSQL', 'Entity Framework Core', 'MCP', 'AI Integration', 'Regulatory Compliance'],
      icon: 'fas fa-brain',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      demoLink: '#',
      sourceLink: 'https://github.com/Vrushi007/regulatory-intelligence',
      featured: true
    },
    // {
    //   title: 'AI-Powered Clinical Study Chatbot',
    //   description: 'Developed an intelligent chatbot platform using OpenAI GPT-3.5 for clinical study management. Features automated query responses, study protocol explanations, and real-time assistance for research teams.',
    //   tags: ['React', 'Python', 'OpenAI GPT-3.5', 'Flask', 'Azure'],
    //   icon: 'fas fa-robot',
    //   gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    //   demoLink: '#',
    //   sourceLink: 'https://github.com/Vrushi007',
    //   featured: true
    // },
    // {
    //   title: 'Clinical Data Management System',
    //   description: 'Built a comprehensive web application for managing clinical trial data with real-time dashboards, automated reporting, and regulatory compliance features. Improved data processing efficiency by 40%.',
    //   tags: ['React', '.NET Core', 'SQL Server', 'Azure', 'Power BI'],
    //   icon: 'fas fa-chart-line',
    //   gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    //   demoLink: '#',
    //   sourceLink: 'https://github.com/Vrushi007',
    //   featured: true
    // },
    // {
    //   title: 'Automated Study Site Management Portal',
    //   description: 'Created a multi-tenant SaaS platform for managing clinical study sites with role-based access, document management, and automated workflow orchestration.',
    //   tags: ['Angular', 'ASP.NET Core', 'Entity Framework', 'Docker'],
    //   icon: 'fas fa-hospital',
    //   gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    //   demoLink: '#',
    //   sourceLink: 'https://github.com/Vrushi007',
    //   featured: false
    // },
    // {
    //   title: 'Real-time Analytics Dashboard',
    //   description: 'Developed interactive dashboards for clinical trial monitoring with real-time data visualization, predictive analytics, and automated alerting systems.',
    //   tags: ['D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    //   icon: 'fas fa-analytics',
    //   gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    //   demoLink: '#',
    //   sourceLink: 'https://github.com/Vrushi007',
    //   featured: false
    // },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Vite. Features smooth animations, dark/light mode toggle, and optimized performance.',
      tags: ['React', 'Vite', 'CSS3', 'JavaScript', 'GitHub Pages'],
      icon: 'fas fa-user-circle',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      demoLink: 'https://vrushi007.github.io/resume/',
      sourceLink: 'https://github.com/Vrushi007/resume',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Recent enterprise-level projects showcasing expertise in regulatory technology, AI integration, and clinical data management
        </p>
        
        {/* Featured Projects */}
        <div className="projects-grid">
          {projects.filter(project => project.featured).map((project, index) => (
            <div key={index} className="project-card featured">
              <div className="project-image">
                <div 
                  className="project-placeholder"
                  style={{ background: project.gradient }}
                >
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink !== '#' && (
                    <a href={project.demoLink} className="btn small" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> View Demo
                    </a>
                  )}
                  <a href={project.sourceLink} className="btn small secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="projects-subsection">Other Projects</h3>
        <div className="projects-grid other-projects">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-small">
                <div 
                  className="project-icon-small"
                  style={{ background: project.gradient }}
                >
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink !== '#' && (
                    <a href={project.demoLink} className="btn small" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  )}
                  <a href={project.sourceLink} className="btn small secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
