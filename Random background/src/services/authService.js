import axios from 'axios';

const authUser = authData => {

    return axios.post('http://localhost:8080/authUser', {
        ...authData
    })
        .then(res => res)
        .catch(err => err)
};

export default authUser;