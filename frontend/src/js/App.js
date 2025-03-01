import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import '../css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage fileUrl={"/content/about.md"} />} />
        <Route path="/profile" element={<ProfilePage fileUrl={"/content/about.md"} />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* <Route path="/projects" element={<ProfilePage fileUrl={"/content/projects.md"} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;