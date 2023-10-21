// CardList.js
import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import DeadlineCard from './DeadlineCard';

const ScrollableContainer = styled(Element)`
  width: 100%;
  height: 500px; // Adjust based on your needs
  overflow-y: auto;
`;

function Sudokus() {
  const mockData = Array(30)
    .fill()
    .map((_, idx) => new Date(Date.now() + idx * 24 * 60 * 60 * 1000)); // 30 mock deadlines

  return (
    <ScrollableContainer>
      {mockData.map((deadline, index) => (
        <DeadlineCard key={index} deadline={deadline} />
      ))}
    </ScrollableContainer>
  );
}

export default Sudokus;
