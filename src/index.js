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
import { remote } from 'electron';

// handle all uncaught exceptions
process.on('uncaughtException', (err) => {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.hide();
    remote.dialog.showMessageBox({
        type: 'error',
        title: 'SASM Error',
        message: err
    }).then(() => {
        window.close();
    });
});

// Set default dir
let defaultActiveDir = path.resolve(require('os').homedir(), './Documents/GTA San Andreas User Files');
if(!fs.existsSync(defaultActiveDir)) {
    throw 'Could not find GTA SA user files directory: \'' + defaultActiveDir + '\''; 
}

// Load default page
store.dispatch(setDir('active', defaultActiveDir));
store.dispatch(showTab('active'));

// Render app
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);