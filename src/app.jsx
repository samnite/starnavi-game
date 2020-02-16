import React from 'react';
import styled from 'styled-components';
import GameField from './components/game-field/game-field';
import Message from './components/message';
import GameHeader from './components/game-header/game-header';
import Leaders from './components/leaders/leaders';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledArea = styled.div`
  margin: 1rem 0;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
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
        <Leaders />
      </StyledArea>
    </StyledContainer>
  );
};

export default App;
