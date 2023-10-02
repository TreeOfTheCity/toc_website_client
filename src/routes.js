import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import HomeLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import Page404 from './pages/Page404';

import Home from './sections/Home/Home';
import Donation from './sections/Donation/Donation';
import Gallery from './sections/Gallery/Gallery';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        { element: <Home />, index: true },
        { path: 'donation', element: <Donation /> },
        { path: 'gallery', element: <Gallery /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
