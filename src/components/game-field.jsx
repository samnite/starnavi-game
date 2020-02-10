import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initField, changeCell } from '../store/actions/data-actions';
import useInterval from '../util/timeout';

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

const GameField = ({ currentSettings, field, changeCell }) => {
  const [isRunning, setIsRunning] = useState(false);
  const onClick = id => {
    changeCell(field, id, 2);
  };
  const startGame = () => {
    // const interval = setInterval(oneRound, currentSettings.delay);
  };

  const oneRound = () => {
    const result = [...field];
    const newResult = result.filter(el => el.status !== 2);
    const element = newResult[Math.floor(Math.random() * Math.floor(newResult.length))];
    onClick(element.id);
  };

  const startRound = () => {
    setIsRunning(true);
    // oneRound();
  };

  const stopRound = () => {
    setIsRunning(false);
  };

  useInterval(
    () => {
      console.log('work');
      oneRound();
    },
    isRunning ? 800 : null
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
                onClick={() => onClick(el.id)}
                style={{
                  background: el.status === 2 ? 'green' : el.status === 1 ? 'blue' : 'white'
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
  changeCell: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentSettings: state.data.currentSettings,
  field: state.data.field
});

export default connect(mapStateToProps, { initField, changeCell })(GameField);
