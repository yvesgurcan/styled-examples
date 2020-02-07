import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

export const UnscopedStyledComponent = createGlobalStyle`
  body {
    background: black;
    color: white;
  }
`;

const CONTENT = {
    en: (
        <p>
            This page uses createGlobalStyle to set styles on the body of the
            document and change the background and text color.
        </p>
    ),
    fr: (
        <p>
            Cette page utilise createGlobalStyle pour définir les styles de ce
            document et change la couleur de fond et du texte.
        </p>
    )
};

export default ({ language = 'en' }) => (
    <Fragment>
        {/* Since the component only lives on this page, the global styles are only applied when this component renders */}
        <UnscopedStyledComponent />
        {CONTENT[language]}
    </Fragment>
);
