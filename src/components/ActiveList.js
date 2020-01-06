import React, { Component } from 'react';
import path from 'path';
import store from '../store';
import PathBar from './PathBar';
import { setAppActiveDir } from '../actions';

export default class ActiveList extends Component {

    constructor(props) {
        super(props);
        this.state = this.getCurrentStateFromStore()
    }

    getCurrentStateFromStore() {
        return {
            path: store.getState().activeList.path
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
        store.dispatch(setAppActiveDir(path.resolve(pathname)));
    }

    render() {
        return (
            <div className="ActiveList">
                <PathBar path={this.state.path} callback={this.updatePath} />
            </div>
        );
    }
}