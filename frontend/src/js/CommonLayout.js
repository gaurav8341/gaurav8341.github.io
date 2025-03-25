import React from 'react';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import Header from './Header';
import '../css/base.css';
import Footer from './Footer';

const CommonLayout = ({ children }) => {
  return (
    
    <div className='base-container'>
        <Analytics/>
        <SpeedInsights/>
        <Header />
        <div className='base-layout'>
            <main>{children}</main>
        </div>
        <Footer />
    </div>
    
  );
};

export default CommonLayout;