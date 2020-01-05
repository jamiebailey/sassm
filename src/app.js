const path = require('path');
var FileManager = require('./object/FileManager');

var homedir = require('os').homedir();

var sauf = path.join(homedir, 'Documents', 'GTA San Andreas User Files');


var fm = new FileManager(sauf);

console.log(fm.getFiles());