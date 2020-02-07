import React, { Fragment } from 'react';
import styled from 'styled-components';

const CONTENT = {
    en: {
        descriptiopn:
            'You can nest rules for your CSS selectors in your styled components, use the "&" reference like you would in SASS.',
        list1: 'This is a list item.',
        list2:
            'This item, like the first one, is styled from the parent component (a ul tag wrapped in a styled component).',
        list3:
            'This item has a "grey" className. The appropriate scoped styles are applied to it.',
        list4: 'Another list item.',
        list5:
            'This is not grey despite the className because "grey" only applies to li, not divs.',
        list6:
            'This, however, is orange, because there\'s no "&" on the rule applied to the "orange" className.',
        list7:
            "This list item is neither grey nor orange, despite its className. It's outside of the scope of the styled component."
    },
    fr: {
        descriptiopn:
            'Vous pouvez avoir plusieurs niveaux de règles pour vos sélecteurs CSS dans vos composants et vous pouvez utiliser "&" comme vous le feriez avec SASS.',
        list1: "C'est un item de la liste.",
        list2:
            'Cet item, comme le premier, est stylisé par le composant parent (un tag ul dans un composant).',
        list3:
            'Cet item a la classe "grey". Le style dans le cadre de ce composant est appliqué.',
        list4: 'Un autre item de la liste.',
        list5:
            "Cet item n'est pas gris malgré la classe car \"grey\" ne s'applique qu'au tag li, pas au tag div.",
        list6:
            'Cet item, en revanche, est orange, car il n\' y a pas de "&" dans la règle qui s\'applique à la classe "orange".',
        list7:
            'Ce dernier item est ni gris ni orange, malgré ses classes. Cet item est en dehors du cadre du composant.'
    }
};

export default ({ language = 'en' }) => (
    <Fragment>
        <div>{CONTENT[language].description}</div>
        <List>
            <li>{CONTENT[language].list1}</li>
            <li>{CONTENT[language].list2}</li>
            <li className="grey">{CONTENT[language].list3}</li>
            <li>
                {CONTENT[language].list4}
                <div className="grey">{CONTENT[language].list5}</div>
                <div className="orange">{CONTENT[language].list6}</div>
            </li>
        </List>
        <ul>
            <li className="grey orange">{CONTENT[language].list7}</li>
        </ul>
    </Fragment>
);

export const List = styled.ul`
    // Nested selector
    li {
        background: rgb(0, 180, 240);
        padding: 5px;
        margin: 2px;

        // Only applies to li.grey
        &.grey {
            background: grey;
        }

        // Applies to any element with that className in li
        .orange {
            background: orange;
        }
    }
`;
