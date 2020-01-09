import React, { Component } from 'react';
import GTABar from './GTABar';

export default class GTASaveInfo extends Component {
    render() {
        let armor = this.props.playerArmor;
        let maxArmor = (this.props.playerMaxArmor !== undefined) ? this.props.playerMaxArmor : 50;
        let health = this.props.health;
        let maxHealth = (this.props.playerMaxHealth !== undefined) ? this.props.playerMaxHealth : 50;

        return <div className="gta-save-info">
            <div className="save-name">{this.props.saveName.toUpperCase()}</div>
            <div className="file-info">
                <div className="filename">{this.props.filename}</div>
            </div>
            <div className="player-info">
                <div className="time">{this.props.gameHours + ':' + this.props.gameMinutes}</div>
                <div className="bars">
                    <div className="armor"><GTABar type="armor" width={armor} maxWidth={maxArmor} /></div>
                    <div className="health"><GTABar type="health" width="100" maxWidth={this.props.playerMaxHealth} /></div>
                </div>
                <div className="money">${this.props.playerMoney.padStart(8, '0')}</div>
            </div>
        </div>
    }
}