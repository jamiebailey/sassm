import React, { Component } from 'react';

export default class GTABar extends Component {
    render() {
        let className = 'gta-bar';
        if(this.props.type === 'armor') {
            className += ' armor';
        } else if(this.props.type === 'health') {
            className += ' health';
        }
        return <div className={className} style={{width: this.props.maxWidth + '%'}}>
            <div className="progress" style={{width: this.props.width + '%'}}></div>
        </div>
    }
}