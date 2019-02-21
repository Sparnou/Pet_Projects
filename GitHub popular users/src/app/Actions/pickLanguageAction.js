import getUsers from '../API/API';

const pickLanguage = language => dispatch => {
    dispatch({
        type: 'SHOW_SPINNER'
    });

    getUsers(language)
        .then(data => {
            dispatch({type: 'HIDE_SPINNER'});
            return data
        })
        .then(data => dispatch({type: 'PICK_LANGUAGE', users: data.items}))
};

export default pickLanguage;
