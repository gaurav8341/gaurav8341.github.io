// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';


function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfilePage fileUrl="/content/about.md" />
    </div>
  );
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/profile" element={<ProfilePage/>} />
  //     </Routes>
  //   </Router>
  // );
}export default App;