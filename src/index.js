import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  }from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './styles/styles.css';

import App from './App.js';
import Timer from './Timer.js';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route exact path={'/timer'} component={App} />
                    <Route path={'/timer/:duration'} component={Timer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
