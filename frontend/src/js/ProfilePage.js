import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import CommonLayout from './CommonLayout';
// import '../css/ProfilePage.css';

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
    <CommonLayout>
        <div ref={printRef} className="profile-info">
          <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </CommonLayout>
  );
};

export default ProfilePage;