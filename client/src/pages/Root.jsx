import { Link, Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import BaseButton from '../components/BaseButton';
import Sudokus from '../components/Sudokus';
import Sudoku from '../components/Game';
import VisualSquare from '../components/VisualSquare';

import styled from 'styled-components';
import Grid from '../components/Grid';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: #f4f6ff;
  position: relative;
`;

const UpperBack = styled.div`
  height: 40.8%;
  background: #307df6;
  width: 100%;
`;

const OutletWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const Root = () => {
  return (
    <Container>
      <UpperBack />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
};

export default Root;
