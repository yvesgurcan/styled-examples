import React from 'react';

const CONTENT = {
    en: <div>Uh oh! Nothing to see here.</div>,
    fr: <div>Oh non&nbsp;! Il n'y a rien à voir ici.</div>
};
export default ({ language = 'en' }) => CONTENT[language];
