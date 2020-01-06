import React, { Component } from 'react';
import { remote } from 'electron';
import store from '../store';
import { toggleActiveTab, toggleStorageTab } from '../actions';

export default class WindowLeftMenu extends Component {
    constructor(props) {
        super(props);
        this.active = this.active.bind(this);
        this.storage = this.storage.bind(this);
    }
    active() {
        store.dispatch(toggleActiveTab(true));
        store.dispatch(toggleStorageTab(false));
    }
    storage() {
        store.dispatch(toggleStorageTab(true));
        store.dispatch(toggleActiveTab(false));
    }
    close() {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }
    render() {
        return (
            <div className="WindowLeftMenu">
                <a onClick={this.active}>Active</a>
                <a onClick={this.storage}>Storage</a>
                <a>Settings</a>
                <a onClick={this.close}>Exit</a>
            </div>
        );
    }
}