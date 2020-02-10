import React from 'react';
import Settings from './components/game-settings';
import GameField from './components/game-field';

const App = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Settings />
      <GameField />
    </div>
  );
};

export default App;
