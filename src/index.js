// load stylesheet
import '../assets/app.scss';

// setup react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { remote } from 'electron';
import reducers from './reducers';
import { minimize, maximize } from './actions';
import App from './containers/App';

const store = createStore(reducers);


let window = remote.getCurrentWindow();

window.on('restore', () => {
    store.dispatch(minimize(false));
});

window.on('maximize', () => {
    store.dispatch(maximize(true, false));
});

window.on('unmaximize', () => {
    store.dispatch(maximize(false, false));
})


// Render app
render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('app')
);