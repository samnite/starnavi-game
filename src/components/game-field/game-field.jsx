import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initField, changeCell, setStartGame } from '../../store/actions/data-actions';
import { setUserScores, setComputerScores } from '../../store/actions/scores-actions';
import useInterval from '../util/set-interval';

const StyledField = styled.div`
  width: 350px;
  height: 350px;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  div {
    border: 1px solid #999;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const GameField = ({
  currentSettings,
  isGameStarted,
  curElement,
  field,
  changeCell,
  setUserScores,
  setComputerScores
}) => {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  // User's turn
  const onClick = (id, status) => {
    if (status === 1 && isPlayerTurn) {
      changeCell(id, 2);
      setUserScores();
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

  useInterval(
    () => {
      if (curElement !== null && curElement.status === 1) {
        changeCell(curElement.id, 3);
        // Simulation 30% chance of computer miss click
        setIsPlayerTurn(Math.random() < 0.3);
        setComputerScores();
      }
      oneRound();
    },
    isGameStarted ? currentSettings.delay : null
  );

  return (
    <>
      <StyledField style={{ gridTemplateColumns: `repeat(${Math.sqrt(field.length)}, 1fr)` }}>
        {field &&
          field.map(el => {
            return (
              <div
                key={el.id}
                onClick={() => onClick(el.id, el.status)}
                style={{
                  background:
                    el.status === 2
                      ? '#66ff66'
                      : el.status === 1
                      ? '#0066ff'
                      : el.status === 3
                      ? '#ff5050'
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
  isGameStarted: PropTypes.bool,
  curElement: PropTypes.object,
  setUserScores: PropTypes.func.isRequired,
  setComputerScores: PropTypes.func.isRequired
};

GameField.defaultProps = {
  curElement: null,
  isGameStarted: false
};

const mapStateToProps = state => ({
  currentSettings: state.data.currentSettings,
  field: state.data.field,
  isGameStarted: state.data.isGameStarted,
  curElement: state.data.curElement
});

export default connect(mapStateToProps, {
  initField,
  changeCell,
  setUserScores,
  setComputerScores,
  setStartGame
})(GameField);
