import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initField, changeCell } from '../store/actions/data-actions';
import { setUserScores, setComputerScores } from '../store/actions/scores-actions';
import useInterval from '../util/set-interval';

const StyledField = styled.div`
  width: 350px;
  height: 350px;
  display: grid;
  div {
    border: 1px solid #999;
    text-align: center;
    cursor: pointer;
  }
`;

const GameField = ({
  currentSettings,
  curElement,
  field,
  changeCell,
  userScores,
  setUserScores,
  setComputerScores
}) => {
  const [isRunning, setIsRunning] = useState(false);

  const onClick = (id, status) => {
    if (status === 1) {
      changeCell(id, 2);
      setUserScores();
      if (userScores >= field.length / 2 - 1) {
        setIsRunning(false);
        console.log('win');
      }
      console.log(userScores);
    }
  };

  const oneRound = () => {
    const result = [...field];
    const newResult = result.filter(el => el.status === 0);
    const element = newResult[Math.floor(Math.random() * Math.floor(newResult.length))];
    if (newResult.length !== 0) {
      changeCell(element.id, 1);
    }
  };

  const startRound = () => {
    setIsRunning(true);
  };

  const stopRound = () => {
    setIsRunning(false);
  };

  useInterval(
    () => {
      if (curElement !== null && curElement.status === 1) {
        changeCell(curElement.id, 3);
        setComputerScores();
      }
      oneRound();
    },
    isRunning ? 1000 : null
  );

  return (
    <>
      <button type="submit" onClick={startRound}>
        Start
      </button>
      <button type="submit" onClick={stopRound}>
        Stop
      </button>
      <StyledField style={{ gridTemplateColumns: `repeat(${Math.sqrt(field.length)}, 1fr)` }}>
        {field &&
          field.map((el, idx) => {
            return (
              <div
                key={el.id}
                onClick={() => onClick(el.id, el.status)}
                style={{
                  background:
                    el.status === 2
                      ? 'green'
                      : el.status === 1
                      ? 'blue'
                      : el.status === 3
                      ? 'red'
                      : 'white'
                }}
              />
            );
          })}
      </StyledField>
    </>
  );
};

GameField.propTypes = {
  currentSettings: PropTypes.object.isRequired,
  field: PropTypes.array.isRequired,
  changeCell: PropTypes.func.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  isPlayerTurn: PropTypes.bool.isRequired,
  isComputerTurn: PropTypes.bool.isRequired,
  curElement: PropTypes.object,
  userScores: PropTypes.number.isRequired,
  setUserScores: PropTypes.func.isRequired,
  setComputerScores: PropTypes.func.isRequired
};

GameField.defaultProps = {
  curElement: null
};

const mapStateToProps = state => ({
  currentSettings: state.data.currentSettings,
  field: state.data.field,
  isGameStarted: state.data.isGameStarted,
  isPlayerTurn: state.data.isPlayerTurn,
  isComputerTurn: state.data.isComputerTurn,
  curElement: state.data.curElement,
  userScores: state.scores.userScores
});

export default connect(mapStateToProps, {
  initField,
  changeCell,
  setUserScores,
  setComputerScores
})(GameField);
