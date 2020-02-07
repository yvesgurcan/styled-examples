import React, { Fragment } from 'react';

const CONTENT = {
    en: {
        hi: (
            <p>
                Hello, I'm <a href="https://connect.yvesgurcan.com">Yves</a>!
            </p>
        ),
        description: (
            <p>
                Click on the links at the bottom of the page to see examples of
                styled components.
            </p>
        ),
        repo: (
            <p>
                <small>
                    <a href="https://github.com/yvesgurcan/styled-examples">
                        Source code
                    </a>
                </small>
            </p>
        )
    },
    fr: {
        hi: (
            <p>
                Bonjour, je m'appelle{' '}
                <a href="https://connect.yvesgurcan.com/fr">Yves</a>&nbsp;!
            </p>
        ),
        description: (
            <p>
                Cliquez sur les liens en bas de cette page pour voir des
                examples qui utilisent <i>styled components</i>.
            </p>
        ),
        repo: (
            <p>
                <small>
                    <a href="https://github.com/yvesgurcan/styled-examples">
                        Code source
                    </a>
                </small>
            </p>
        )
    }
};

export default ({ language = 'en' }) => (
    <Fragment>
        {CONTENT[language].hi}
        {CONTENT[language].description}
        {CONTENT[language].repo}
    </Fragment>
);
