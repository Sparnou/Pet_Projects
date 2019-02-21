import { REGISTRATION_SUCCESSFUL, REGISTRATION_FAILURE, REGISTRATION_REQUEST} from './../actions/actionsTypes';

const initialState = {
    isRegistrationComplete: true,
    isRegistrationSuccessful: false
};

const registrationReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                isRegistrationComplete: false,
                isRegistrationSuccessful: false
            };
        case REGISTRATION_SUCCESSFUL:
            return {
                isRegistrationComplete: true,
                isRegistrationSuccessful: true
            };
        case REGISTRATION_FAILURE:
            return {
                isRegistrationComplete: true,
                isRegistrationSuccessful: false
            };
        default:
            return state;
    }
};

export default registrationReducer;