import React, { Fragment } from 'react';
import styled from 'styled-components';

export default () => (
  <Fragment>
    <div>
      You can nest rules for your CSS selectors in your styled components, use
      the "&" reference like you would in SASS.
    </div>
    <List>
      <li>This is a list item.</li>
      <li>
        This item, like the first one, is styled from the parent component (a ul
        tag wrapped in a styled component).
      </li>
      <li className="grey">
        This item has a "grey" className. The appropriate scoped styles are
        applied to it.
      </li>
      <li>
        Another list item.
        <div className="grey">
          This is not grey despite the className because "grey" only applies to
          li, not divs.
        </div>
        <div className="orange">
          This, however, is orange, because there's no "&" on the rule applied
          to the "orange" className.
        </div>
      </li>
    </List>
    <ul>
      <li className="grey orange">
        This list item is neither grey nor orange, despite its className. It's
        outside of the scope of the styled component.
      </li>
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
