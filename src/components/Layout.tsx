import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
