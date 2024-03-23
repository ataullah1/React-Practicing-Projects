import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Root/Root';
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './pages/Blogs/Blogs';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
