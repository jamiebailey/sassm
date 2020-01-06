import React, { Component } from 'react';
import { remote } from 'electron';

export default class WindowLeftMenu extends Component {
    close() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }
    render() {
        return (
            <div className="WindowLeftMenu">
                <a>Active</a>
                <a>Storage</a>
                <a>Settings</a>
                <a onClick={this.close}>Exit</a>
            </div>
        );
    }
}