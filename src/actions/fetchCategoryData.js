import axios from 'axios'

const fetchCategoryData = () => {
    return axios.get('https://davids-restaurant.herokuapp.com/categories.json').then(res => {
        return res.data;
    })
}

export default fetchCategoryData