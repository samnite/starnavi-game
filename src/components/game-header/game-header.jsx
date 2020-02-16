import React from 'react';
import styled from 'styled-components';
import GameSettings from './game-settings';
import NameField from './name-field';
import StartGameButton from './start-game-button';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //@media (max-width: 768px) {
  //  flex-direction: column;
  //}
`;

const GameHeader = () => {
  return (
    <StyledHeader>
      <GameSettings />
      <NameField />
      <StartGameButton />
    </StyledHeader>
  );
};

export default GameHeader;
