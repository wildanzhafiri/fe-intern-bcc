import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full mx-auto px-4 md:px-10 pt-24 md:pt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
