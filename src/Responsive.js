import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
    padding: 20px;
    background: rgb(230, 230, 230);
    border: 1px solid black;
    font-size: 18px;

    width: 100%;

    // You can define your component-specific breakpoints right here
    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1024px) {
        width: 45%;
    }

    @media (min-width: 1200px) {
        width: 25%;
    }
`;

const CONTENT = {
    en: {
        breakingpoints: (
            <p>
                This input component has breaking points. Its width will change
                at 768px, 1024px, and 1200px.
            </p>
        ),
        value: 'Some value'
    },
    fr: {
        breakingpoints: (
            <p>
                Ce composant a plusieurs <i>breaking points</i>. Sa taille
                change lorsque l'écran atteint 768px, 1024px, et 1200px.
            </p>
        ),
        value: 'Quelque chose'
    }
};

export default ({ language = 'en' }) => (
    <div>
        {CONTENT[language].breakingpoints}
        <Input value={CONTENT[language].value} />
    </div>
);
