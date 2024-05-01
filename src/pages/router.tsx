/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./Home'));
const RestaurantPage = lazy(() => import('./Restaurant'));
const NotFoundPage = lazy(() => import('./NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/restaurant',
    element: <RestaurantPage />,
  },
  { path: '*', element: <NotFoundPage /> },
]);

export default router;
