import React from 'react';
import Header from './Header';
import Footer from './Footer';

class ParentComponent extends React.Component {
    render() {
        console.log('ParentComponent.js');  
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

export default ParentComponent;