import React, { Fragment } from 'react';
import styled from 'styled-components';

// These are the most minimal styled components you can define. In fact, they don't have any particular styles in this case, but they are React components.
export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const A = styled.a``;
export const P = styled.p``;
export const Div = styled.div``;
export const Input = styled.input``;

const CONTENT = {
    en: {
        h1: <H1>This styled component uses a h1 tag as a base.</H1>,
        h2: (
            <H2>
                All HTML tags can be used as a base for your styled component.
            </H2>
        ),
        a: (
            <A
                title="As you can see, this is a link."
                href="https://www.google.com"
            >
                Props are still passed to the HTML tag like it would without the
                styled component.
            </A>
        ),
        p: (
            <P>
                This is a good old paragraph wrapped into a styled component as
                well.
            </P>
        ),
        div: <Div />,
        input: <Input placeholder="Hi! I'm an input component." />
    },
    fr: {
        h1: <H1>Ce composant utilise le tag h1 comme base.</H1>,
        h2: (
            <H2>
                Tous les tags HTML peuvent être utilisés pour vos composants.
            </H2>
        ),
        a: (
            <A title="Ceci est un lien." href="https://www.google.fr">
                Les propriétés sont transmises au composant comme d'habitude.
            </A>
        ),
        p: <P>C'est un bon vieux paragraphe en guise de composant.</P>,
        div: <Div />,
        input: (
            <Input placeholder="Salut! Je suis un composant qui accepte la saisie de données." />
        )
    }
};

export default ({ language = 'en' }) => (
    <Fragment>
        {CONTENT[language].h1}
        {CONTENT[language].h2}
        {CONTENT[language].a}
        {CONTENT[language].p}
        {CONTENT[language].img}
        {CONTENT[language].div}
        {CONTENT[language].input}
    </Fragment>
);
