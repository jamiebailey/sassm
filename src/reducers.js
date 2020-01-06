import { combineReducers } from 'redux';
import activeTab from './reducers/activeTab';
import storageList from './reducers/storageTab';

export default combineReducers({
    activeTab,
    storageList
});