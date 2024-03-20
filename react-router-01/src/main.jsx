import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/header',
        element: <Header />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
