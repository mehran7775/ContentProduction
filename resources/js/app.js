import Vue from 'vue'
import App from './components/App'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router'
require('./bootstrap');

const app = new Vue({
    el: '#app',
    router,
    components:{
        App
    }
});
