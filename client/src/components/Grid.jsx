import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const StyledItem = styled.div`
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

function Grid() {
  const [numItems, setNumItems] = useState(getItemsForWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setNumItems(getItemsForWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = Array.from({ length: numItems - 1 }, (_, i) => `Item ${i + 1}`);

  return (
    <StyledGrid>
      {items.map((item, index) => (
        <StyledItem key={index}>{item}</StyledItem>
      ))}
    </StyledGrid>
  );
}

function getItemsForWidth(width) {
  const minWidth = 32; // Min width for each item
  return Math.floor(width / minWidth);
}

export default Grid;
