import axios from 'axios';

const updateUserData = data => {

    const url = 'http://localhost:8080/updateUserData';

    return axios.put(url, {
        data
    })
        .then(res => res)
        .catch(err => err)
};

export default updateUserData;