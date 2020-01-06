import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import { setStorageDir } from '../actions';

export default class WindowStorage extends Component {
    constructor(props) {
        super(props);
        this.state = this.getCurrentStateFromStore();
    }
    
    getCurrentStateFromStore() {
        return store.getState().storageTab;
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

    updatePath(pathname) {
        store.dispatch(setStorageDir(path.resolve(pathname)));
    }

    render() {
        let output = null;
        if (this.state.show) {
            output = <div><b>STORAGE:</b> {this.state.path}</div>
        }

        return (
            <div className="WindowStorage">
                {output}
            </div>
        );
    }
}