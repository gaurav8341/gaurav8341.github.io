import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage fileUrl={"/content/about.md"} />} />

        </Routes>
      </Router>
  );
}export default App;