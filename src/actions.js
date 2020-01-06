/* action types */
export const TOGGLE_ACTIVE_TAB = 'TOGGLE_ACTIVE_TAB';
export const SET_ACTIVE_DIR = 'SET_ACTIVE_DIR';
export const TOGGLE_STORAGE_TAB = 'TOGGLE_STORAGE_TAB';
export const SET_STORAGE_DIR = 'SET_STORAGE_DIR';

/* action creators */

export function toggleActiveTab(show) {
    return { type: TOGGLE_ACTIVE_TAB, show }
}

export function setActiveDir(path) {
    return { type: SET_ACTIVE_DIR, path };
}

export function toggleStorageTab(show) {
    return { type: TOGGLE_STORAGE_TAB, show }
}

export function setStorageDir(path) {
    return { type: SET_STORAGE_DIR, path };
}