// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Render app
render(
        <App />,
    document.getElementById('app')
);