import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="static">
      <Navbar />

      <main className="pt-3 mt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
