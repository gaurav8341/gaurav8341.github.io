import React from 'react';
import Header from './Header';
// import Footer from './Footer';

const CommonLayout = ({ children }) => {
    return (
        console.log("children"),
        <div>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default CommonLayout;