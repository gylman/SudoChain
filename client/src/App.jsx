// App.js
import React, { useState } from 'react';
import BaseButton from './components/BaseButton';
import Sudokus from './components/Sudokus';
import Sudoku from './components/Sudoku';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styled from 'styled-components';
import Root from './pages/Root';
import Home from './pages/Home';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UpperBack = styled.div`
  height: 40.8%;
  background: #307df6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const LowerBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 59.2%;
  background: #f4f6ff;
`;

const Title = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;
`;

const Instruction = styled.p`
  color: #4e596b;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 48px;
  margin-bottom: 31px;
`;

const ConnectButton = styled(BaseButton)`
  background: black;
`;

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
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } else {
      alert('MetaMask is not installed!');
    }
  };

  return (
    <RouterProvider router={router}>
      <Container>
        <UpperBack>
          <Title>Sudoku</Title>
        </UpperBack>
        <LowerBack>
          <Instruction>
            To place a number in a square{' '}
            <strong>— type the number on your keyboard</strong>
            whilst hovering over the square, or after clicking on it
          </Instruction>
          {!account ? (
            <ConnectButton onClick={connectWallet} />
          ) : (
            <ConnectButton />
          )}
        </LowerBack>
      </Container>
    </RouterProvider>
  );
}

export default App;
