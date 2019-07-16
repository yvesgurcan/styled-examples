import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SecondaryButton } from './ExtendingStyles';

// define your theme objects
export const DEFAULT_THEME = {
  name: 'navy theme',
  background: 'steelblue',
  linkColor: 'lightblue',
  codeBlockBackground: 'lightgrey'
};

export const SECONDARY_THEME = {
  name: 'summer theme',
  background: 'orange',
  linkColor: 'yellow',
  codeBlockBackground: 'gold'
};

export const Wrapper = styled.div`
  padding: 20px;
  // Use props.theme to set a rule depending on the selected theme
  background: ${props => props.theme.background};
  margin-bottom: 50px;
`;

export const Link = styled.a`
  color: ${props => props.theme.linkColor};
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  border-bottom: 2px solid black;
  justify-content: space-around;
`;

export const NavItem = styled(Link)`
  margin: 10px;
`;

export const Content = styled.section``;

export const CodeBlock = styled.pre`
  background: ${props => props.theme.codeBlockBackground};
  overflow: scroll;
  font-size: 18px;
  padding: 12px;
`;

export default class Theming extends Component {
  state = { currentTheme: DEFAULT_THEME };

  changeTheme = () => {
    if (this.state.currentTheme.name === DEFAULT_THEME.name) {
      this.setState({ currentTheme: SECONDARY_THEME });
    } else {
      this.setState({ currentTheme: DEFAULT_THEME });
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          <span>Current theme:</span> <b>{this.state.currentTheme.name}</b>
        </div>
        <SecondaryButton onClick={this.changeTheme}>
          Switch style
        </SecondaryButton>
        {/* Use the ThemeProvider component to inject your theme in all child components */}
        <ThemeProvider theme={this.state.currentTheme}>
          <Wrapper>
            <Nav>
              {/* Keeps the code readable */}
              <NavItem>Home</NavItem>
              <NavItem>Pricing</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Contact</NavItem>
            </Nav>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{' '}
                <Link href="">incididunt ut labore et dolore magna</Link>{' '}
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>A block of code:</p>
              <CodeBlock>{`if (!rowIsEmpty) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        const horizontalWinner = connectedHorizontally(j, row);
            return horizontalWinner;
    }
}`}</CodeBlock>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Content>
          </Wrapper>
        </ThemeProvider>
      </Fragment>
    );
  }
}
