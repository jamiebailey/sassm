// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import path from 'path';
import fs from 'fs';
import { showTab, setDir } from './actions';

// Set default dir
let defaultActiveDir = path.resolve(require('os').homedir(), './Documents/GTA San Andreas User Files');
if(fs.existsSync(defaultActiveDir)) {
    store.dispatch(setDir('active', defaultActiveDir));
    store.dispatch(showTab('active'));
} else {
    store.dispatch(showTab('settings'));
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);