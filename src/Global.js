import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

export const UnscopedStyledComponent = createGlobalStyle`
  body {
    background: black;
    color: white;
  }
`;

export default () => (
  <Fragment>
    <UnscopedStyledComponent />
    <p>
      This page uses createGlobalStyle to set styles on the body of the document
      and change the background and text color.
    </p>
  </Fragment>
);
