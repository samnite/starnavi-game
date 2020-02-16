import React from 'react';
import styled from 'styled-components';

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

const LeaderItem = ({ item }) => {
  return (
    <StyledItem>
      <p>{item.winner}</p> <p>{item.date}</p>
    </StyledItem>
  );
};

export default LeaderItem;
