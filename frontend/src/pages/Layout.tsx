import React, { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex-column justify-between items-center'>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
