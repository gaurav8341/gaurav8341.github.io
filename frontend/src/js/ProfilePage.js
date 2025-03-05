import React, { useState, useEffect, useRef } from "react";
import CommonLayout from './CommonLayout';
import axios from 'axios';
import '../css/ProfilePage.css';

const ProfilePage = ({ contentUrl }) => {
  const [content, setContent] = useState("");
  const printRef = useRef();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(contentUrl);
        setContent(response.data);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    fetchContent();
  }, [contentUrl]);

  return (
    <CommonLayout>
      <div ref={printRef} className="profile-info" dangerouslySetInnerHTML={{ __html: content }} />
    </CommonLayout>
  );
};

export default ProfilePage;