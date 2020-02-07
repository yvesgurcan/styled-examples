import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './components/Nav';
import Main from './components/Main';

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
                    <Route path="/en/simple" exact component={Simple} />
                    <Route
                        path="/fr/simple"
                        exact
                        render={() => <Simple language="fr" />}
                    />
                    <Route path="/en/tags" exact component={HtmlTags} />
                    <Route
                        path="/fr/tags"
                        exact
                        render={() => <HtmlTags language="fr" />}
                    />
                    <Route
                        path="/en/extend"
                        exact
                        component={ExtendingStyles}
                    />
                    <Route
                        path="/fr/extend"
                        exact
                        render={() => <ExtendingStyles language="fr" />}
                    />
                    <Route path="/en/sassy" exact component={Sassy} />
                    <Route
                        path="/fr/sassy"
                        exact
                        render={() => <Sassy language="fr" />}
                    />
                    <Route path="/en/animated" exact component={Animated} />
                    <Route
                        path="/fr/animated"
                        exact
                        render={() => <Animated language="fr" />}
                    />
                    <Route path="/en/responsive" exact component={Responsive} />
                    <Route
                        path="/fr/responsive"
                        exact
                        render={() => <Responsive language="fr" />}
                    />
                    <Route path="/en/attributes" exact component={Attributes} />
                    <Route
                        path="/fr/attributes"
                        exact
                        render={() => <Attributes language="fr" />}
                    />
                    <Route path="/en/props" exact component={Props} />
                    <Route
                        path="/fr/props"
                        exact
                        render={() => <Props language="fr" />}
                    />
                    <Route path="/en/global" exact component={Global} />
                    <Route
                        path="/fr/global"
                        exact
                        render={() => <Global language="fr" />}
                    />
                    <Route path="/en/theme" exact component={Theme} />
                    <Route
                        path="/fr/theme"
                        exact
                        render={() => <Theme language="fr" />}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => <Redirect to="/en" />}
                    />
                    <Route path="/en" exact component={Home} />
                    <Route
                        path="/fr"
                        exact
                        render={() => <Home language="fr" />}
                    />
                    <Route
                        path="/fr/"
                        render={() => <NotFound language="fr" />}
                    />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Main>
            <Nav />
        </Root>
    </HashRouter>,
    document.getElementById('app')
);
