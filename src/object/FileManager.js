import find from 'find';
import SaveFile from './SaveFile.js';

export default class FileManager {
    constructor() {
        this._dir = process.cwd();
        this._files = [];
        this.refreshFiles();
    }

    getFile(id) {
        this.refreshFiles();
        let file = null;
        this._files.forEach((save) => {
            if(save.id === id) {
                file = save;
            }
        });
        return file;
    }

    getFiles() {
        this.refreshFiles();
        return this._files;
    }

    refreshFiles() {
        this._files = [];
        let files = find.fileSync(/\.b$/, this._dir);
        files.forEach((path) => {
            this._files.push(new SaveFile(path));
        });
    }
}