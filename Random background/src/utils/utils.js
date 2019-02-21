import { isEmpty } from 'lodash';


const getRandomElemFromArray = array => array[Math.floor(Math.random()*array.length)];

const hasEmptyFields = obj => {

    for (let prop in obj) {

        if (isEmpty(obj[prop])) {
            return true;
        }
    }

    return false;
};

const getCategoriesQuery = categoriesObj => {
    let query = '';

    for (let prop in categoriesObj) {
        query+= categoriesObj[prop] ? ` ${prop}`: '';
    }

    return query;
};

export { getRandomElemFromArray, hasEmptyFields, getCategoriesQuery };