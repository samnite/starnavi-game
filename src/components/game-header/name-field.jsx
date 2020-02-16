import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import styled from 'styled-components';
import { setPlayerName } from '../../store/actions/scores-actions';

const StyledInput = styled(Input)`
  margin: 0 0.5rem;
  width: 150px;
  @media (max-width: 768px) {
    width: 100px;
    margin: 0 2px;
  }
`;

const NameField = ({ isGameStarted, setPlayerName }) => {
  const onChange = event => {
    setPlayerName(event.target.value);
  };
  return (
    <>
      <StyledInput
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your name"
        disabled={isGameStarted}
        onChange={onChange}
      />
    </>
  );
};

NameField.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
  setPlayerName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isGameStarted: state.data.isGameStarted
});

export default connect(mapStateToProps, { setPlayerName })(NameField);
