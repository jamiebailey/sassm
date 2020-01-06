import {SET_ACTIVE_DIR, TOGGLE_ACTIVE_TAB} from '../actions';

export default (state = null, action) => {

    if(state === null) {
        state = {
            path: null,
            show: false,
            saves: []
        };
    }

    switch(action.type) {
        case TOGGLE_ACTIVE_TAB:
            state.show = action.show;
            return state;
        case SET_ACTIVE_DIR:
            state.path = action.path;
            return state;
        default:
            return state;
    }
}