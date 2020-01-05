// load stylesheet
import '../assets/app.scss';

// load app
import path from 'path';
import FileManager from './object/FileManager';

var homedir = require('os').homedir();

var sauf = path.join(homedir, 'Documents', 'GTA San Andreas User Files');


var fm = new FileManager(sauf);

console.log(fm.getFiles());