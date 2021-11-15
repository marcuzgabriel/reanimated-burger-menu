import React from 'react';
import styled from 'styled-components/native';
import BurgerMenu from './examples/BurgerMenu';
import 'setimmediate';

if (!global.setImmediate) {
  global.setImmediate = setTimeout as any;
}

const RowWrapper = styled.View`
  flex-direction: row;
`;

const App: React.FC = () => (
  <RowWrapper>
    <BurgerMenu type="elasticRotation" />
    <BurgerMenu type="slider" />
  </RowWrapper>
);

export default App;
