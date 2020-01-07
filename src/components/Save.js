import React, { Component } from 'react';

export default class Save extends Component {
    render() {
        return (
            <div className="Save">
                <div data-type="savename">{this.props.savename}</div>
            </div>
        )
    }
}