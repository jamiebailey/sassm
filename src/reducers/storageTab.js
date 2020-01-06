import {SET_STORAGE_DIR, TOGGLE_STORAGE_TAB} from '../actions';

export default (state = null, action) => {
    
    if(state === null) {
        state = {
            path: null,
            show: false,
            saves: []
        };
    }

    switch(action.type) {
        case TOGGLE_STORAGE_TAB:
            state.show = action.show;
            return state;
        case SET_STORAGE_DIR:
            state.path = action.path;
            return state;
        default:
            return state;
    }
}