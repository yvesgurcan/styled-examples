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
    font-size: 14px;
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

export default () => (
    <Fragment>
        <BaseButton>Base Button</BaseButton>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
    </Fragment>
);
