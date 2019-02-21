import authUser from '../services/authService';
import registerUser from '../services/registrationService';
import updateUserData from '../services/updateUserDataService';
import getRandomUserBackground from '../services/getPhotosService';

import {
    AUTH_SUCCESSFUL,
    AUTH_FAILURE,
    AUTH_REQUEST,
    LOG_OUT,
    UPDATE_DATA_SUCCESSFUL,
    UPDATE_DATA_FAILURE,
    UPDATE_DATA_REQUEST,
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_FAILURE,
    REGISTRATION_REQUEST,
    FETCH_USER_BACKGROUND,
    USER_BACKGROUND_FETCHED
} from '../actions/actionsTypes';

const authRequestAction = authData => dispatch => {
    dispatch({type: AUTH_REQUEST});

    authUser(authData)
        .then(res => {

            if (res.status !== 200) {
                dispatch(authFailureAction())
            }

            dispatch(authSuccessfulAction(res.data));
        }).catch(err => {
            dispatch(authFailureAction());
        })
};


const fetchUserBackgroundAction = categories => dispatch => {
    dispatch({type: FETCH_USER_BACKGROUND});

    getRandomUserBackground(categories)
        .then(res => {
            const { url } = res;
            dispatch(backgroundFetchedAction(url))
        })
};

const backgroundFetchedAction = payload => {
    return {
        type: USER_BACKGROUND_FETCHED,
        payload
    }
};

const authSuccessfulAction = payload => {
    return {
        type: AUTH_SUCCESSFUL,
        payload
    }
};

const authFailureAction = () => {
    return {
        type: AUTH_FAILURE
    }
};

const logOutAction = () => {
    return {
        type: LOG_OUT
    }
};

const updateRequestAction = data => dispatch => {

    dispatch({type: UPDATE_DATA_REQUEST});

    updateUserData(data)
        .then(res => {

            if (res.status !== 200) {
                return dispatch(updateFailedAction())
            }

            dispatch(updateSuccessfulAction())
        })
        .catch(err => {
            dispatch(updateFailedAction())
        })
};


const updateSuccessfulAction = () => {
    return {
        type: UPDATE_DATA_SUCCESSFUL
    }
};

const updateFailedAction = () => {
    return {
        type: UPDATE_DATA_FAILURE
    }
};

const registerRequestAction = registrationData => dispatch => {
    dispatch({type: REGISTRATION_REQUEST});
    registerUser(registrationData)
        .then(res => {
            dispatch(registrationSuccessfulAction());
        })
        .catch(err => {
            dispatch(registrationFailureAction());
        });

};

const registrationSuccessfulAction = () => {
    return {
        type: REGISTRATION_SUCCESSFUL
    }
};

const registrationFailureAction = () => {
    return {
        type: REGISTRATION_FAILURE
    }
};

export {
    authRequestAction,
    logOutAction,
    updateRequestAction,
    registerRequestAction,
    fetchUserBackgroundAction
};