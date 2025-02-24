import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log('Header.js');
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Main Page</Link></li>
                    <li><Link to="/profile">About Me</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                    <li><Link to="/projects">Project</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;