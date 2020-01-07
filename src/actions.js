/* action types */
export const SHOW_TAB = 'SHOW_TAB';
export const SET_DIR = 'SET_DIR';

/* action creators */

export function showTab(name) {
    return { type: SHOW_TAB, name }
}

export function setDir(name, path) {
    return { type: SET_DIR, name, path }
}