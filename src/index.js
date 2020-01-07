// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import path from 'path';
import { setActiveDir, toggleActiveTab } from './actions';

// Set default dir
let defaultDir = path.resolve(require('os').homedir(), './Documents/GTA San Andreas User Files');

store.dispatch(setActiveDir(defaultDir));
store.dispatch(toggleActiveTab(true));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);