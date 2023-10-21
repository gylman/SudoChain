// App.js
import React, { useState } from 'react';
import BaseButton from './components/BaseButton';
import Sudokus from './components/Sudokus';
import Sudoku from './components/Sudoku';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styled from 'styled-components';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sudokus', element: <Sudokus /> },
      { path: 'sudokus/:gameId', element: <Sudoku /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
