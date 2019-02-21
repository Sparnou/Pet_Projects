const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

let initialSate = {
    items: []
};

const manageNotesReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return {
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            };
        }
        case DELETE_NOTE: {
            return {
                items: state.items.filter(item => {
                    return item.id !== action.id;
                })
            };
        }

        default: {
            return state
        }
    }
};

export default manageNotesReducer;


