import { combineReducers } from 'redux';
import { EXIT, SET_VISIBLE_PAGE, visiblePage } from './actions';

const initialState = {
    visiblePage: visiblePage.SHOW_ACTIVE,
    exit: false
}

export default function app(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBLE_PAGE:
            return Object.assign({}, state, {
                visiblePage: action.page
            })
        case EXIT:
            return Object.assign({}, state, {
                exit: true
            })
        default:
            return state
    }
}