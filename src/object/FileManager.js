import find from 'find';
import path from 'path';
import SaveFile from './SaveFile';

export default class FileManager {
    constructor(basepath) {
        this._dir = path.normalize(basepath);
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