import VueRouter from 'vue-router'
import Home from '../components/home/Home'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})