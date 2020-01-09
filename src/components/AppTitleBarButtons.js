import React, { Component } from 'react';
import Button from './elements/Button';

export default class AppTitleBarButtons extends Component {
    render() {
        return (
            <div className="app-title-bar-buttons">
                <Button onClick={this.props.minimize}>🗕</Button>
                <Button onClick={this.props.maximize.bind(null, !this.props.maximized)}>{this.props.maximized ? '🗗' : '🗖'}</Button>
                <Button onClick={this.props.close}>×</Button>
            </div>
        );
    }
}