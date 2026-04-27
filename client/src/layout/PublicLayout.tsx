import { Outlet } from 'react-router';

import logo from '@/assets/logo.png';

export default function PublicLayout() {
  return (
    <>
      <header className="flex h-20 items-center justify-center bg-white py-3 shadow-md">
        <img src={logo} alt="logo" width={180} height={60} />
      </header>
      <Outlet />
    </>
  );
}
