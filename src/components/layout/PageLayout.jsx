import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

const PageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
