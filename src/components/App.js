import React from 'react';
import path from 'path';
import SaveList from './App/SaveList';


export default class App extends React.Component {
    render() {
        let homedir = require('os').homedir();
        let sauf = path.join(homedir, 'Documents', 'GTA San Andreas User Files');

        return (
            <div>
                <SaveList path={sauf} />
            </div>
        )
    }
}