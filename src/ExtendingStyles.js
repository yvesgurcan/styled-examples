import React, { Fragment } from 'react';
import styled from 'styled-components';

export const BaseButton = styled.button`
    outline: none;
    appearance: none;
    cursor: pointer;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    border-radius: 15px;
    font-size: 20px;

    &:hover {
        filter: brightness(0.85);
    }

    &:active {
        filter: brightness(1.05);
    }
`;

// Once you have defined a styled component, you can use it as a base for other styled components by passing it as an argument to "styled".
export const PrimaryButton = styled(BaseButton)`
    border-color: #0371b1;
    background: #07a1d1;
`;

export const SecondaryButton = styled(BaseButton)`
    border-color: #bcc9cc;
    background: #efefef;
`;

const CONTENT = {
    en: {
        base: 'Base Button',
        primary: 'Primary Button',
        secondary: 'Secondary Button'
    },
    fr: {
        base: 'Bouton de base',
        primary: 'Bouton primaire',
        secondary: 'Bouton secondaire'
    }
};

export default ({ language = 'en' }) => (
    <Fragment>
        <BaseButton>{CONTENT[language].base}</BaseButton>
        <PrimaryButton>{CONTENT[language].primary}</PrimaryButton>
        <SecondaryButton>{CONTENT[language].secondary}</SecondaryButton>
    </Fragment>
);
