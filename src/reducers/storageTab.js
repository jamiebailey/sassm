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
            if(action.name === 'storage') {
                state.path = action.path;
            }
            return state;
        case SHOW_TAB:
            state.show = (action.name === 'storage');
            return state;
        default:
            return state;
    }
}