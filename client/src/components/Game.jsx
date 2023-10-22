import React, { useState } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const Wrapper = styled.div`
  position: absolute;
  transform: translate(100%, 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerContainer = styled.div`
  background: #ffffff;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
`;
const Timer = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #304ff6;
  padding: 20px 10px;
`;

const Board81 = styled.div`
  display: grid;
  border-radius: 8px;
  border: 1px solid #d7e1f4;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
  grid-template-columns: repeat(3, 186px);
  background: #d7e1f4;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const Board9 = styled.div`
  display: grid;
  width: auto;
  border-radius: 8px;
  grid-template-columns: repeat(3, 62px);
  background: #d7e1f4;
  justify-content: center;
  align-items: center;
`;

const Cell = styled.input`
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 24px;
  border: none;
  color: #307df6;
  &:focus {
    outline-color: blue;
  }
`;

const SubmitButton = styled(BaseButton)`
  margin-top: 20px;
  padding: 10px 15px;
`;
const game = Array(81).fill(1);
const ready = [
  game.slice(0, 9),
  game.slice(9, 18),
  game.slice(18, 27),
  game.slice(27, 36),
  game.slice(36, 45),
  game.slice(45, 54),
  game.slice(54, 63),
  game.slice(63, 72),
  game.slice(72, 81),
];

function Game() {
  const [board, setBoard] = useState(ready); // Initialize an empty board

  const handleInputChange = (index, index2, value) => {
    const newBoard = [...board];
    newBoard[index][index2] = value;
    setBoard(newBoard);
  };

  const handleSubmit = () => {
    // Handle Sudoku board submission logic here
    console.log(board);
  };

  return (
    <Wrapper>
      <TimerContainer>
        <Timer>18:30:11</Timer>
      </TimerContainer>
      <Board81>
        {board.map((big, index, arr) => {
          console.log('this2', arr);
          return (
            <Board9 key={index}>
              {big.map((small, index2, arr) => {
                console.log('this', arr);
                return (
                  <Cell
                    key={index2}
                    value={small}
                    onChange={(e) =>
                      handleInputChange(index, index2, e.target.value)
                    }
                    maxLength={1}
                    pattern='[1-9]'
                  />
                );
              })}
            </Board9>
          );
        })}
      </Board81>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Wrapper>
  );
}

export default Game;
