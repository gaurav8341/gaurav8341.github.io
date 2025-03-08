import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.site-nav') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="headwrapper">
        <div className="title-container">
          <Link className="site-title" to="/">Gaurav Rajput</Link>
        </div>
        <div className='nav-container'>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
          </button>
          <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-menu">
              <li className="navbar-item"><Link to="/profile" className="page-link">Profile</Link></li>
              <li className="navbar-item"><Link to="/blogs" className="page-link">Blog</Link></li>
              <li className="navbar-item"><Link to="/projects" className="page-link">Projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>} */}
    </header>
  );
};

export default Header;