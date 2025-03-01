import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CommonLayout from '../CommonLayout';

const BlogDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchBlogContent = async () => {
            try {
                const response = await fetch(`/blogs/${slug}.md`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error(error);
                setContent(null);
            }
        };

        fetchBlogContent();
    }, [slug]);

    return (
        <CommonLayout>
            <div>
                <h1>Blog Detail</h1>
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