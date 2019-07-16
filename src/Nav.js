import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkList = styled.div`
    border-top: 1px solid gray;
    margin-top: 15px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const LinkItem = styled(Link)`
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    text-decoration: none;
    color: #07a1d1;

    &:hover {
        color: #0051c3;
    }
`;

export default class Home extends Component {
    render() {
        return (
            <LinkList>
                <LinkItem to="/simple">Simple component</LinkItem>
                <LinkItem to="/tags">HTML tags as base for components</LinkItem>
                <LinkItem to="/extend">Extending styles</LinkItem>
                <LinkItem to="/sassy">Sassy component</LinkItem>
                <LinkItem to="/animated">Animated component</LinkItem>
                <LinkItem to="/responsive">Responsive component</LinkItem>
                <LinkItem to="/props">Component with props</LinkItem>
            </LinkList>
        );
    }
}
