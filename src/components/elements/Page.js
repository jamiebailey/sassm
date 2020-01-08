import React, { Component } from 'react';

export default class Page extends Component {
    render() {
        return <div className="app-page">
            <h1 className="title">{this.props.title}</h1>
            <div className="content">{this.props.children}</div>
        </div>
    }
}