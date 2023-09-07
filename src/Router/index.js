import { createRouter, createWebHistory } from 'vue-router'
import Category from '../Components/Category.vue'
import Shop from '../Components/Shop.vue'
import Home from '../Components/Home.vue'


const routes = [
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path:'/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path:'/',
        name:'Home',
        component: Home

    },
    { path: '/best-seller', name: 'best-seller' , component: () => import('../Components/BestSeller.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router