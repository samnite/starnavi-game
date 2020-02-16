import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import { setPlayerName } from '../store/actions/scores-actions';

const NameField = ({ isGameStarted, setPlayerName }) => {
  const onChange = event => {
    setPlayerName(event.target.value);
  };
  return (
    <>
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Enter your name"
        style={{ width: '150px' }}
        disabled={isGameStarted}
        onChange={onChange}
      />
    </>
  );
};

// TODO: ADD init settings to enable button

NameField.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
  setPlayerName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isGameStarted: state.data.isGameStarted
});

export default connect(mapStateToProps, { setPlayerName })(NameField);
