import { combineReducers } from 'redux';
import activeList from './reducers/activeList';
import storeList from './reducers/storeList';

export default combineReducers({
    activeList,
    storeList
});