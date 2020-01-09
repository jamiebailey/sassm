import { combineReducers } from 'redux';
import { EXIT, SET_VISIBLE_PAGE, MAXIMIZE, MINIMIZE, visiblePage } from './actions';

const initialState = {
    lastAction: { type: null },
    visiblePage: visiblePage.SHOW_ACTIVE,
    maximized: false,
    minimized: false,
    exit: false,
    active: {
        path: '',
    },
    storage: {
        path: ''
    }
}

export default function app(state = initialState, action) {
    let res = {};
    switch(action.type) {
        case SET_VISIBLE_PAGE:
            return Object.assign({}, state, {
                visiblePage: action.page
            })
        case MAXIMIZE:
            return Object.assign({}, state, {
                maximized: action.maximize
            })
        case MINIMIZE:
            return Object.assign({}, state, {
                minimized: action.minimize
            })
        case EXIT:
            return Object.assign({}, state, {
                exit: true
            })
        default:
            return Object.assign({}, state);
    }
}