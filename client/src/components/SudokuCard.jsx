import React from 'react';
import styled from 'styled-components';
import StartButton from './StartButton';

const Card = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border: 1px solid #333;
  background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 11px,
      #333 11px,
      #333 12px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 11px,
      #333 11px,
      #333 12px
    );
`;

const PlayButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(76, 175, 80, 0.7); // semi-transparent green
  border: none;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(45, 145, 70, 0.8);
  }
`;

const SudokuCard = () => {
  return (
    <Card>
      <StartButton>Play</StartButton>
    </Card>
  );
};

export default SudokuCard;
