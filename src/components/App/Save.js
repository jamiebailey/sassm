import React from 'react';

export default class Save extends React.Component {
    render() {
        let file = this.props.file;
        return (
            <div>
                <h1>{file.getSaveName()}</h1>
                <div>
                    <h2>armor:</h2>
                </div>
            </div>
        )
    }
}