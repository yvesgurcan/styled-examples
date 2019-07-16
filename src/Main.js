import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  min-height: calc(100vh - 300px);
`;

const Title = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 15px;
  padding-top: 15px;
  margin-bottom: 50px;
  padding: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export default props => {
  return (
    <Root>
      <Title>Styled Components</Title>
      {props.children}
    </Root>
  );
};
