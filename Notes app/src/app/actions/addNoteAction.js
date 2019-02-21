const addNoteAction = (text) => {
    return {
        type: 'ADD_NOTE',
        id: Date.now(),
        text
    };
};

export default addNoteAction;