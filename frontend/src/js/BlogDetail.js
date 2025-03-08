import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CommonLayout from './CommonLayout';
import axios from 'axios';
import Mermaid from './Mermaid';
import '../css/BlogDetail.css';

const BlogDetail = ({ blogPaths }) => {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    console.log("blogPaths dict",blogPaths);
    useEffect(() => {
        const fetchBlogContent = async () => {
            try {
                const blogPath = blogPaths[id];
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

    const components = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match && match[1] === 'mermaid' ? (
                <Mermaid chart={String(children).replace(/\n$/, '')} />
            ) : (
                <pre>
                    <code className={className} {...props}>
                        {children}
                    </code>
                </pre>
            );
        }
    };

    return (
        <CommonLayout>
            <div className="blog-detail">
                    {content ? (
                        <ReactMarkdown components={components}>{content}</ReactMarkdown>
                    ) : (
                        <p>Loading...</p>
                    )}
            </div>
        </CommonLayout>
    );
};

export default BlogDetail;