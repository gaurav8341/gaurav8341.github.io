import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CommonLayout from './CommonLayout';
import axios from 'axios';
import '../css/BlogDetail.css';

const BlogDetail = ({ blogPaths }) => {
    const { id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchBlogContent = async () => {
            try {
                const blogPath = blogPaths[id];
                console.log(blogPath);
                if (!blogPath) {
                    throw new Error('Blog not found');
                }

                axios.get(blogPath).then((response) => {
                    setContent(response.data);
                });
            } catch (error) {
                console.error(error);
                setContent(null);
            }
        };

        if (Object.keys(blogPaths).length > 0) {
            fetchBlogContent();
        }
    }, [id, blogPaths]);

    return (
        <CommonLayout>
            <div className="blog-detail">
                    {content ? (
                        <ReactMarkdown>{content}</ReactMarkdown>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
        </CommonLayout>
    );
};

export default BlogDetail;