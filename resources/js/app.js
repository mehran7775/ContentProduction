import Vue from 'vue'
import App from './components/App'
import {store} from './store/index'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import router from './router'
require('./bootstrap');
Vue.config.productionTip = false;
const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        App
    }
});
