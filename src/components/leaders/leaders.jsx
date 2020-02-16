import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLeaders } from '../../store/actions/scores-actions';
import LeaderItem from './leader-item';

const StyledLeaders = styled.ul`
  list-style: none;
  margin: 4px;
  padding-left: 0;
  h2 {
    color: #333;
    text-align: center;
  }
`;

const Leaders = ({ leaders, getLeaders }) => {
  useEffect(() => {
    getLeaders();
    console.log(leaders);
  }, []);

  return (
    <StyledLeaders>
      <h2>Leader Board</h2>
      {leaders.length === 0 ? (
        <p>loading...</p>
      ) : (
        leaders.map(leader => {
          return <LeaderItem item={leader} key={leader.id} />;
        })
      )}
    </StyledLeaders>
  );
};

Leaders.propTypes = {
  getLeaders: PropTypes.func.isRequired,
  leaders: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  leaders: state.scores.leaders
});

export default connect(mapStateToProps, { getLeaders })(Leaders);
