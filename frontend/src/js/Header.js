import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="site-header" role="banner">
            <div className="headwrapper">
                <div className="title-container" id="title">
                    <Link className="site-title" to="/">Gaurav Rajput</Link>
                </div>
                <div className="nav-container" id="nav">
                    <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="navbar-menu">
                            <li className="navbar-item"><Link className="page-link" to="/profile">About</Link></li>
                            <li className="navbar-item"><Link className="page-link" to="/blogs">Blog</Link></li>
                            <li className="navbar-item"><Link className="page-link" to="/projects">Projects</Link></li>
                            {/* <li className="navbar-item"><Link className="page-link" to="/contact">Contact</Link></li> */}
                        </ul>
                    </nav>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;