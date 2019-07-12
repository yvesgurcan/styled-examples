import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from './shared/Wrapper';

export default class Home extends Component {
    render() {
        return (
            <LinkList>
                <LinkItem to="/comparison">Comparison Example</LinkItem>
                <LinkItem to="/simple">Simple Example</LinkItem>
            </LinkList>
        );
    }
}

export const LinkList = styled(Wrapper)`
    border-top: 1px solid gray;
    margin-top: 15px;
    padding-top: 15px;
`;

export const LinkItem = styled(Link)`
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    color: #07a1d1;

    &:visited {
        color: #0051c3;
    }

    &:hover {
        color: #39c8e3;
    }
`;
