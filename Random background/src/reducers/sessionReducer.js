import {
    AUTH_SUCCESSFUL,
    AUTH_FAILURE,
    AUTH_REQUEST,
    LOG_OUT,
    UPDATE_DATA_REQUEST,
    UPDATE_DATA_SUCCESSFUL,
    UPDATE_DATA_FAILURE,
    FETCH_USER_BACKGROUND,
    USER_BACKGROUND_FETCHED
} from '../actions/actionsTypes';

const initialState = {
    isLoggedIn: false,
    isLogInComplete: true,
    userId: null,
    userCategories: [],
    userBackgroundUrl: '',
    isUserBackgroundFetched: false,
    isAuthFailed: false,
    isUpdateRequestComplete: true,
    isUpdateFailed: false,
    isUpdateSuccessful: false
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                isLogInComplete: false,
                userCategories: [],
                isAuthFailed: false,
            };
        case AUTH_SUCCESSFUL:
            const { categories, id } = action.payload;

            return {
                isUpdateRequestComplete: true,
                isUpdateFailed: false,
                isLoggedIn: true,
                isLogInComplete: true,
                userId: id,
                userCategories: categories,
                isAuthFailed: false
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLogInComplete: true,
                userCategories: [],
                isAuthFailed: true
            };
        case LOG_OUT:
            return {
                isUpdateRequestComplete: true,
                isUpdateFailed: false,
                isUpdateSuccessful: false,
                isLoggedIn: false,
                isLogInComplete: true,
                userId: null,
                userCategories: [],
                isAuthFailed: false,
                isUserBackgroundFetched: false,
                userBackgroundUrl: ''
            };
        case FETCH_USER_BACKGROUND:
            return {
                ...state,
                userBackgroundUrl: '',
                isUserBackgroundFetched: false,
            };
        case USER_BACKGROUND_FETCHED:

            return {
                ...state,
                isUserBackgroundFetched: true,
                userBackgroundUrl: action.payload
            };
        case UPDATE_DATA_REQUEST:
            return {
                ...state,
                isUpdateRequestComplete: false,
                isUpdateFailed: false
            };
        case UPDATE_DATA_SUCCESSFUL:
            return {
                ...state,
                isUpdateRequestComplete: true,
                isUpdateFailed: false,
                isUpdateSuccessful: true
            };
        case UPDATE_DATA_FAILURE:
            return {
                ...state,
                isUpdateRequestComplete: true,
                isUpdateFailed: true,
                isUpdateSuccessful: false
            };
        default:
            return state
    }
};

export default sessionReducer;