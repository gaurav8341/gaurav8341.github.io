import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    console.log('Header.js');
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className="navbar-item"><Link to="/" className="navbar-link">Main Page</Link></li>
                    <li className="navbar-item"><Link to="/profile" className="navbar-link">About Me</Link></li>
                    <li className="navbar-item"><Link to="/blogs" className="navbar-link">Blog</Link></li>
                    <li className="navbar-item"><Link to="/projects" className="navbar-link">Project</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;