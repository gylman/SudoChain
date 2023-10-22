// CardList.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import cuid from 'cuid';

const ScrollableContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 10px;
  overflow-y: auto;
  padding: 200px 0;
`;

function Sudokus() {
  const mockData = Array(9)
    .fill()
    .map((_, idx) => {
      return {
        id: cuid(),
        difficulty: 'Easy',
        status: 'done',
        numPlayers: Math.floor(Math.random() * 10),
        deadline: new Date(Date.now() + idx * 24 * 60 * 60 * 1000),
      };
    }); // 30 mock deadlines

  return (
    <ScrollableContainer>
      {mockData.map((sudoku, index) => (
        <Card
          id={sudoku.id}
          key={index}
          deadline={sudoku.deadline}
          status={sudoku.status}
          numPlayers={sudoku.numPlayers}
          difficuly={sudoku.difficulty}
        />
      ))}
    </ScrollableContainer>
  );
}

export default Sudokus;
