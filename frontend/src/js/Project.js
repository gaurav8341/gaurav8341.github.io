import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Project.css';
import CommonLayout from './CommonLayout';
import { fetchUrls } from './utils';
import ProjectModal from './ProjectModal';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      const urls = await fetchUrls();
      const response = await axios.get(urls.featuredProjectsPath);
      setProjects(response.data);
    };

    loadProjects();
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <CommonLayout>
      <div className="project-container">
        <h1 className="section-title">Projects</h1>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item" onClick={() => openProject(project)}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProject} />
        )}
      </div>
    </CommonLayout>
  );
};

export default Project;