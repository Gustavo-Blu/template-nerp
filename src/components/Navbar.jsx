import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="p-3 bg-blue-900 text-blue-50 absolute top-0 left-0 w-full">
      <nav className="flex justify-between">
        <h1>Vite + Express + Prisma + Postgres</h1>
        <h2>The NERP Stack</h2>
        <div className="flex flex-nowrap gap-5">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
