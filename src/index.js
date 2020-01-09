// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { remote } from 'electron';
import reducers from './reducers';
import App from './containers/App';

const store = createStore(reducers);

store.subscribe(() => {
    let state = store.getState();
    if(state.exit === true) {
        let window = remote.getCurrentWindow();
        window.close();
    }
})

// Render app
render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('app')
);