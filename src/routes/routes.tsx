import App from '@/App';
import Booking from '@/pages/Booking/Booking';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import Services from '@/pages/Services/Services';
import { createBrowserRouter } from 'react-router-dom';

const router: any = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/booking',
        element: <Booking></Booking>,
      },
    ],
  },
]);

export default router;
