import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import Header from './Window/Header';

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

    render() {
        if(!this.state.show) {
            return '';
        }
        return (
            <div className="WindowStorage">
                <div><Header title="STORAGE" path={this.state.path} /></div>
            </div>
        );
    }
}