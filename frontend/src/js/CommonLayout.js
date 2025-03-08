import React from 'react';
import Header from './Header';
import '../css/base.css';
import Footer from './Footer';

const CommonLayout = ({ children }) => {
  return (
    <div className='base-container'>
        <Header />
        <div className='base-layout'>
            <main>{children}</main>
        </div>
        <Footer />
    </div>
    
  );
};

export default CommonLayout;