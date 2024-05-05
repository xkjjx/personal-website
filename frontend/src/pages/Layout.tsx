// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>Your Header</header>
            <main>{children}</main>
            <footer>Your Footer</footer>
        </div>
    );
};

export default Layout;
