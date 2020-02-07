import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import frenchFlag from '../../assets/french-flag.png';
import usFlag from '../../assets/us-flag.png';

const Root = styled.div`
    min-height: calc(100vh - 230px);
`;

const Title = styled.div`
    border-bottom: 1px solid gray;
    margin-bottom: 40px;
    padding: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
`;

const Flag = styled.img`
    margin: 2px;
`;

export default withRouter(({ location = {}, children }) => {
    const { pathname = '' } = location;
    const targetWithoutLanguage = pathname.substring(3) || '';
    console.log({ targetWithoutLanguage });
    return (
        <Root>
            <Title>
                <div>Styled Components</div>
                <div>
                    <Link to={`/fr${targetWithoutLanguage}`}>
                        <Flag src={frenchFlag} />
                    </Link>
                    <Link to={`/en${targetWithoutLanguage}`}>
                        <Flag src={usFlag} />
                    </Link>
                </div>
            </Title>
            {children}
        </Root>
    );
});
