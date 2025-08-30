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
    {
      title: 'FDA Data Retriever MCP Server',
      description: 'Comprehensive Model Context Protocol server providing access to 8 major FDA device databases with 16 specialized tools. Enables fetching and analysis of FDA device data including 510(k) clearances, device classifications, pre-market approvals, recalls, and adverse events.',
      tags: ['Python', 'MCP', 'FDA APIs', 'Healthcare Data', 'Async HTTP', 'Data Analytics'],
      icon: 'fas fa-database',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      demoLink: '#',
      sourceLink: 'https://github.com/Vrushi007/fda-data-retriever',
      featured: true
    },
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
