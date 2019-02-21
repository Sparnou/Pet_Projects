import axios from 'axios';

import { getRandomElemFromArray, getCategoriesQuery } from '../utils/utils';


const getRandomUserBackground = userCategoriesObj => {

    const url = 'http://www.splashbase.co/api/v1/images/search';

    return axios
        .get(url, {
            params: {
                query: getCategoriesQuery(userCategoriesObj)
            }
        })
        .then(res => getRandomElemFromArray(res.data.images))
        .catch(err => err)
};

export default getRandomUserBackground;
