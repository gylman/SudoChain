// DeadlineCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #e6e6e6;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(33.333% - 10px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

function DeadlineCard({ deadline }) {
  return (
    <Card>
      {deadline.toLocaleDateString()} {deadline.toLocaleTimeString()}
    </Card>
  );
}

export default DeadlineCard;
