import App from './App';
import { createBrowserRouter } from 'react-router-dom';

export const getRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        < App/>
      ),
    },
  ]);
