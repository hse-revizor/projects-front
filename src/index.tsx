
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import { getRouter } from './routes';

createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={getRouter()} />);
