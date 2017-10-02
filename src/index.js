import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal }  from 'styled-components';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
