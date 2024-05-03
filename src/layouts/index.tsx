import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    // @TODO: Create Loading
    <Suspense fallback={<span>loading...</span>}>
      <Outlet />
    </Suspense>
  );
}

export default Layout;
