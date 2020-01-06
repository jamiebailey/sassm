import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import { setActiveDir } from '../actions';

export default class WindowActive extends Component {
    constructor(props) {
        super(props);
        this.state = this.getCurrentStateFromStore();
    }
    
    getCurrentStateFromStore() {
        return store.getState().activeTab
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
        store.dispatch(setActiveDir(path.resolve(pathname)));
    }

    render() {
        let output = null;
        if (this.state.show) {
            output = <div><b>ACTIVE:</b> {this.state.path}</div>
        }

        return (
            <div className="WindowActive">
                {output}
            </div>
        );
    }
}