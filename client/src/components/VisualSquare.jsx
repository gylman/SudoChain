import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  border-radius: 4px;
  background: #fff;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: ${(props) => props.bg || 'transparent'};
  opacity: ${(props) => props.op};
`;

const VisualSquare = (props) => {
  return <StyledSquare bg={props.bg} op={props.op} />;
};

export default VisualSquare;
