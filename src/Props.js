import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ANSWER = 2006;

const CorrectAnswer = styled.div`
    margin: 30px;
    padding: 20px;
    cursor: pointer;
    border-radius: 18px;
    border: 1px solid ${props => (props.correct ? 'green' : 'black')};
    background: ${props => props.correct && 'lightgreen'};
`;

const WrongAnswer = styled.div`
    margin: 30px;
    padding: 20px;
    cursor: pointer;
    border-radius: 18px;
    border: 1px solid ${props => (props.wrong ? 'red' : 'black')};
    background: ${props => props.wrong && 'rgb(255, 150, 150)'};
`;

const Explanation = styled.p`
    display: ${props => (props.selectedAnswer === ANSWER ? 'block' : 'none')};
`;

export default class Quiz extends Component {
    state = { selectedAnswer: false };

    selectAnswer = selectedAnswer => this.setState({ selectedAnswer });

    render() {
        return (
            <Fragment>
                <div>In what year did Amazon launch AWS?</div>
                {[2016, 1995, 2008, 2006].map(year =>
                    year === ANSWER ? (
                        <CorrectAnswer
                            key={year}
                            className={year}
                            correct={
                                year === ANSWER &&
                                this.state.selectedAnswer === ANSWER
                            }
                            onClick={() => this.selectAnswer(year)}
                        >
                            {year}
                        </CorrectAnswer>
                    ) : (
                        <WrongAnswer
                            key={year}
                            className={year}
                            wrong={
                                this.state.selectedAnswer !== false &&
                                this.state.selectedAnswer === year
                            }
                            onClick={() => this.selectAnswer(year)}
                        >
                            {year}
                        </WrongAnswer>
                    )
                )}
                <Explanation selectedAnswer={this.state.selectedAnswer}>
                    Correct! AWS was launched on March 2006.
                </Explanation>
                <div>State:</div>
                <code>{JSON.stringify(this.state)}</code>
            </Fragment>
        );
    }
}
