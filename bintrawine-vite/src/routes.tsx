import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/error-page';
import Home from '@/pages/home';
import Root from '@/pages/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
