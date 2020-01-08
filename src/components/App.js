import React, { Component } from 'react';
import { remote } from 'electron';
import Left from './AppLeft';

export default class App extends Component {

    close = () => {
        let window = remote.getCurrentWindow();
        window.close();
    }

    render() {
        return <h1>
            <Left items={[
                    {text: 'Exit', onClick: this.close}
                ]} />
        </h1>
    }
}