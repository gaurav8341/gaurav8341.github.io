import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    console.log('Header.js');
    return (
        // <header>
        //     <nav className="navbar">
        //         <ul className="navbar-menu">
        //             <li className="navbar-item"><Link to="/" className="navbar-link">Main Page</Link></li>
        //             <li className="navbar-item"><Link to="/profile" className="navbar-link">About Me</Link></li>
        //             <li className="navbar-item"><Link to="/blogs" className="navbar-link">Blog</Link></li>
        //             <li className="navbar-item"><Link to="/projects" className="navbar-link">Project</Link></li>
        //         </ul>
        //     </nav>
        // </header>
        <header class="site-header" role="banner">
            <div class="wrapper">
                <ul className='navbar-menu'>
                    <Link class="site-title" to="/">Gaurav Rajput</Link>
                </ul>
                <nav class="site-nav">
                    <div class="trigger">
                        <li className='navbar-item'><Link class="page-link" to="/profile">About</Link></li>
                        <li className='navbar-item'><Link class="page-link" to="/blogs">Blog</Link></li>
                        <li className='navbar-item'><Link class="page-link" to="/projects">Projects</Link></li>
                        <li className='navbar-item'><Link class="page-link" to="/contact">Contact</Link></li>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;