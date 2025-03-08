import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/BlogList.css';
import CommonLayout from './CommonLayout';
import { fetchUrls } from './utils';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const urls = await fetchUrls();
      console.log(urls.blogsJsonPath);
      const response = await axios.get(urls.blogsJsonPath);
      setBlogs(response.data);
    };

    loadBlogs();
  }, []);

    return (
        <CommonLayout>
            {/* <div className="blog-list"> */}
                <div className="content">
                    <h1 className='blog-title'>Learn With Me</h1>
                        <ul>
                            {blogs.map((blog) => (
                                // <div className="content">
                                    <li key={blog.path}>
                                        <Link className='blog-title' to={`/blog/${blog.id}`}>
                                            <h2 >{blog.title}</h2>
                                        </Link>
                                            <p>{blog.preview}</p>
                                            <p><strong>Date:</strong> {blog.date}</p>
                                            <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
                                    </li>
                                // </div>
                            ))}
                        </ul>
                </div>
            {/* </div> */}
        </CommonLayout>
    );
};

export default BlogList;