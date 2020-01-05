import express from 'express';
import FileManager from './src/object/FileManager.js';

var fm = new FileManager();

var app = express();

app.get('/api/saves', (req, res) => {
    let saves = [];
    let saveFiles = fm.getFiles();
    saveFiles.forEach((file) => {
        saves.push({
            id: file.id
        });
    });
    res.json(saves);
});

app.get('/api/saves/:id', (req, res) => {
    let id = req.params['id'];
    res.json(fm.getFile(id).toJSON());
});

app.listen(8080);