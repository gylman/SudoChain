import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  transform: translate(100%, 30%);
`;
const Board81 = styled.div`
  display: grid;
  width: auto;
  border-radius: 8px;
  border: 2px solid #d7e1f4;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
  grid-template-columns: repeat(9, 186px);
  gap: 2px;
  background: #d7e1f4;
`;

const Board9 = styled.div`
  display: grid;
  width: auto;
  border-radius: 8px;
  border: 2px solid #d7e1f4;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
  grid-template-columns: repeat(9, 62px);
  gap: 2px;
  background: #d7e1f4;
`;

const Cell = styled.input`
  width: 62px;
  height: 62px;
  text-align: center;
  font-size: 14px;
  border: none;
  &:focus {
    outline-color: blue;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
`;
const game = Array(81).fill(Math.ceil(Math.random() * 9));
const ready = [
  game.slice(0, 8),
  game.slice(9, 17),
  game.slice(18, 26),
  game.slice(27, 35),
  game.slice(36, 44),
  game.slice(45, 53),
  game.slice(54, 62),
  game.slice(63, 71),
  game.slice(72, 80),
];

function Game() {
  const [board, setBoard] = useState(ready); // Initialize an empty board

  const handleInputChange = (index, value) => {
    const newBoard = [...board];
    newBoard[index] = value;
    setBoard(newBoard);
  };

  const handleSubmit = () => {
    // Handle Sudoku board submission logic here
    console.log(board);
  };

  return (
    <Wrapper>
      <Board81>
        {board.map((big, index) => {
          return (
            <Board9 key={index}>
              {value.map((small, index) => (
                <Cell
                  key={index}
                  value={small}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  maxLength={1}
                  pattern='[1-9]'
                />
              ))}
            </Board9>
          );
        })}
      </Board81>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Wrapper>
  );
}

export default Game;
