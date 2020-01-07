import { SHOW_TAB } from '../actions';

export default (state = null, action) => {

    if(state === null) {
        state = {
            activeDir: null,
            storageDir: null
        };
    }

    switch(action.type) {
        case SHOW_TAB:
            state.show = (action.name === 'settings');
            return state;
        default:
            return state;
    }
}