import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';
import { Link, NavLink } from 'react-router-dom';
import Game from './Game';

const TopMostContainer = styled.div`
  padding: 25px 32px 32px 32px;
  border-top: 6px solid
    ${(props) => (props.status === 'done' && '#62bcfa') || '#f49f85'};
  border-radius: 5px;
  max-width: 350px;
  background-color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Title = styled.p`
  color: #3a4374;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  margin-top: 8px;
`;

const Status = styled.p`
  color: #647196;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: ${(props) => (props.status === 'done' && '#62bcfa') || '#f49f85'};
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 77px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f4ff;
  color: #4661e6;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Num = styled.span`
  color: #3a4374;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`;

const StartButton = styled(BaseButton)``;

const Card = ({ id, deadline, status, numPlayers, difficuly }) => {
  const [time, setTime] = useState(Date.now());

  return (
    <TopMostContainer status={status}>
      <Container>
        <Dot status={status} />
        <Status>{(status === 'done' && 'Completed') || 'Available'}</Status>
      </Container>
      {status === 'done' && <Title>Results in: {`${deadline - time}`}</Title>}
      {status !== 'done' && <Title>Deadline: {`${deadline}`}</Title>}
      <Tag>{difficuly}</Tag>
      <Container>
        <Link to={id}>
          <StartButton>Start</StartButton>
        </Link>
        <Container>
          <Num>Participants: {numPlayers}</Num>
        </Container>
      </Container>
    </TopMostContainer>
  );
};

export default Card;
