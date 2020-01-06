import React, { Component } from 'react';


export default class WindowLeftMenu extends Component {
    render() {
        return (
            <div className="WindowLeftMenu">
                <a>Active</a>
                <a>Storage</a>
                <a>Settings</a>
                <a>Exit</a>
            </div>
        );
    }
}