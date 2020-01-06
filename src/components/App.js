import React, { Component } from 'react';
import ActiveList from './ActiveList';
import StoreList from './StoreList';

export default class App extends Component {
    render() {
        return (
            <div>
                <ActiveList />
                <StoreList />
            </div>
        );
    }
}