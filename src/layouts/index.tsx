import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import FallBackPage from 'components/Fallback';

function Layout() {
  return (
    <Suspense fallback={<FallBackPage />}>
      <Outlet />
    </Suspense>
  );
}

export default Layout;
