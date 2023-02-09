import React from 'react';
import { RouterProvider } from 'react-router-dom';
import RouteApp from './routes';

const App = () => {
  return <RouterProvider router={RouteApp} />
}
export default App;
