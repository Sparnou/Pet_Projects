import axios from 'axios';

const registerUser = registrationData => {
    const url = 'http://localhost:8080/registerUser';

    return axios.post(url, {
        registrationData
    })
        .then(res => res)
        .catch(err => err)
};

export default registerUser;