import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'layouts';

const HomePage = lazy(() => import('./Home'));
const RestaurantPage = lazy(() => import('./Restaurant'));
const NotFoundPage = lazy(() => import('./NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/restaurant',
        element: <RestaurantPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
