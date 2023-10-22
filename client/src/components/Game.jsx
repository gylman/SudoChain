import React, { useState } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopBar = styled.div`
  background: #ffffff;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
  padding: 3px 20px;
`;
const Timer = styled.p`
  display: flex;
  width: auto;
  font-size: 28px;
  font-weight: bold;
  color: #304ff6;
  padding: 20px 10px;
`;
const Title = styled.span`
  color: #4661e6;
  font-weight: 700;
  font-size: 36px;
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
const Board81 = styled.div`
  display: grid;
  border-radius: 8px;
  border: 1px solid #d7e1f4;
  box-shadow: 0px 8px 16px 0px rgba(5, 74, 183, 0.2);
  grid-template-columns: repeat(3, 1fr);
  background: #d7e1f4;
  margin-bottom: 20px;
  gap: 6px;
`;

const Board9 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const Cell = styled.input`
  width: 62px; /* Use 100% to make it responsive within the grid */
  height: 62px; /* Let it adjust based on the width for a square appearance */
  text-align: center;
  font-size: 24px;
  border: none;
  padding: 20% 0; /* This helps maintain a square aspect ratio */
  color: #307df6;
  box-sizing: border-box; /* To ensure padding doesn't expand it */
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
      <TopBar>
        <Title>SudoChain</Title>
        <Timer>18:30:11</Timer>
        <Tag>Easy</Tag>
      </TopBar>
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
      <Link to='/sudokus'>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Link>
    </Wrapper>
  );
}

export default Game;
