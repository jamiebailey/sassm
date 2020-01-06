// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

//Set default
import {setAppActiveDir} from './actions';
import path from 'path';

let homedir = require('os').homedir();

store.dispatch(setAppActiveDir(path.join(homedir, 'Documents', 'GTA San Andreas User Files')));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);