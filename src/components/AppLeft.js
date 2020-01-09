import React, { Component } from 'react';
import AppLeftMenuButton from '../containers/AppLeftMenuButton';

export default class AppLeft extends Component {
    render() {
        const items = this.props.items.map((item) => <li key={item.text}><AppLeftMenuButton page={item.page}>{item.text}</AppLeftMenuButton></li>);
        return <div className="app-left"><ul>{items}</ul></div>
    }
}