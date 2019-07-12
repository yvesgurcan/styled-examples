import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import ExampleNav from './ExampleNav';
import ComparisonExample from './ComparisonExample/';
import SimpleExample from './SimpleExample/';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/comparison" exact component={ComparisonExample} />
            <Route path="/simple" exact component={SimpleExample} />
        </Switch>
        <ExampleNav />
    </BrowserRouter>,
    document.getElementById('app')
);
