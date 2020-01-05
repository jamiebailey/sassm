import React from 'react';
import SaveList from './App/SaveList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <SaveList path="C:\\Users\\Jamie\\Documents\\GTA San Andreas User Files" />
            </div>
        )
    }
}