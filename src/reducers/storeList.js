import {SET_APP_STORE_DIR} from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case SET_APP_STORE_DIR:
            state.path = action.text;
            return state;
        default:
            return state;
    }
}