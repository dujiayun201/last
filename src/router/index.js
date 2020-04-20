import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Djy from '@/components/djy'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: '/djy',
            name: 'djy',
            component: Djy
        },
    ]
})