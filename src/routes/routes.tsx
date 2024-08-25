import App from '@/App';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
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
    ],
  },
]);

export default router;
