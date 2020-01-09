// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { remote } from 'electron';
import reducers from './reducers';
import { EXIT, MAXIMIZE, MINIMIZE } from './actions';
import App from './containers/App';

const store = createStore(reducers);

store.subscribe(() => {
    let state = store.getState();
    let window = null;
    switch(state.lastAction.type) {
        case MINIMIZE:
            window = remote.getCurrentWindow();
            if(state.minimized) {
                window.minimize();
            }
            break;
        case MAXIMIZE:
            window = remote.getCurrentWindow();
            if(state.maximized) {
                window.maximize();
            } else {
                window.unmaximize();
            }
            break;
        case EXIT:
            window = remote.getCurrentWindow();
            if(state.exit === true) {
                window.close();
            }
            break;
    }
})

// Render app
render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('app')
);