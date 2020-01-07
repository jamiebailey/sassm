import { SET_DIR, SHOW_TAB } from '../actions';

export default (state = null, action) => {

    if(state === null) {
        state = {
            path: null,
            show: false,
            saves: []
        };
    }

    switch(action.type) {
        case SET_DIR:
            if(action.name === 'active') {
                state.path = action.path;
            }
            return state;
        case SHOW_TAB:
            state.show = (action.name === 'active');
            return state;
        default:
            return state;
    }
}