import React, { Component } from 'react';
import { remote } from 'electron';
import { visiblePage } from '../actions';
import Left from './AppLeft';
import Page from './elements/Page';

export default class App extends Component {
    render() {
        return <div className="app">
            <Left items={[
                    {text: 'Active', page: visiblePage.SHOW_ACTIVE},
                    {text: 'Storage', page: visiblePage.SHOW_STORAGE}
                ]} />
            <Page title="Active">Test</Page>
        </div>
    }
}