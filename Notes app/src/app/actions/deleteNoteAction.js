const deleteNoteAction = id => {
    return {
        type: 'DELETE_NOTE',
        id
    }
};

export default deleteNoteAction;