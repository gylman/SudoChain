// App.js
import React, { useState } from 'react';
import BaseButton from './components/BaseButton';
import Sudokus from './components/Sudokus';
import Game from './components/Game';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styled from 'styled-components';
import Root from './pages/Root';
import Home from './pages/Home';
import MintNft from './pages/MintNft';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sudokus', element: <Sudokus /> },
      { path: 'sudokus/:sudokuId', element: <Game /> },
      { path: 'sudokus/:sudokuId/check', element: <MintNft /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
