import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMessage = styled.h2`
  color: #333;
  text-align: center;
  margin: 1rem;
`;

const Message = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  message: state.data.message
});

export default connect(mapStateToProps)(Message);
