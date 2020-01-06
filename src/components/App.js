import React, { Component } from 'react';
import WindowOptions from './WindowOptions';
import WindowLeftMenu from './WindowLeftMenu';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <WindowOptions />
                <WindowLeftMenu />
            </div>
        );
    }
}