const fetchReducer = (state = {isFetched: true}, action) => {
    switch (action.type) {
        case 'SHOW_SPINNER': {
            return {
                ...state,
                isFetched: false
            };
        }
        case 'HIDE_SPINNER': {
            return {
                ...state,
                isFetched: true
            };
        }
        default: {
            return state;
        }

    }
};

export default fetchReducer;
