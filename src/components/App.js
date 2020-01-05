import React from 'react';
import SaveList from './App/SaveList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <SaveList />
                <SaveList />
            </div>
        )
    }
}