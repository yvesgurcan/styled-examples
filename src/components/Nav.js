import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const LinkList = styled.div`
    border-top: 1px solid gray;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
`;

const LinkItem = styled(Link)`
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 8px;
    text-decoration: none;
    color: #07a1d1;

    &:hover {
        color: #0051c3;
    }
`;

const CONTENT = {
    en: {
        home: 'Landing page',
        simple: 'Simple component',
        tags: 'HTML tags as base for components',
        extend: 'Extending styles',
        sassy: 'Sassy component',
        animated: 'Animated component',
        responsive: 'Responsive component',
        attributes: 'HTML attributes',
        props: 'Component with props',
        global: 'Global style component',
        theme: 'Theming'
    },
    fr: {
        home: "Page d'accueil",
        simple: 'Simple composant',
        tags: 'Les tags HTML comme base pour les composants',
        extend: 'Etendre les styles',
        sassy: 'Composant utilisant Sass',
        animated: 'Composant animé',
        responsive: 'Composant pour les mobiles',
        attributes: 'Attributs HTML',
        props: 'Composant avec propriétés',
        global: 'Composant avec des styles globaux',
        theme: 'Thèmes'
    }
};

export default withRouter(({ location = {} }) => {
    const { pathname = '' } = location;
    const language = pathname.substring(1, 3) || 'en';
    console.log({ language });
    return (
        <LinkList>
            <LinkItem to={`/${language}`}>{CONTENT[language].home}</LinkItem>
            <LinkItem to={`/${language}/simple`}>
                {CONTENT[language].simple}
            </LinkItem>
            <LinkItem to={`/${language}/tags`}>
                {CONTENT[language].tags}
            </LinkItem>
            <LinkItem to={`/${language}/extend`}>
                {CONTENT[language].extend}
            </LinkItem>
            <LinkItem to={`/${language}/sassy`}>
                {CONTENT[language].sassy}
            </LinkItem>
            <LinkItem to={`/${language}/animated`}>
                {CONTENT[language].animated}
            </LinkItem>
            <LinkItem to={`/${language}/responsive`}>
                {CONTENT[language].responsive}
            </LinkItem>
            <LinkItem to={`/${language}/attributes`}>
                {CONTENT[language].attributes}
            </LinkItem>
            <LinkItem to={`/${language}/props`}>
                {CONTENT[language].props}
            </LinkItem>
            <LinkItem to={`/${language}/global`}>
                {CONTENT[language].global}
            </LinkItem>
            <LinkItem to={`/${language}/theme`}>
                {CONTENT[language].theme}
            </LinkItem>
        </LinkList>
    );
});
