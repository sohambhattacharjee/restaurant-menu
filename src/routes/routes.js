import Home from '../components/Home'
import Categories from '../components/Categories'
import Items from '../components/Items'

import fetchCategoryData from '../actions/fetchCategoryData'
import fetchItemData from '../actions/fetchItemData'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        fetchInitialData: () => { return Promise.resolve() }
    },
    {
        path: '/categories',
        component: Categories,
        exact: false,
        fetchInitialData: fetchCategoryData
    },
    {
        path: '/categories/items/:itemid',
        component: Items,
        exact: false,
        fetchInitialData: fetchItemData
    }
]

export default routes