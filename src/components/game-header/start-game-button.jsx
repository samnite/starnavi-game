import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setStartGame, reStartGame } from '../../store/actions/data-actions';

const StartGameButton = ({
  isGameStarted,
  winner,
  field,
  playerName,
  setStartGame,
  reStartGame
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (field.length !== 0 && playerName !== '') {
      setIsActive(true);
    }
  }, [playerName]);

  const startGame = () => {
    setStartGame(true);
    setIsActive(false);
  };

  const onReStartGame = () => {
    reStartGame();
  };

  return (
    <>
      {winner === null ? (
        <Button type="primary" icon="play-circle" disabled={!isActive} onClick={startGame}>
          Play
        </Button>
      ) : (
        <Button type="primary" icon="sync" onClick={onReStartGame}>
          Play Again
        </Button>
      )}
    </>
  );
};

StartGameButton.propTypes = {
  setStartGame: PropTypes.func.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  field: PropTypes.array.isRequired,
  playerName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isGameStarted: state.data.isGameStarted,
  field: state.data.field,
  playerName: state.scores.playerName,
  winner: state.scores.winner
});

export default connect(mapStateToProps, { setStartGame, reStartGame })(StartGameButton);
