import React, { Component } from 'react';
import WindowOptions from './WindowOptions';
import WindowLeftMenu from './WindowLeftMenu';
import WindowActive from './WindowActive';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <WindowOptions />
                <WindowLeftMenu />
                <WindowActive />
            </div>
        );
    }
}