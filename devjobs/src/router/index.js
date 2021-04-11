import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import {auth} from "../services/firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {requiresAuth: true}
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */
            '../views/Register.vue'),
        meta: { guest: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */
            '../views/Login.vue'),
        meta: { guest: true },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/job/:id',
        name: 'JobDetails',
        component: () => import(/* webpackChunkName: "about" */ '../views/JobDetails.vue'),
        meta: {requiresAuth: true}
    },
    {
        path:'/404',
        alias:"*",
        name:'404',
        component: () => import(/* webpackChunkName: "404" */
            '../views/NotFound.vue')
    }
];




const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

//Unauthorized Users
router.beforeEach((to,from,next)=>{
    const requiredAuth = to.matched.some(record=>record.meta.requiresAuth);
    const user = auth.currentUser;

    if(requiredAuth && !user) {
        if(!store.state.user.loggedIn  ){
            next('/login')
        }else  {
            next()
        }
    }else {
        next();
    }
});

//Authorized Users
router.beforeEach((to, from, next) => {
    const user = auth.currentUser;
    const guestRoute = to.matched.some((record) => record.meta.guest)
    console.log(user,guestRoute);
    if (guestRoute && user) {
        if (store.state.user.loggedIn) {
            next("/");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router
