import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setStartGame } from '../store/actions/data-actions';

const StartGameButton = ({ isGameStarted, field, setStartGame }) => {
  const startGame = () => {
    setStartGame(true);
  };
  return (
    <>
      <Button
        type="primary"
        icon="play-circle"
        disabled={!(field.length !== 0)}
        onClick={startGame}
      >
        Play
      </Button>
    </>
  );
};

StartGameButton.propTypes = {
  setStartGame: PropTypes.func.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  field: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isGameStarted: state.data.isGameStarted,
  field: state.data.field
});

export default connect(mapStateToProps, { setStartGame })(StartGameButton);
