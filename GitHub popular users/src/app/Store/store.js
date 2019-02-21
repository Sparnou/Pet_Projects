//Redux
import { createStore } from 'redux';
//Reducers
import mainReducer from '../reducers/index';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(mainReducer, applyMiddleware(thunk));
