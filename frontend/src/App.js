import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage fileUrl={"/content/about.md"} />} />
          <Route path="/profile" element={<ProfilePage fileUrl={"/content/about.md"} />} />
          {/* <Route path="/blogs" element={<ProfilePage fileUrl={"/content/blogs.md"} />} /> */}
          {/* <Route path="/projects" element={<ProfilePage fileUrl={"/content/projects.md"} />} /> */}

        </Routes>
      </Router>
  );
}export default App;