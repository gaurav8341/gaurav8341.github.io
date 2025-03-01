import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import '../css/App.css';

function App() {
  const [blogPaths, setBlogPaths] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs.json');
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
        <Route path="/" element={<ProfilePage fileUrl={"/content/about.md"} />} />
        <Route path="/profile" element={<ProfilePage fileUrl={"/content/about.md"} />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail blogPaths={blogPaths} />} />
        {/* <Route path="/projects" element={<ProfilePage fileUrl={"/content/projects.md"} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;