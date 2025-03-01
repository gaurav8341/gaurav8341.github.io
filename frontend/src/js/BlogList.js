import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonLayout from './CommonLayout';
// import '../css/ProfilePage.css';
import '../css/BlogList.css';
// import BlogDetail from './BlogDetail';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/blogs.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
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