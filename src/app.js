// load stylesheet
import '../assets/app.scss';

// load app libraries
import path from 'path';
import FileManager from './object/FileManager';

// setup react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, window.document.getElementById('app'));


var homedir = require('os').homedir();

var sauf = path.join(homedir, 'Documents', 'GTA San Andreas User Files');


var fm = new FileManager(sauf);

console.log(fm.getFiles());