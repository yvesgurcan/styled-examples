import React, { Fragment } from 'react';
import styled from 'styled-components';

export default () => (
    <Fragment>
        <div>
            You can nest rules for your CSS selectors in your styled components,
            use the "&" reference like you would in SASS.
        </div>
        <List>
            <li>This is a list item.</li>
            <li>
                The item, like the first one, is styled from the parent
                component (a ul tag wrapped in a styled component).
            </li>
            <li className="red">
                This item has a className. The appropriate scoped styles are
                applied to it.
            </li>
            <li>
                Another list item.
                <div className="red">
                    This is not red despite the className because "red" only
                    applies to li, not divs.
                </div>
                <div className="blue">
                    This, however, is blue, because there's no "&" on that rule.
                </div>
            </li>
        </List>
        <ul>
            <li className="red blue">
                This list item is not red or blue, despite its className. It's
                outside of the scope of the styled component.
            </li>
        </ul>
    </Fragment>
);

export const List = styled.ul`
    // Nested selector
    li {
        background: rgb(0, 200, 0);
        padding: 5px;
        margin: 2px;

        // Only applies to li.red
        &.red {
            background: red;
        }

        // Applies to any element with that className in li
        .blue {
            background: rgb(125, 125, 255);
        }
    }
`;
