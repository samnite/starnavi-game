import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Winner } from '../../store/reducers/scores-reducer';

const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: lightgrey;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  vertical-align: middle;
  p {
    margin: 5px 10px;
  }
`;

type OwnProps = {
  item: Winner;
};

const LeaderItem: FunctionComponent<OwnProps> = ({ item }) => {
  return (
    <StyledItem>
      <p>{item.winner}</p> <p>{item.date}</p>
    </StyledItem>
  );
};

export default LeaderItem;
