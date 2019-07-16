import React, { Fragment } from 'react';
import styled from 'styled-components';

// These are the most minimal styled components you can define. In fact, they don't have any particular styles in this case, but they are React components.
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const A = styled.a``;
export const P = styled.p``;
export const Img = styled.img``;
export const Div = styled.div``;
export const Input = styled.input``;

export default () => (
    <Fragment>
        <H1>This styled component uses a h1 tag as a base.</H1>
        <H2>All HTML tags can be used as a base for your styled component.</H2>
        <A
            title="As you can see, this is a link."
            href="/this-link-goes-somewhere"
        >
            Props are still passed to the HTML tag like it would without the
            styled component.
        </A>
        <P>
            This is a good old paragraph wrapped into a styled component as
            well.
        </P>
        <Img alt="It works with images too!" src="./assets/favicon.ico" />
        <Div />
        <Input placeholder="Hi! I'm an input component." />
    </Fragment>
);
