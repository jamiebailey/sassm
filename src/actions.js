/* action types */
export const SET_APP_ACTIVE_DIR = 'SET_APP_ACTIVE_DIR';
export const SET_APP_STORE_DIR = 'SET_APP_STORE_DIR';

/* action creators */

export function setAppActiveDir(path) {
    return { type: SET_APP_ACTIVE_DIR, path };
}

export function setAppStoreDir(path) {
    return { type: SET_APP_STORE_DIR, path };
}