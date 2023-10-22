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
  const mockData = [
    {
      id: cuid(),
      difficulty: 'Easy',
      status: 'done',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Hard',
      status: 'todo',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Easy',
      status: 'not_started',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Hard',
      status: 'done',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Hard',
      status: 'not_started',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Medium',
      status: 'done',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Medium',
      status: 'done',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
    {
      id: cuid(),
      difficulty: 'Hard',
      status: 'not_started',
      numPlayers: Math.floor(Math.random() * 10),
      deadline: new Date(Date.now()),
    },
  ]; // 30 mock deadlines

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
