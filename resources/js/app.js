require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {
    routes
} from './routes';
import Store from './store';

import App from './components/App';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(Store);
const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    }
});
