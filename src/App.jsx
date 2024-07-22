import React from 'react';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Maintenance from './components/Maintainance';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LockScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  // {
  //     path: "/",
  //     element: <Maintenance />,
  //   }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
