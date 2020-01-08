import React, { Component } from 'react';
import Button from './elements/Button';

export default class AppLeft extends Component {
    render() {
        const items = this.props.items.map((item) => <li key={item.text}><Button onClick={item.onClick}>{item.text}</Button></li>);
        return <div className="app-left"><ul>{items}</ul></div>
    }
}