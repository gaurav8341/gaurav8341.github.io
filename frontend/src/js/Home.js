import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonLayout from './CommonLayout';
import axios from 'axios';
import '../css/Home.css';
import { fetchUrls } from './utils';
import ProjectModal from './ProjectModal';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjectsAndBlogs = async () => {
      try {
        const urls = await fetchUrls();
        const [projectsResponse, blogsResponse] = await Promise.all([
          axios.get(urls.featuredProjectsPath),
          axios.get(urls.featuredBlogsPath)
        ]);
        setProjects(projectsResponse.data);
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error loading projects or blogs:", error);
      }
    };

    fetchProjectsAndBlogs();
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <CommonLayout>
      <div className="home">
        <section className="intro">
          {/* <img src="/path/to/your/photo.jpg" alt="Gaurav Rajput" className="profile-photo" /> */}
          <h1>Gaurav Rajput</h1>
          <p>Software Developer | Tech Enthusiast | Blogger</p>
        </section>

        <section className="navigation">
          <nav>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
          </nav>
        </section>

        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project" onClick={() => openProject(project)}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/projects" className="view-all-link">View All Projects</Link>
          </div>
        </section>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProject} />
        )}

        <section className="latest-blogs">
          <h2>Featured Blog Posts</h2>
          <div className="blogs">
            {blogs.map((blog, index) => (
              <div key={index} className="blog">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/blogs" className="view-all-link">View All Blog Posts</Link>
          </div>
        </section>

        <section className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-list">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>HTML & CSS</span>
            {/* Add more skills as needed */}
          </div>
        </section>

        <section className="call-to-action">
          <h2>Get in Touch</h2>
          <p>If you'd like to work together or just want to say hi, feel free to reach out!</p>
          <div className="social-media">
            <a href="https://github.com/gaurav8341" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/gaurav8341" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z"/></svg>
            </a>
            <a href="mailto:rajput.gaurav8341@gmail.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 12.713l11.985-8.713H.015L12 12.713zM12 14.287L.015 5.574V18.426L12 14.287zM12 14.287L23.985 18.426V5.574L12 14.287z"/></svg>
            </a>
          </div>
        </section>
      </div>
    </CommonLayout>
  );
};

export default Home;