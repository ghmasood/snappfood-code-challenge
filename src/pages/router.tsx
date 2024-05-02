/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./Home'));
const RestaurantPage = lazy(() => import('./Restaurant'));
const NotFoundPage = lazy(() => import('./NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/restaurant',
    element: (
      <Suspense fallback={null}>
        <RestaurantPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={null}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export default router;
