import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLeaders, sendResult } from '../../store/actions/scores-actions';
import LeaderItem from './leader-item';
import Spinner from '../util/spinner';
import { Winner } from '../../store/reducers/scores-reducer';

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

type OwnProps = {
  leaders: Winner[];
  winner: Winner;
  getLeaders: () => void;
  sendResult: () => void;
};

const Leaders: FunctionComponent<OwnProps> = ({ leaders, winner, getLeaders, sendResult }) => {
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

interface Scores {
  scores: {
    winner: Winner;
    leaders: Winner[];
  };
}

const mapStateToProps = ({ scores: { leaders, winner } }: Scores) => ({
  leaders,
  winner
});

export default connect(mapStateToProps, { getLeaders, sendResult })(Leaders);
