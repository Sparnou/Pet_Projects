//Redux
import { combineReducers } from 'redux'
//Reducers
import pickLanguageReducer from './pickLanguage'
import fetchReducer from './fetchReducer'

export default combineReducers({
    pickLanguageReducer,
    fetchReducer
});
