/* action types */
export const SET_ACTIVE_DIR = 'SET_ACTIVE_DIR';
export const SET_STORAGE_DIR = 'SET_STORAGE_DIR';

/* action creators */

export function setActiveDir(path) {
    return { type: SET_ACTIVE_DIR, path };
}

export function setStorageDir(path) {
    return { type: SET_STORAGE_DIR, path };
}