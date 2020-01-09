import React, { Component } from 'react';
import Button from './elements/Button';

export default class AppTitleBarButtons extends Component {
    render() {
        return (
            <div className="app-title-bar-buttons">
                <Button>Minimize</Button>
                <Button>Maximize</Button>
                <Button onClick={this.props.close}>Close</Button>
            </div>
        );
    }
}