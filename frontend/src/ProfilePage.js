import './ProfilePage.css';

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const ProfilePage = ({ fileUrl }) => {
  const [markdown, setMarkdown] = useState("");
  const printRef = useRef();

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error loading Markdown:", error));
  }, [fileUrl]);

  return (
    <div className="profile-page">
      <div ref={printRef} className="profile-info">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProfilePage;


// const ProfilePage = () => {
//     console.log('ProfilePage.js');
//     const [user, setUser] = useState(null);  useEffect(() => {
//       axios.get('https://api.example.com/user')
//         .then(response => setUser(response.data))
//         .catch(error => console.error('Error fetching user data:', error));
//     }, []);  if (!user) return <div>Loading...</div>;  return (
//       <div className="profile-page">
//         <h1>Profile Page</h1>
//         <div className="profile-info">
//           <Avatar theme="blobs" />
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//           <Formik
//             initialValues={{ name: user.name, email: user.email }}
//             onSubmit={(values, { setSubmitting }) => {
//               axios.post('https://api.example.com/user/update', values)
//                 .then(response => {
//                   setUser(response.data);
//                   setSubmitting(false);
//                 })
//                 .catch(error => {
//                   console.error('Error updating user data:', error);
//                   setSubmitting(false);
//                 });
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <div>
//                   <label htmlFor="name">Name</label>
//                   <Field id="name" name="name" placeholder="John Doe" />
//                 </div>
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <Field id="email" name="email" placeholder="john.doe@example.com" type="email" />
//                 </div>
//                 <button type="submit" disabled={isSubmitting}>
//                   Update
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     );
//   };
  
  // export default ProfilePage;