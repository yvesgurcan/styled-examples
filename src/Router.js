import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Switch, withRouter } from 'react-router';

import ExampleNav from './ExampleNav';
import SimpleExample from './SimpleExample';

class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/simple" exact component={SimpleExample} />
                </Switch>
                <ExampleNav />
            </Fragment>
        );
    }
}

export default withRouter(Router);
