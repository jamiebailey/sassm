import React, { Component } from 'react';
import { remote } from 'electron';
import store from '../store';
import { showTab } from '../actions';

export default class WindowLeftMenu extends Component {
    constructor(props) {
        super(props);
        this.active = this.active.bind(this);
        this.storage = this.storage.bind(this);
        this.settings = this.settings.bind(this);
    }
    active() {
        store.dispatch(showTab('active'));
    }
    storage() {
        store.dispatch(showTab('storage'));
    }
    settings() {
        store.dispatch(showTab('settings'));
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
                <a onClick={this.settings}>Settings</a>
                <a onClick={this.close}>Exit</a>
            </div>
        );
    }
}