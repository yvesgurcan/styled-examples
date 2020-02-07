import React, { Fragment } from 'react';

// By convention, the styled-components library is imported as "styled".
import styled from 'styled-components';

// You can define your styled components above or under your regular component.
export const Card = styled.div`
    // It looks just like CSS!!!
    border: 1px solid grey;
    padding: 20px;
    margin: 20px;
    background: lightgrey;
`;

const CONTENT = {
    en: <p>I use the styled-components library!</p>,
    fr: (
        <p>
            J'utilise <i>styled-components</i>&nbsp;!
        </p>
    )
};

export default ({ language = 'en' }) => (
    <Fragment>
        {/* Drop your styled component anywhere in your regular component. */}
        <Card>{CONTENT[language]}</Card>
    </Fragment>
);
