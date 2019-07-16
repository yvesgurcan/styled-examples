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
    {/* Since the component only lives on this page, the global styles are only applied when this component renders */}
    <UnscopedStyledComponent />
    <p>
      This page uses createGlobalStyle to set styles on the body of the document
      and change the background and text color.
    </p>
  </Fragment>
);
