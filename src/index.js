import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
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

export const Root = styled.div`
    @font-face {
        font-family: 'Museo Sans Rounded';
        src: url(./assets/MuseoSansRounded-500-webfont.woff2);
    }

    font-family: Museo Sans Rounded;
`;

ReactDOM.render(
    <BrowserRouter>
        <Root>
            <Main>
                <Switch>
                    <Route path="/simple" exact component={Simple} />
                    <Route path="/tags" exact component={HtmlTags} />
                    <Route path="/extend" exact component={ExtendingStyles} />
                    <Route path="/sassy" exact component={Sassy} />
                    <Route path="/animated" exact component={Animated} />
                    <Route path="/responsive" exact component={Responsive} />
                    <Route path="/" exact component={Home} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Main>
            <Nav />
        </Root>
    </BrowserRouter>,
    document.getElementById('app')
);
