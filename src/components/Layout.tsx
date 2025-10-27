import {type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import N8nChatWidget from './N8nChatWidget';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <N8nChatWidget/>
      <Footer />
    </div>
  );
};

export default Layout;
