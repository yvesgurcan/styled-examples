import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';
import Main from './Main';

import Home from './Home';
import NotFound from './NotFound';
import Simple from './Simple';
import HtmlTags from './HtmlTags';
import ExtendingStyles from './ExtendingStyles';
import Sassy from './Sassy';
import Animated from './Animated';
import Responsive from './Responsive';
import Attributes from './Attributes';
import Props from './Props';
import Global from './Global';
import Theme from './Theme';

export const Root = styled.div`
  @font-face {
    font-family: 'Museo Sans Rounded';
    src: url(./assets/MuseoSansRounded-500-webfont.woff2);
  }

  font-family: Museo Sans Rounded;
  font-size: 30px;
  padding-left: 60px;
  padding-right: 60px;

  input {
    margin: 10px;
  }
`;

ReactDOM.render(
  <HashRouter>
    <Root>
      <Main>
        <Switch>
          <Route path="/simple" exact component={Simple} />
          <Route path="/tags" exact component={HtmlTags} />
          <Route path="/extend" exact component={ExtendingStyles} />
          <Route path="/sassy" exact component={Sassy} />
          <Route path="/animated" exact component={Animated} />
          <Route path="/responsive" exact component={Responsive} />
          <Route path="/attributes" exact component={Attributes} />
          <Route path="/props" exact component={Props} />
          <Route path="/global" exact component={Global} />
          <Route path="/theme" exact component={Theme} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Main>
      <Nav />
    </Root>
  </HashRouter>,
  document.getElementById('app')
);
