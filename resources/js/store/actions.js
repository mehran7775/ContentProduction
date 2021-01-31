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
        ApiService.get('users/register', {
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
        ApiService.post('users/register', payload,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response)
                // if (response.data.result === true && response.status === 200) {
                //     commit('change_response_api_home', response.data.result);
                // }
            })
            .catch(error => {
                console.log(error.response)
            })
    },
    get_login() {
        ApiService.get('users/login', {
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
        ApiService.post('users/login',payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response)
                // if (response.data.result === true && response.status === 200) {
                //     commit('change_response_api_home', response.data.result);
                // }
            })
            .catch(error => {
                console.log(error.response)
            })
    }

}