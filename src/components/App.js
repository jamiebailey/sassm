import React, { Component } from 'react';
import { remote } from 'electron';
import Left from './AppLeft';
import Page from './elements/Page';

export default class App extends Component {

    close = () => {
        let window = remote.getCurrentWindow();
        window.close();
    }

    render() {
        return <div className="app">
            <Left items={[
                    {text: 'Active', onClick: this.close},
                    {text: 'Storage', onClick: this.close},
                    {text: 'Exit', onClick: this.close}
                ]} />
            <Page title="Active">Test</Page>
        </div>
    }
}