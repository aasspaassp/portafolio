import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './ErrorPage';
import About from "./routes/About";
import Message from './routes/Message';
import App from './routes/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/about/",
        element: <About />,
      },
      {
        path: "/projects/",
        element: <App />
      },
      {
        path: "/contact/",
        element: <Message />
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />,
  </React.StrictMode>
);


