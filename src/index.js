import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './styles/styles.css';

import { injectGlobal } from 'styled-components'

import App from './App.js';
import Timer from './Timer.js';
import MagicMirror from './MagicMirror.js';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route exact path={'/timer'} component={App} />
                    <Route path={'/timer/:duration'} component={Timer} />
                    <Route exact path={'/mirror'} component={MagicMirror} />
                </Switch>
            </BrowserRouter>
        );
    }
}

injectGlobal`
    body {
        color: red;
    }
`

ReactDOM.render(<Root />, document.getElementById('root'));