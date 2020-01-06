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
        return {
            path: store.getState().activeTab.path
        }
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => {
            let currentState = this.getCurrentStateFromStore();
            if(this.state.path !== currentState.path) {
                this.setState(currentState);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    updatePath(pathname) {
        store.dispatch(setActiveDir(path.resolve(pathname)));
    }

    render() {
        return (
            <div className="WindowActive">
            <div><b>ACTIVE:</b> {this.state.path}</div>
            </div>
        );
    }
}