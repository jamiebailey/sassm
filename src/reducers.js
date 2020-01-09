import { combineReducers } from 'redux';
import { SET_VISIBLE_PAGE, visiblePage } from './actions';

const initialState = {
    visiblePage: visiblePage.SHOW_ACTIVE
}

export default function app(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBLE_PAGE:
            return Object.assign({}, state, {
                visiblePage: action.page
            })
        default:
            return state
    }
}