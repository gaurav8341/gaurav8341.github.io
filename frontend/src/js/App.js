import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Project from './Project';
import ProfilePage from './ProfilePage';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import '../css/App.css';
import { fetchUrls } from './utils';
import axios from 'axios';

function App() {
  const [blogPaths, setBlogPaths] = useState({});
  const [urls, setUrls] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const urls = await fetchUrls();
        setUrls(urls);
        const response = await axios.get(urls.blogsJsonPath);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogs = await response.json();
        const paths = blogs.reduce((acc, blog) => {
          acc[blog.id] = blog.path;
          return acc;
        }, {});
        setBlogPaths(paths);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  console.log("blogPaths", blogPaths);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage contentUrl={urls.profilePageUrl} />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail blogPaths={blogPaths} />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;