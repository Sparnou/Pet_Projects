import { combineReducers } from 'redux';

import sessionReducer from '../reducers/sessionReducer';
import registrationReducer from '../reducers/registrationReducer';

const rootReducer = combineReducers({
    sessionReducer,
    registrationReducer
});

export default rootReducer;