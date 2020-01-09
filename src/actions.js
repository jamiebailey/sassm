import { remote } from 'electron';

export const EXIT = 'EXIT';
export const SET_VISIBLE_PAGE = 'SET_VISIBLE_PAGE';
export const MAXIMIZE = 'MAXIMIZE';
export const MINIMIZE = 'MINIMIZE';

export const visiblePage = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_STORAGE: 'SHOW_STORAGE'
}


export function setVisiblePage(page) {
    return { type: SET_VISIBLE_PAGE, page }
}

export function exit() {
    let window = remote.getCurrentWindow();
    window.close();
    return { type: EXIT }
}

export function maximize(maximize, buttonPress = true) {
    let window = remote.getCurrentWindow();
    if(buttonPress) {
        if(maximize) {
            window.maximize();
        } else {
            window.unmaximize();
        }
    }
    return { type: MAXIMIZE, maximize };
}

export function minimize(minimize) {
    let window = remote.getCurrentWindow();
    if(minimize) {
        window.minimize();
    }
    return { type: MINIMIZE, minimize }
}