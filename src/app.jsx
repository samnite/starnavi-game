import React from 'react';
import Settings from './components/game-settings';
import GameField from './components/game-field';
import Message from './components/message';

const App = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Settings />
      <Message />
      <GameField />
    </div>
  );
};

export default App;
