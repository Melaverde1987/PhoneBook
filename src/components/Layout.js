import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { NavBar } from './NavBar/NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
