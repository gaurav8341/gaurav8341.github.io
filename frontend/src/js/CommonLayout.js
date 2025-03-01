import React from 'react';
import Header from './Header';
import '../css/base.css';

const CommonLayout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className='base-layout'>
            <main>{children}</main>
        </div>
    </div>
    
  );
};

export default CommonLayout;