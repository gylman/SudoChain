import React, { useState } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

// Request user's permission

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
const ready = [
  ['', '', '', 2, 6, '', 7, '', 1],
  [6, 8, '', '', 7, '', '', 9, ''],
  [1, 9, '', '', '', 4, 5, '', ''],
  [8, 2, '', 1, '', '', '', 4, ''],
  ['', '', 4, 6, '', 2, 9, '', ''],
  ['', 5, '', '', '', 3, '', 2, 8],
  ['', '', 9, 3, '', '', '', 7, 4],
  ['', 4, '', '', 5, '', '', 3, 6],
  [7, '', 3, '', 1, 8, '', '', ''],
];

// const ready2 = [
//   [1, 1, 1, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];

function Game() {
  const [board, setBoard] = useState(ready); // Initialize an empty board

  const handleInputChange = (index, index2, value) => {
    const newBoard = [...board];
    newBoard[index][index2] = Number(value);
    setBoard(newBoard);
  };

  const handleSubmit = async () => {
    // Handle Sudoku board submission logic here

    const provider = new Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contractAddress = '0x0a22F19BF63934775CE67D5839EFdE0867De2Af5';
    const contractABI = [
      {
        inputs: [
          {
            components: [
              { internalType: 'uint8', name: 'location', type: 'uint8' },
              { internalType: 'uint8', name: 'value', type: 'uint8' },
            ],
            internalType: 'struct SudoChain.initPoint[]',
            name: '_layout',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'participant',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'when',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'isRight',
            type: 'bool',
          },
        ],
        name: 'SolutionSubmitted',
        type: 'event',
      },
      {
        inputs: [],
        name: 'gameEnd',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'uint8[]', name: 'array', type: 'uint8[]' },
        ],
        name: 'hasValue',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'initLayout',
        outputs: [
          { internalType: 'uint8', name: 'location', type: 'uint8' },
          { internalType: 'uint8', name: 'value', type: 'uint8' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'participants',
        outputs: [
          { internalType: 'address', name: 'participant', type: 'address' },
          { internalType: 'uint256', name: 'submissionTime', type: 'uint256' },
          { internalType: 'bool', name: 'success', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint8[][]', name: 'solution', type: 'uint8[][]' },
        ],
        name: 'submitSolution',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ]; // Your contract's ABI here

    // Calling a function that does not change blockchain state and returns a value

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // or whatever value you want to send
    const tx = await contract.submitSolution(board);
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
