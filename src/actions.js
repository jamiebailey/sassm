export const EXIT = 'EXIT';
export const SET_VISIBLE_PAGE = 'SET_VISIBLE_PAGE';
export const MAXIMIZE = 'MAXIMIZE';
export const MINIMIZE = 'MINIMIZE';

export const visiblePage = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_STORAGE: 'SHOW_STORAGE'
}

export function exit() {
    return { type: EXIT }
}

export function setVisiblePage(page) {
    return { type: SET_VISIBLE_PAGE, page }
}

export function maximize(maximize) {
    return { type: MAXIMIZE, maximize };
}

export function minimize(minimize) {
    return { type: MINIMIZE, minimize }
}