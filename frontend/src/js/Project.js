import React, { useState } from 'react';
import '../css/Project.css';
import CommonLayout from './CommonLayout';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Short description of Project 1',
    deployedLink: 'https://example.com/project1',
    codeLink: 'https://github.com/username/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Short description of Project 2',
    deployedLink: 'https://example.com/project2',
    codeLink: 'https://github.com/username/project2'
  },
  // Add more projects as needed
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <CommonLayout>
    <div className="project-page">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item" onClick={() => openProject(project)}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="project-modal-content">
            <span className="close-button" onClick={closeProject}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Project</a>
            <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
              <img src="github-logo.png" alt="GitHub Logo" className="github-logo" />
            </a>
          </div>
        </div>
      )}
    </div>
    </CommonLayout>
  );
};

export default Project;