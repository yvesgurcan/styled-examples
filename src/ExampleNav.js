import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/simple">Simple Example</Link>
            </Fragment>
        );
    }
}
