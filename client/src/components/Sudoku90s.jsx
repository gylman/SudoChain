import React, { useState } from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
`;

const Cell = styled.input`
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  &:focus {
    outline-color: blue;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
`;

function Sudoku90s() {
  const [board, setBoard] = useState(Array(81).fill('')); // Initialize an empty board

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
    <div>
      <Board>
        {board.map((value, index) => (
          <Cell
            key={index}
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            maxLength={1}
            pattern='[1-9]'
          />
        ))}
      </Board>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </div>
  );
}

export default Sudoku90s;
