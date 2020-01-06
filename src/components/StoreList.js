import React, { Component } from 'react';
import PathBar from './PathBar';

export default class StoreList extends Component {
    render() {
        return (
            <div className="StoreList">
                <h2>Storage</h2>
                <PathBar />
            </div>
        );
    }
}