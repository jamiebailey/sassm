import React from 'react';
import { callbackify } from 'util';

export default class Save extends React.Component {
    render() {
        let file = this.props.file;
        return (
            <div className="Save">
                <div className="left">
                    <h3 className="title">{file.getSaveName()}</h3>
                </div>
                <div className="right">
                    <div><b>${file.getPlayerMoney()}</b></div>
                    <div>{Math.round(file.getPlayerArmor())}</div>
                </div>
                <small className="version">{file.getVersionName()} ({file.getVersionID()})</small>
            </div>
        )
    }
}