import {SET_APP_ACTIVE_DIR} from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case SET_APP_ACTIVE_DIR:
            state.path = action.path;
            return state;
        default:
            return state;
    }
}