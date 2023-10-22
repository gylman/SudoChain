// ConnectButton.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 24px;
  border: 2px solid #307df6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 32px;
  color: #307df6;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  background: #ffffff;
  &:hover {
    cursor: pointer;
    background: #307df6;
    color: #ffffff;
  }
`;

function BaseButton({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default BaseButton;
