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
            res = Object.assign({}, state, {
                visiblePage: action.page
            })
            break;
        case MAXIMIZE:
            res = Object.assign({}, state, {
                maximized: action.maximize
            })
            break;
        case MINIMIZE:
            res = Object.assign({}, state, {
                minimized: action.minimize
            })
            break;
        case EXIT:
            res = Object.assign({}, state, {
                exit: true
            })
            break;
        default:
            res = Object.assign({}, state);
            break;
    }
    return Object.assign(res, {
        lastAction: action
    });
}