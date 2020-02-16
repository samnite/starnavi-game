import React from 'react';
import styled from 'styled-components';
import GameField from './components/game-field/game-field';
import Message from './components/message';
import GameHeader from './components/game-header/game-header';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledArea = styled.div`
  margin: 3rem;
`;

const App = () => {
  return (
    <StyledContainer>
      <StyledArea>
        <GameHeader />
        <Message />
        <GameField />
      </StyledArea>
      <StyledArea>
        <h1>High scores</h1>
      </StyledArea>
    </StyledContainer>
  );
};

export default App;
