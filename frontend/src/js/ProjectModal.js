import React from 'react';
import '../css/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div className="project-modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Project</a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <img src="github-logo.png" alt="GitHub Logo" className="github-logo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;