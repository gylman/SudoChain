// App.js
import React, { useState } from 'react';
import BaseButton from './components/BaseButton';
import CardList from './components/CardList';
import Sudoku from './components/Sudoku';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 48px;
`;

const ConnectButton = styled(BaseButton)`
  margin-top: 31px;
  background: black;
`;

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
  );
}

export default App;
