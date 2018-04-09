import axios from 'axios'

const fetchItemData = (itemid) => {
    return axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${itemid}`).then(res => {
        return res.data.menu_items;
    })
}

export default fetchItemData