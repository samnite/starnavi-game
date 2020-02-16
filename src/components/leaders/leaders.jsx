import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLeaders, sendResult } from '../../store/actions/scores-actions';
import LeaderItem from './leader-item';
import Spinner from '../util/spinner';

const StyledLeaders = styled.ul`
  list-style: none;
  margin: 4px;
  padding-left: 0;
  h2 {
    color: #333;
    text-align: center;
  }
`;
const StyledHeader = styled.h2`
  text-align: center;
`;

const Leaders = ({ leaders, winner, getLeaders, sendResult }) => {
  useEffect(() => {
    getLeaders();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (winner !== null) {
      sendResult();
    }
    // eslint-disable-next-line
  }, [winner]);

  return (
    <>
      <StyledHeader>Leader Board</StyledHeader>
      <StyledLeaders>
        {leaders.length === 0 ? (
          <Spinner />
        ) : (
          leaders.map((leader, idx) => {
            // View no more than 10 leaders
            if (idx < 10) {
              return <LeaderItem item={leader} key={leader.id} />;
            }
            return null;
          })
        )}
      </StyledLeaders>
    </>
  );
};

Leaders.propTypes = {
  getLeaders: PropTypes.func.isRequired,
  leaders: PropTypes.array.isRequired,
  winner: PropTypes.object,
  sendResult: PropTypes.func.isRequired
};

Leaders.defaultProps = {
  winner: null
};

const mapStateToProps = state => ({
  leaders: state.scores.leaders,
  winner: state.scores.winner
});

export default connect(mapStateToProps, { getLeaders, sendResult })(Leaders);
