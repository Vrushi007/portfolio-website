import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Project Name 1',
      description: 'Brief description of the project, technologies used, and your role in developing it.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project1.jpg',
      demoLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Project Name 2',
      description: 'Brief description of the project, technologies used, and your role in developing it.',
      tags: ['Angular', 'Express', 'PostgreSQL'],
      image: '/images/project2.jpg',
      demoLink: '#',
      sourceLink: '#'
    }
  ]

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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
                  <a href={project.demoLink} className="btn small">View Demo</a>
                  <a href={project.sourceLink} className="btn small secondary">Source Code</a>
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
