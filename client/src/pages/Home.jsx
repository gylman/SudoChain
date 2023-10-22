import { Link, Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import BaseButton from '../components/BaseButton';
import Sudokus from '../components/Sudokus';
import Sudoku from '../components/Game';
import VisualSquare from '../components/VisualSquare';

import styled from 'styled-components';
import Grid from '../components/Grid';

const AbsoluteWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
`;

const Title = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 52px;
`;

const Instruction = styled.p`
  color: #4e596b;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 31px;
`;

const ConnectButton = styled(BaseButton)`
  background: black;
`;

const PlayButton = styled(BaseButton)`
  background: black;
`;
const Home = () => {
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
    <AbsoluteWrapper>
      <Container>
        <Title>Sudoku</Title>
        <Instruction>
          To place a number in a square{' '}
          <strong>— type the number on your keyboard </strong>
          whilst hovering over the square, or after clicking on it
        </Instruction>
        {!account ? (
          <ConnectButton onClick={connectWallet}>
            Connect to Metamask
          </ConnectButton>
        ) : (
          <Link to='sudokus'>
            <PlayButton>Play</PlayButton>
          </Link>
        )}
      </Container>
    </AbsoluteWrapper>
  );
};

export default Home;
