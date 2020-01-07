import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import Header from './Window/Header';
import { setDir } from '../actions';

export default class WindowSettings extends Component {
    constructor(props) {
        super(props);
        this.state = this.getCurrentStateFromStore();
    }
    
    getCurrentStateFromStore() {
        return store.getState();
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => {
            let currentState = this.getCurrentStateFromStore();
            this.setState(currentState);
        });
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    updatePath(name, pathname) {
        store.dispatch(setDir(name, path.resolve(pathname)));
    }

    render() {
        let output = null;
        if (this.state.settingsTab.show) {
            output = <div><Header title="SETTINGS" /></div>
        }
        return (
            <div className="WindowStorage">
                {output}
            </div>
        );
    }
}