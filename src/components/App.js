import React, { Component } from 'react';
import { remote } from 'electron';
import { visiblePage } from '../actions';
import Left from './AppLeft';
import Page from './elements/Page';

export default class App extends Component {
    render() {
        let page;

        switch(this.props.visiblePage) {
            case visiblePage.SHOW_ACTIVE:
                page = <Page title="Active">Test1</Page>
                break;
            case visiblePage.SHOW_STORAGE:
                page = <Page title="Storage">Test2</Page>
                break;
        }

        return <div className="app">
            <Left items={[
                    {text: 'Active', page: visiblePage.SHOW_ACTIVE},
                    {text: 'Storage', page: visiblePage.SHOW_STORAGE}
                ]} />
            {page}
        </div>
    }
}