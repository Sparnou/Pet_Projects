import axios from 'axios';

const getUsers = language => {
    const URL = `https://api.github.com/search/users?q=language:${language.toLowerCase()}`;

    return axios
            .get(URL)
                .then(data => data.data)
};

export default getUsers;
