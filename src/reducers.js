import { combineReducers } from 'redux';
import activeTab from './reducers/activeTab';
import storageTab from './reducers/storageTab';
import settingsTab from './reducers/settingsTab';

export default combineReducers({
    activeTab,
    storageTab,
    settingsTab
});