import Vue from 'vue'
import ApiService from '../components/ApiService/apiService'
import router from '../router'
import { resetState } from './index'
export default {
    get_home({ commit }) {
        ApiService.get('/', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.data.result === true && response.status === 200) {
                    commit('change_response_api_home', response.data.result);
                }
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    get_register() {
        ApiService.get('register', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                // if (response.data.result === true && response.status === 200) {
                //     commit('change_response_api_home', response.data.result);
                // }
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    register({ commit }, payload) {
        console.log('login')
    },
    get_login() {
        ApiService.get('login', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                // if (response.data.result === true && response.status === 200) {
                //     commit('change_response_api_home', response.data.result);
                // }
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    login({ commit }, payload) {
        console.log('login')
    }

}