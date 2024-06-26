import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './main/App';
import Home from './components/Home';
import PickDestination from './components/PickDestination';
import Crew from './components/Crew';
import Technology from './components/Technology';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },{
        path: "/destination",
        element: <PickDestination />,
      },{
        path: "/crew",
        element: <Crew />,
      },{
        path: "/technology",
        element: <Technology />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

