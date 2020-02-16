import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Message = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.data.message
});

export default connect(mapStateToProps)(Message);
