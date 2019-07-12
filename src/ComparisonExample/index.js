import React, { Component } from 'react';
import styled from 'styled-components';

import Wrapper from '../shared/Wrapper';

import './comparisonExample.scss';

export default class ComparisonExample extends Component {
    render() {
        return (
            <PageWrapper>
                {/* SASS */}
                <div className="container">
                    <h1 className="title">SASS</h1>
                    <div className="pros-and-cons">
                        <div className="pros">
                            <div className="round green">+</div>
                            <ul>
                                <li>A good ol' stylesheet.</li>
                            </ul>
                        </div>
                        <div className="cons">
                            <div className="round red">&mdash;</div>
                            <ul>
                                <li>Not automatically scoped.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* CSS in JS */}
                {/* Styled Components */}
            </PageWrapper>
        );
    }
}

const PageWrapper = styled(Wrapper)`
    display: flex;
`;
