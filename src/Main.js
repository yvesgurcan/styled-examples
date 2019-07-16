import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  min-height: calc(100vh - 230px);
`;

const Title = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 40px;
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
