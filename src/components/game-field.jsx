import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initField, changeCell } from '../store/actions/data-actions';

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
  const onClick = id => {
    changeCell(field, id, 2);
  };

  return (
    <StyledField style={{ gridTemplateColumns: `repeat(${Math.sqrt(field.length)}, 1fr)` }}>
      {field &&
        field.map((el, idx) => {
          return (
            <div
              key={el.id}
              onClick={() => onClick(el.id)}
              style={{ background: el.status === 2 ? 'green' : 'white' }}
            />
          );
        })}
    </StyledField>
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
