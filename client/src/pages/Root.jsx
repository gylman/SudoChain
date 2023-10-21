import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import BaseButton from '../components/BaseButton';
import Sudokus from '../components/Sudokus';
import Sudoku from '../components/Sudoku';
import VisualSquare from '../components/VisualSquare';

import styled from 'styled-components';
import Grid from '../components/Grid';

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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

const Cafel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 9px;
  width: 100%;
`;

const CafelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const Root = () => {
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
        <Cafel>
          <Grid />
          <CafelRow>
            <VisualSquare bg='#ffffff' op='0.3' />
            <VisualSquare bg='#ffffff' op='0.1' />
            <VisualSquare bg='#ffffff' op='0.05' />
            <VisualSquare bg='#ffffff' op='0.3' />
            <VisualSquare bg='#ffffff' op='0.3' />
          </CafelRow>
          <CafelRow>
            <VisualSquare bg='#ffffff' op='0.1' />
            <VisualSquare bg='#ffffff' op='0.05' />
            <VisualSquare bg='#ffffff' op='0.1' />
            <VisualSquare bg='#ffffff' op='0.05' />
          </CafelRow>
          <CafelRow>
            <VisualSquare bg='#ffffff' op='0.05' />
            <VisualSquare bg='#ffffff' op='0.05' />
          </CafelRow>
          <CafelRow></CafelRow>
          <CafelRow></CafelRow>
        </Cafel>
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
};

export default Root;
