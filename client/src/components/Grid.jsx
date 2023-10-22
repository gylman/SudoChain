import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(32px, 1fr));
  gap: 5px;
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
  return <StyledItem bg={props.bg} op={props.op} />;
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

  const items = Array.from({ length: numItems });

  return (
    <StyledGrid>
      {/* {items.map((item, index) => (
        <VisualSquare key={index} bg='#ffffff' op={Math.random()} />
      ))}
      {items.map((item, index) => (
        <VisualSquare key={index} bg='#ffffff' op={Math.random()} />
      ))}
      {items.map((item, index) => (
        <VisualSquare key={index} bg='#ffffff' op={Math.random()} />
      ))} */}
    </StyledGrid>
  );
}

function getItemsForWidth(width) {
  const minWidth = 32; // Min width for each item
  return Math.floor(width / minWidth);
}

export default Grid;
