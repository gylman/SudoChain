import React from 'react';
import { styled } from 'styled-components';
import BaseButton from '../components/BaseButton';
import { Link } from 'react-router-dom';
const AbsoluteWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
  background: #4661e6;
  border-radius: 10px;
  border: 10px solid #4341e6;
`;

const Title = styled.span`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 52px;
`;

const Instruction = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 31px;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;
const MintButton = styled(BaseButton)``;
const BackButton = styled(BaseButton)``;
const result = 1;

const handleMint = () => {
  console.log('MINTAZAVR');
};

const MintNft = () => (
  <AbsoluteWrapper>
    <Container>
      {(result === 1 && (
        <>
          <Title>You are the winner! Congrats!</Title>
          <Instruction>
            Now you can mint <strong> NFT of that unique challenge </strong>
            by clicking the button below!
          </Instruction>
        </>
      )) || (
        <>
          <Title>You are the loser! Cry!</Title>
          <Instruction>
            You can go back and try, <strong> maybe </strong>
            you will succeed next time
          </Instruction>
        </>
      )}
      {(result === 1 && (
        <ButtonRow>
          <MintButton onClick={handleMint}>Mint</MintButton>
          <Link to='/sudokus'>
            <BackButton>Go back</BackButton>
          </Link>
        </ButtonRow>
      )) || (
        <ButtonRow>
          <Link to='/sudokus'>
            <BackButton>Go back</BackButton>
          </Link>
        </ButtonRow>
      )}
    </Container>
  </AbsoluteWrapper>
);

export default MintNft;
