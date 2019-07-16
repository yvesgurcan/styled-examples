import React, { Fragment } from 'react';
import styled from 'styled-components';

// Set default attributes to your components.
export const TextInput = styled.input.attrs({ type: 'text' })``;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })``;
export const Radio = styled.input.attrs({ type: 'radio' })``;
export const FileInput = styled.input.attrs({ type: 'file' })``;

export default () => (
  <Fragment>
    <p>You can set default attributes to your styled components.</p>
    <TextInput />
    <Checkbox />
    <Radio />
    <FileInput />
  </Fragment>
);
