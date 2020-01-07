import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div><b>{this.props.title}</b></div>
                <div><small>{(this.props.path === null) ? 'DIRECTORY NOT SET' : this.props.path}</small></div>
            </div>
        )
    }
}