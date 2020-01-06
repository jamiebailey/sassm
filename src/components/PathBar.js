import React, { Component } from 'react';
import {remote} from 'electron';

export default class ActiveList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var dialog = remote.dialog;

        dialog.showOpenDialog({
            properties: ['openDirectory']
        }).then((res) => {
            this.props.callback(res.filePaths[0]);
        });
    }

    render() {
        return (
            <div className="PathBar"  onClick={this.handleClick}>
                <div title={this.props.path}>{this.props.path}</div>
            </div>
        );
    }
}