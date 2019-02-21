const pickLanguageReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case 'PICK_LANGUAGE': {
            return {
                ...state,
                items: action.users
            }
        }
        default: {
            return state;
        }

    }
};

export default pickLanguageReducer;
