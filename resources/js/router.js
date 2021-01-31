import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/FrontEnd/Home'
import Index from './components/Admin/Index'
import Dashboard from './components/Admin/Dashboard'
import Messages from './components/Admin/Messages'
import Notifications from './components/Admin/Notifications'
import Settings from './components/Admin/Settings'
import Users from './components/Admin/Users'
import Reports from './components/Admin/Reports'
import Register from './components/FrontEnd/sign/Register'
import Login from './components/FrontEnd/sign/Login'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            children:[
                {
                path: 'account/register',
                name: 'register',
                component: Register
              },
              {
                path: 'account/login',
                name:'login',
                component: Login
              },
            ]
        },
        {
            path:'/admin',
            name:'admin',
            component:Index,
            children:[
                {
                    path:'dahboard',
                    name:'dashboard',
                    component:Dashboard
                },
                {
                    path:'messages',
                    name:'messages',
                    component:Messages
                },
                {
                    path:'notifications',
                    name:'notifications',
                    component:Notifications
                },
                {
                    path:'reports',
                    name:'reports',
                    component:Reports
                },
                {
                    path:'settings',
                    name:'settings',
                    component:Settings
                },
                {
                    path:'users',
                    name:'users',
                    component:Users
                }
            ]
        }
    ],
})