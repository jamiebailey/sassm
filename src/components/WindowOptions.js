import React, { Component } from 'react';
import { remote } from 'electron';

export default class WindowOptions extends Component {

    minimise() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.minimize();
    }

    maximise() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
    }

    close() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }

    render() {
        return (
            <div className="WindowOptions">
                <a onClick={this.minimise}>🗕</a>
                <a onClick={this.maximise}>🗖</a>
                <a onClick={this.close}>✖</a>
            </div>
        );
    }
}