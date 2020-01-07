import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import WindowHeader from './Window/Header';

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

    render() {
        if (!this.state.show) {
            return '';
        }
        return (
            <div className="WindowActive">
                <WindowHeader title="ACTIVE" path={this.state.path} />
                <div className="Body">BODY</div>
            </div>
        );
    }
}